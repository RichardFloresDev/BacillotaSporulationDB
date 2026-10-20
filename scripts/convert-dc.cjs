// Converts FIRMA.dc.html (template + logic) into JSX/JS sources for a Vite app.
// usage: node convert.cjs <FIRMA.dc.html> <outDir>
const fs = require('fs');
const path = require('path');
const { parseDocument } = require('htmlparser2');

const [, , src, out] = process.argv;
const html = fs.readFileSync(src, 'utf8');

const open = /<x-dc(?:\s[^>]*)?>/.exec(html);
const close = html.lastIndexOf('</x-dc>');
let tpl = html.slice(open.index + open[0].length, close);

// helmet -> css file
let css = '';
tpl = tpl.replace(/<helmet>([\s\S]*?)<\/helmet>/i, (_, inner) => {
  css = inner.replace(/<\/?style>/gi, '').trim();
  return '';
});
css = css.replace(/url\('fonts\//g, "url('/fonts/");

const script = /<script[^>]*data-dc-script[^>]*>([\s\S]*?)<\/script>/.exec(html)[1];

const EVENT_MAP = { onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onkeydown: 'onKeyDown', onkeyup: 'onKeyUp', onmousedown: 'onMouseDown', onmouseup: 'onMouseUp', onmouseenter: 'onMouseEnter', onmouseleave: 'onMouseLeave', onmousemove: 'onMouseMove', onfocus: 'onFocus', onblur: 'onBlur', onwheel: 'onWheel', onpointerdown: 'onPointerDown', onpointermove: 'onPointerMove', onpointerup: 'onPointerUp', onpointerleave: 'onPointerLeave', ondoubleclick: 'onDoubleClick', oncontextmenu: 'onContextMenu', onload: 'onLoad' };

// ---- expressions (mirror of dc-runtime resolve()) ----
function topEq(e) {
  let d = 0;
  for (let i = 0; i < e.length; i++) {
    const c = e[i];
    if (c === '[' || c === '(') d++;
    else if (c === ']' || c === ')') d--;
    else if (d === 0 && (c === '=' || c === '!') && e[i + 1] === '=') {
      if (i > 0 && (e[i - 1] === '=' || e[i - 1] === '!')) continue;
      if (!e.slice(0, i).trim()) continue;
      const op = e[i + 2] === '=' ? c + '==' : c + '=';
      return { i, op };
    }
  }
  return null;
}
function wraps(e) {
  let d = 0;
  for (let i = 0; i < e.length - 1; i++) { if (e[i] === '(') d++; else if (e[i] === ')') { d--; if (d === 0) return false; } }
  return true;
}
function expr(src, scope) {
  const e = String(src).trim();
  if (!e) return 'undefined';
  if (e[0] === '(' && e.at(-1) === ')' && wraps(e)) return '(' + expr(e.slice(1, -1), scope) + ')';
  const q = topEq(e);
  if (q) return '(' + expr(e.slice(0, q.i), scope) + ' ' + q.op + ' ' + expr(e.slice(q.i + q.op.length), scope) + ')';
  if (e[0] === '!') return '!' + expr(e.slice(1), scope);
  if (['true', 'false', 'null', 'undefined'].includes(e)) return e;
  if (/^-?\d+(\.\d+)?$/.test(e)) return e;
  if (e.length >= 2 && (e[0] === '"' || e[0] === "'") && e.at(-1) === e[0]) return JSON.stringify(e.slice(1, -1));
  const head = e.match(/^[A-Za-z_$][A-Za-z0-9_$]*/);
  if (!head) throw new Error('bad expr ' + e);
  let o = scope.includes(head[0]) ? head[0] : 'v.' + head[0];
  let i = head[0].length;
  while (i < e.length) {
    if (e[i] === '.') {
      const m = e.slice(i + 1).match(/^[A-Za-z_$][A-Za-z0-9_$]*/) || e.slice(i + 1).match(/^\d+/);
      o += /^\d/.test(m[0]) ? '?.[' + m[0] + ']' : '?.' + m[0];
      i += 1 + m[0].length;
    } else if (e[i] === '[') {
      let d = 1, j = i + 1;
      while (j < e.length && d > 0) { if (e[j] === '[') d++; else if (e[j] === ']') { d--; if (d === 0) break; } j++; }
      o += '?.[' + expr(e.slice(i + 1, j), scope) + ']';
      i = j + 1;
    } else throw new Error('bad expr ' + e);
  }
  return o;
}
function attrExpr(raw, scope) {
  const whole = raw.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
  if (whole) return expr(whole[1], scope);
  if (raw.includes('{{')) {
    const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
    return '(' + parts.map((s, i) => (i & 1 ? '(' + expr(s, scope) + ' ?? "")' : JSON.stringify(s))).join(' + ') + ')';
  }
  return null; // static
}

// ---- pseudo classes (style-hover etc) -> static css ----
const pseudo = new Map();
function importantify(c) {
  return c.split(';').map(d => d.trim()).filter(Boolean).map(d => (/!\s*important$/i.test(d) ? d : d + ' !important')).join(';');
}
function pseudoClass(p, value) {
  if (value.includes('{{')) throw new Error('dynamic pseudo style');
  const k = p + '|' + value;
  if (!pseudo.has(k)) {
    const cls = 'scp' + pseudo.size.toString(36);
    const pe = p === 'before' || p === 'after';
    pseudo.set(k, { cls, rule: '.' + cls + (pe ? '::' : ':') + p + '{' + (pe ? value : importantify(value)) + '}' });
  }
  return pseudo.get(k).cls;
}

// ---- JSX generation ----
const VOID = new Set(['input', 'img', 'br', 'hr', 'meta', 'link', 'source', 'area', 'col', 'wbr']);
const jsStr = s => JSON.stringify(s);

function children(node, scope, ind) {
  return node.children.map(c => gen(c, scope, ind)).filter(x => x != null);
}
function gen(n, scope, ind) {
  const pad = '  '.repeat(ind);
  if (n.type === 'text') {
    const t = n.data;
    if (!t.includes('{{')) {
      if (!t.trim() && !t.includes(' ')) return null;
      return pad + '{' + jsStr(decode(t)) + '}';
    }
    const parts = t.split(/\{\{([\s\S]+?)\}\}/g);
    return parts.map((p, i) => (i & 1 ? pad + '{I(' + expr(p, scope) + ')}' : p ? pad + '{' + jsStr(decode(p)) + '}' : null)).filter(Boolean).join('\n');
  }
  if (n.type === 'comment') return null;
  if (n.type !== 'tag' && n.type !== 'script' && n.type !== 'style') return null;
  const tag = n.name;
  const A = n.attribs;
  if (tag === 'sc-for') {
    const as = A.as || 'item';
    const list = attrExpr(A.list, scope);
    const sub = [...scope, as, '$index'];
    const kids = children(n, sub, ind + 2);
    return pad + '{L(' + list + ').map((' + as + ', $index) => (\n' + pad + '  <React.Fragment key={$index}>\n' + kids.join('\n') + '\n' + pad + '  </React.Fragment>\n' + pad + '))}';
  }
  if (tag === 'sc-if') {
    const kids = children(n, scope, ind + 2);
    return pad + '{' + attrExpr(A.value, scope) + ' ? (\n' + pad + '  <>\n' + kids.join('\n') + '\n' + pad + '  </>\n' + pad + ') : null}';
  }
  if (tag.startsWith('sc-') || tag === 'x-import' || tag === 'dc-import') throw new Error('unsupported ' + tag);
  const props = [];
  const classes = [];
  for (const [name, value] of Object.entries(A)) {
    if (name.startsWith('hint-')) continue;
    if (name.startsWith('style-')) { classes.push(pseudoClass(name.slice(6), value)); continue; }
    let key = name;
    if (key === 'class') key = 'className';
    else if (key === 'for') key = 'htmlFor';
    else if (/^on[a-z]/.test(key)) key = EVENT_MAP[key] || 'on' + key[2].toUpperCase() + key.slice(3);
    else if (key.includes('-') && !/^(data|aria)-/.test(key)) key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const ex = attrExpr(value, scope);
    if (key === 'className' && classes) { props.push(['__cls', ex ?? jsStr(decode(value))]); continue; }
    if (key === 'style') props.push([key, 'S(' + (ex ?? jsStr(decode(value))) + ')']);
    else if (key === 'value' && ex) props.push([key, '(' + ex + ') ?? ""']);
    else if (key === 'checked' && ex) props.push([key, '(' + ex + ') ?? false']);
    else if (ex) props.push([key, ex]);
    else props.push([key, null, decode(value)]);
  }
  const cls = props.find(p => p[0] === '__cls');
  const rest = props.filter(p => p[0] !== '__cls');
  if (cls || classes.length) {
    const parts = [];
    if (cls) parts.push(cls[1]);
    if (classes.length) parts.push(jsStr(classes.join(' ')));
    rest.push(['className', parts.length === 1 ? parts[0] : '[' + parts.join(', ') + '].filter(Boolean).join(" ")']);
  }
  const attrs = rest.map(([k, ex, lit]) => (ex != null ? k + '={' + ex + '}' : k + '={' + jsStr(lit) + '}')).join(' ');
  const openTag = '<' + tag + (attrs ? ' ' + attrs : '');
  if (VOID.has(tag)) return pad + openTag + ' />';
  const kids = children(n, scope, ind + 1);
  if (!kids.length) return pad + openTag + '></' + tag + '>';
  return pad + openTag + '>\n' + kids.join('\n') + '\n' + pad + '</' + tag + '>';
}
function decode(s) {
  return s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&middot;/g, '·');
}

const doc = parseDocument(tpl, { lowerCaseAttributeNames: false, lowerCaseTags: false, recognizeSelfClosing: true, decodeEntities: false });
const body = children(doc, [], 2);

const view = `// Generado a partir de la plantilla del prototipo FIRMA.dc.html (design handoff).
import React from 'react';

// Igual que el runtime del prototipo: los valores se pintan dentro de <span class="sc-interp">.
const I = x => {
  if (x === undefined || x === null || typeof x === 'boolean') return null;
  if (React.isValidElement(x) || Array.isArray(x)) return x;
  return <span className="sc-interp">{String(x)}</span>;
};
const L = x => (Array.isArray(x) ? x : []);
const camel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const cache = new Map();
const S = css => {
  if (css == null || typeof css !== 'string') return css;
  let o = cache.get(css);
  if (o) return o;
  o = {};
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const p = decl.slice(0, i).trim();
    o[p.startsWith('--') ? p : camel(p)] = decl.slice(i + 1).trim();
  }
  if (cache.size > 5000) cache.clear();
  cache.set(css, o);
  return o;
};

export default function View(v) {
  return (
    <>
${body.join('\n')}
    </>
  );
}
`;

const logic = `// Lógica de la app FIRMA, tomada del bloque <script data-dc-script> del prototipo.
import React from 'react';
import { DCLogic } from './dc.jsx';

${script.trim()}

export default Component;
`;

fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'View.jsx'), view);
fs.writeFileSync(path.join(out, 'logic.js'), logic);
fs.writeFileSync(path.join(out, 'firma.css'), css + '\n\n/* estados :hover del prototipo (style-hover) */\n' + [...pseudo.values()].map(p => p.rule).join('\n') + '\n');
console.log('ok', body.length, 'root nodes,', pseudo.size, 'pseudo classes');
