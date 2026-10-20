// Generado a partir de la plantilla del prototipo FIRMA.dc.html (design handoff).
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
    <div style={S("height:100vh;display:grid;grid-template-rows:60px minmax(0,1fr);grid-template-columns:minmax(0,1fr);font-size:13px;background:var(--bg);color:var(--ink)")}>
      {"\n  "}
      <header style={S("padding:0 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid var(--line);background:var(--bg)")}>
        {"\n    "}
        <div style={S("display:flex;align-items:center;gap:12px;flex-shrink:0")}>
          {"\n      "}
          <div onClick={v.goHome} style={S("display:flex;align-items:center;gap:10px;cursor:pointer")}>
            {"\n        "}
            <span style={S("width:30px;height:30px;border-radius:7px;background:var(--logoBg);display:flex;align-items:center;justify-content:center;flex-shrink:0")}>
              <img src={"assets/logo.jpg"} alt={""} style={S("width:26px;height:26px;mix-blend-mode:var(--logoBlend)")} />
            </span>
            {"\n        "}
            <span style={S("font-weight:700;font-size:17px;letter-spacing:.04em")}>
              {"FIRMA"}
            </span>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n    "}
        <nav style={S("display:flex;gap:2px;font-weight:500;min-width:0;flex:1;overflow-x:auto;scrollbar-width:none")}>
          {"\n      "}
          {L(v.topNav).map((t, $index) => (
            <React.Fragment key={$index}>
              {"\n        "}
              <span onClick={t?.onClick} style={S(("padding:7px 11px;border-radius:7px;flex-shrink:0;cursor:pointer;white-space:nowrap;transition:background .12s;color:" + (t?.fg ?? "") + ";background:" + (t?.bg ?? "") + ""))} className={"scp0"}>
                {I(t?.label)}
              </span>
              {"\n      "}
            </React.Fragment>
          ))}
          {"\n    "}
        </nav>
        {"\n    "}
        <div style={S("display:flex;align-items:center;gap:8px;flex-shrink:0")}>
          {"\n      "}
          <div style={S("position:relative;margin-right:4px")}>
            {"\n        "}
            <span onClick={v.toggleOrg} style={S(("height:36px;padding:0 12px;border:1px solid var(--line);border-radius:8px;display:flex;align-items:center;gap:8px;cursor:pointer;white-space:nowrap;background:" + (v.orgBtnBg ?? "") + ""))} className={"scp1"}>
              <span style={S(("width:7px;height:7px;border-radius:50%;background:" + (v.orgDot ?? "") + ""))}></span>
              <em>
                {I(v.orgShort)}
              </em>
              <span style={S("color:var(--mute)")}>
                {I(v.orgStrain)}
              </span>
              <span style={S("color:var(--mute);font-size:10px")}>
                {"▾"}
              </span>
            </span>
            {"\n        "}
            {v.orgOpen ? (
              <>
                {"\n          "}
                <div onClick={v.closeOrg} style={S("position:fixed;inset:0;z-index:29")}></div>
                {"\n          "}
                <div style={S("position:absolute;right:0;top:44px;width:380px;max-height:70vh;background:var(--bg);border:1px solid var(--line);border-radius:12px;box-shadow:0 16px 40px var(--shadow);z-index:30;display:flex;flex-direction:column;overflow:hidden")}>
                  {"\n            "}
                  <div style={S("padding:12px;border-bottom:1px solid var(--line)")}>
                    {"\n              "}
                    <div style={S("height:36px;border:1.5px solid var(--ink);border-radius:8px;display:flex;align-items:center;padding:0 10px;gap:8px")}>
                      {"\n                "}
                      <span style={S("color:var(--mute)")}>
                        {"⌕"}
                      </span>
                      {"\n                "}
                      <input ref={v.oRef} value={(v.oq) ?? ""} onChange={v.onOQ} placeholder={"Buscar especie, cepa o género"} style={S("flex:1;min-width:0;border:0;outline:none;background:transparent;font-size:13px")} />
                      {"\n              "}
                    </div>
                    {"\n            "}
                  </div>
                  {"\n            "}
                  <div style={S("flex:1;overflow:auto;padding:6px")}>
                    {"\n              "}
                    {L(v.orgGroups).map((g, $index) => (
                      <React.Fragment key={$index}>
                        {"\n                "}
                        <div style={S("display:flex;flex-direction:column")}>
                          {"\n                  "}
                          <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em;padding:10px 10px 6px")}>
                            {I(g?.title)}
                          </span>
                          {"\n                  "}
                          {L(g?.items).map((o, $index) => (
                            <React.Fragment key={$index}>
                              {"\n                    "}
                              <div onClick={o?.onClick} style={S(("display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;padding:8px 10px;border-radius:7px;cursor:pointer;background:" + (o?.bg ?? "") + ""))} className={"scp0"}>
                                {"\n                      "}
                                <div style={S("display:flex;flex-direction:column;gap:2px;min-width:0")}>
                                  <span style={S("white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}>
                                    <em style={S(("font-weight:" + (o?.fw ?? "") + ";color:" + (o?.fg ?? "") + ""))}>
                                      {I(o?.name)}
                                    </em>
                                    {" "}
                                    <span style={S("color:var(--mute)")}>
                                      {I(o?.strain)}
                                    </span>
                                  </span>
                                  <span style={S("font-size:11px;color:var(--mute)")}>
                                    {I(o?.meta)}
                                  </span>
                                </div>
                                {"\n                      "}
                                <span style={S(("font-size:11px;padding:2px 7px;border-radius:999px;white-space:nowrap;background:" + (o?.tagBg ?? "") + ";color:" + (o?.tagFg ?? "") + ""))}>
                                  {I(o?.tag)}
                                </span>
                                {"\n                    "}
                              </div>
                              {"\n                  "}
                            </React.Fragment>
                          ))}
                          {"\n                "}
                        </div>
                        {"\n              "}
                      </React.Fragment>
                    ))}
                    {"\n              "}
                    {v.orgNone ? (
                      <>
                        <div style={S("padding:20px;text-align:center;color:var(--mute)")}>
                          {"Sin coincidencias"}
                        </div>
                      </>
                    ) : null}
                    {"\n            "}
                  </div>
                  {"\n            "}
                  <div style={S("padding:10px 14px;border-top:1px solid var(--line);color:var(--mute);font-size:11px;display:flex;justify-content:space-between;gap:8px")}>
                    <span>
                      {I(v.orgFoot)}
                    </span>
                    <span onClick={v.orgToFilo} style={S("color:var(--acc);cursor:pointer;white-space:nowrap")}>
                      {"Ver en el árbol →"}
                    </span>
                  </div>
                  {"\n          "}
                </div>
                {"\n        "}
              </>
            ) : null}
            {"\n      "}
          </div>
          {"\n      "}
          <span onClick={v.toggleTheme} title={v.themeLabel} style={S("height:36px;width:36px;justify-content:center;padding:0;border:1px solid var(--line);border-radius:8px;display:flex;align-items:center;gap:8px;cursor:pointer;white-space:nowrap")} className={"scp1"}>
            <span style={S("font-size:14px")}>
              {I(v.themeIcon)}
            </span>
          </span>
          {"\n      "}
          <span onClick={v.openMenu} style={S("width:36px;height:36px;border:1px solid var(--line);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer")} className={"scp1"}>
            <span style={S("width:16px;height:1.5px;background:var(--ink)")}></span>
            <span style={S("width:16px;height:1.5px;background:var(--ink)")}></span>
            <span style={S("width:16px;height:1.5px;background:var(--ink)")}></span>
          </span>
          {"\n    "}
        </div>
        {"\n  "}
      </header>
      {"\n\n  "}
      {v.menuOpen ? (
        <>
          {"\n    "}
          <div onClick={v.closeMenu} style={S("position:fixed;inset:0;background:rgba(5,7,20,.35);z-index:20")}></div>
          {"\n    "}
          <nav style={S("position:fixed;top:0;right:0;bottom:0;width:340px;max-width:90vw;background:var(--bg);border-left:1px solid var(--line);z-index:21;display:flex;flex-direction:column;box-shadow:-12px 0 40px var(--shadow)")}>
            {"\n      "}
            <div style={S("height:60px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)")}>
              {"\n        "}
              <span style={S("font-weight:600")}>
                {"Menú"}
              </span>
              {"\n        "}
              <span onClick={v.closeMenu} style={S("width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;border-radius:6px")} className={"scp0"}>
                {"×"}
              </span>
              {"\n      "}
            </div>
            {"\n      "}
            <div style={S("flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:18px")}>
              {"\n        "}
              {L(v.menuGroups).map((g, $index) => (
                <React.Fragment key={$index}>
                  {"\n          "}
                  <div style={S("display:flex;flex-direction:column;gap:2px")}>
                    {"\n            "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em;padding:6px 10px")}>
                      {I(g?.title)}
                    </span>
                    {"\n            "}
                    {L(g?.items).map((it, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <div onClick={it?.onClick} style={S(("padding:10px;border-radius:8px;cursor:pointer;display:flex;flex-direction:column;gap:3px;background:" + (it?.bg ?? "") + ""))} className={"scp0"}>
                          {"\n                "}
                          <span style={S(("font-weight:600;color:" + (it?.fg ?? "") + ""))}>
                            {I(it?.label)}
                          </span>
                          {"\n                "}
                          <span style={S("font-size:12px;color:var(--mute);line-height:1.5")}>
                            {I(it?.desc)}
                          </span>
                          {"\n              "}
                        </div>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                  </div>
                  {"\n        "}
                </React.Fragment>
              ))}
              {"\n      "}
            </div>
            {"\n      "}
            <div style={S("padding:16px 20px;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:10px")}>
              {"\n        "}
              <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                {"Apariencia"}
              </span>
              {"\n        "}
              <div style={S("display:flex;background:var(--soft);border-radius:8px;padding:3px")}>
                {"\n          "}
                {L(v.themeOpts).map((o, $index) => (
                  <React.Fragment key={$index}>
                    {"\n            "}
                    <span onClick={o?.onClick} style={S(("flex:1;text-align:center;padding:7px 0;border-radius:6px;cursor:pointer;background:" + (o?.bg ?? "") + ";color:" + (o?.fg ?? "") + ""))}>
                      {I(o?.label)}
                    </span>
                    {"\n          "}
                  </React.Fragment>
                ))}
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n    "}
          </nav>
          {"\n  "}
        </>
      ) : null}
      {"\n\n  "}
      {v.isHome ? (
        <>
          {"\n    "}
          <div style={S("overflow:auto;background:var(--bg)")}>
            {"\n      "}
            <section style={S("background:var(--hero);color:var(--ink);position:relative;overflow:hidden;min-height:100%;display:flex;flex-direction:column;transition:background .3s")}>
              {"\n        "}
              {I(v.heroNet)}
              {"\n        "}
              <div style={S("position:relative;flex:1;width:100%;max-width:1240px;margin:0 auto;padding:72px 32px 48px;display:flex;flex-direction:column;justify-content:center;gap:40px")}>
                {"\n          "}
                <div style={S("display:flex;flex-direction:column;gap:28px;max-width:720px")}>
                  {"\n            "}
                  <h1 style={S("margin:0;font-size:52px;line-height:1.06;font-weight:600;letter-spacing:-.025em;text-wrap:pretty")}>
                    {"Redes de regulación transcripcional y rutas metabólicas de "}
                    <em>
                      {"Bacillus"}
                    </em>
                    {" y otros Firmicutes"}
                  </h1>
                  {"\n            "}
                  <div style={S("position:relative")}>
                    {"\n              "}
                    <div style={S("height:62px;border-radius:12px;display:flex;align-items:center;padding:0 12px 0 20px;gap:12px;background:var(--heroSearch);border:1.5px solid var(--heroSearchBd);box-shadow:0 10px 30px rgba(16,35,240,.08)")}>
                      {"\n                "}
                      <span style={S("color:var(--mute);font-size:18px")}>
                        {"⌕"}
                      </span>
                      {"\n                "}
                      <input ref={v.hRef} value={(v.hq) ?? ""} onChange={v.onHQ} onKeyDown={v.onHKey} onFocus={v.onHFocus} onBlur={v.onHBlur} placeholder={"Busca un gen, regulador, operón, ruta o especie"} style={S("flex:1;min-width:0;border:0;outline:none;font-size:16px;background:transparent")} />
                      {"\n              "}
                    </div>
                    {"\n              "}
                    {v.showHRes ? (
                      <>
                        {"\n                "}
                        <div style={S("position:absolute;left:0;right:0;top:70px;background:var(--bg);color:var(--ink);border:1px solid var(--line);border-radius:10px;box-shadow:0 12px 32px var(--shadow);z-index:5;overflow:hidden")}>
                          {"\n                  "}
                          {L(v.hRes).map((r, $index) => (
                            <React.Fragment key={$index}>
                              {"\n                    "}
                              <div onMouseDown={r?.onPick} style={S(("padding:12px 16px;display:flex;justify-content:space-between;gap:12px;cursor:pointer;font-size:14px;background:" + (r?.bg ?? "") + ""))}>
                                <span style={S(("font-weight:600;font-style:" + (r?.fst ?? "") + ""))}>
                                  {I(r?.label)}
                                </span>
                                <span style={S("color:var(--mute);font-size:12px")}>
                                  {I(r?.kind)}
                                </span>
                              </div>
                              {"\n                  "}
                            </React.Fragment>
                          ))}
                          {"\n                  "}
                          <div style={S("padding:8px 16px;border-top:1px solid var(--line);color:var(--mute);font-size:11px")}>
                            {"↑↓ navegar · ↵ abrir · esc cerrar"}
                          </div>
                          {"\n                "}
                        </div>
                        {"\n              "}
                      </>
                    ) : null}
                    {"\n              "}
                    <div style={S("display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:16px;color:var(--heroMute)")}>
                      {"\n                "}
                      <span>
                        {"Ejemplos:"}
                      </span>
                      {"\n                "}
                      {L(v.examples).map((x, $index) => (
                        <React.Fragment key={$index}>
                          {"\n                  "}
                          <span onClick={x?.onClick} style={S("color:var(--ink);white-space:nowrap;padding:5px 11px;background:var(--heroTile);border:1px solid var(--heroLine);border-radius:999px;cursor:pointer;transition:background .15s")} className={"scp2"}>
                            <span style={S(("font-style:" + (x?.fst ?? "") + ""))}>
                              {I(x?.label)}
                            </span>
                          </span>
                          {"\n                "}
                        </React.Fragment>
                      ))}
                      {"\n              "}
                    </div>
                    {"\n            "}
                  </div>
                  {"\n          "}
                </div>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={S("position:relative;width:100%;max-width:1240px;margin:0 auto;padding:0 32px")}>
                {"\n          "}
                <div style={S("display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-top:1px solid var(--heroLine)")}>
                  {"\n            "}
                  {L(v.stats).map((c, $index) => (
                    <React.Fragment key={$index}>
                      {"\n              "}
                      <div onClick={c?.onClick} style={S("padding:22px 20px 24px;display:flex;flex-direction:column;gap:4px;cursor:pointer;border-right:1px solid var(--heroLine);transition:background .15s")} className={"scp3"}>
                        {"\n                "}
                        <span style={S("font-size:34px;font-weight:600;letter-spacing:-.02em;font-variant-numeric:tabular-nums")}>
                          {I(c?.n)}
                        </span>
                        {"\n                "}
                        <span style={S("color:var(--heroMute)")}>
                          {I(c?.l)}
                        </span>
                        {"\n              "}
                      </div>
                      {"\n            "}
                    </React.Fragment>
                  ))}
                  {"\n          "}
                </div>
                {"\n          "}
                <div style={S(("min-height:64px;padding:14px 0 22px;border-top:1px solid var(--heroLine);color:var(--heroMute);line-height:1.6;visibility:" + (v.orgNoteVis ?? "") + ""))}>
                  {I(v.orgNote)}
                </div>
                {"\n        "}
              </div>
              {"\n        "}
              <footer style={S("position:relative;padding:18px 32px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:12px;color:var(--heroMute);border-top:1px solid var(--heroLine)")}>
                {"\n          "}
                <span>
                  {"Instituto de Biotecnología, UNAM · Cuernavaca, Morelos"}
                </span>
                <span onClick={v.goAcerca} style={S("cursor:pointer")} className={"scp4"}>
                  {"Cómo citar · Contacto"}
                </span>
                {"\n        "}
              </footer>
              {"\n      "}
            </section>
            {"\n    "}
          </div>
          {"\n  "}
        </>
      ) : null}
      {"\n\n  "}
      {v.isRedes ? (
        <>
          {"\n  "}
          <div style={S(("display:grid;grid-template-columns:" + (v.gridCols ?? "") + ";min-height:0;position:relative"))}>
            {"\n    "}
            <aside style={S("border-right:1px solid var(--line);display:flex;flex-direction:column;min-height:0")}>
              {"\n      "}
              <div style={S("padding:16px;border-bottom:1px solid var(--line);position:relative")}>
                {"\n        "}
                <div style={S("height:38px;border:1.5px solid var(--ink);border-radius:8px;display:flex;align-items:center;padding:0 10px;gap:8px")}>
                  {"\n          "}
                  <input ref={v.qRef} value={(v.q) ?? ""} onChange={v.onQ} onKeyDown={v.onQKey} onFocus={v.onQFocus} onBlur={v.onQBlur} placeholder={"Buscar gen u operón"} style={S("flex:1;min-width:0;border:0;outline:none;font-size:13px;background:transparent")} />
                  {"\n        "}
                </div>
                {"\n        "}
                {v.showResults ? (
                  <>
                    {"\n          "}
                    <div style={S("position:absolute;left:16px;right:16px;top:58px;background:var(--bg);border:1px solid var(--line);border-radius:8px;box-shadow:0 8px 24px var(--shadow);z-index:5;overflow:hidden")}>
                      {"\n            "}
                      {L(v.results).map((r, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <div onMouseDown={r?.onPick} style={S(("padding:9px 12px;display:flex;justify-content:space-between;gap:8px;cursor:pointer;background:" + (r?.bg ?? "") + ""))}>
                            <span style={S(("font-weight:600;font-style:" + (r?.fst ?? "") + ""))}>
                              {I(r?.label)}
                            </span>
                            <span style={S(("color:var(--mute);font-size:11px;font-style:" + (r?.kfst ?? "") + ""))}>
                              {I(r?.kind)}
                            </span>
                          </div>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </>
                ) : null}
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("padding:16px;display:flex;flex-direction:column;gap:18px;border-bottom:1px solid var(--line)")}>
                {"\n        "}
                <div style={S("display:flex;flex-direction:column;gap:8px")}>
                  {"\n          "}
                  <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                    {"Tipo"}
                  </span>
                  {"\n          "}
                  <div style={S("display:flex;gap:6px")}>
                    {"\n            "}
                    <span onClick={v.toggleAct} style={S(("flex:1;padding:7px 0;text-align:center;border-radius:6px;cursor:pointer;border:1px solid var(--act);transition:background .15s;background:" + (v.actBg ?? "") + ";color:" + (v.actFg ?? "") + ""))}>
                      {"→ Activación"}
                    </span>
                    {"\n            "}
                    <span onClick={v.toggleRep} style={S(("flex:1;padding:7px 0;text-align:center;border-radius:6px;cursor:pointer;border:1px solid var(--rep);transition:background .15s;background:" + (v.repBg ?? "") + ";color:" + (v.repFg ?? "") + ""))}>
                      {"⊣ Represión"}
                    </span>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <span onClick={v.toggleDual} style={S(("padding:7px 0;text-align:center;border-radius:6px;cursor:pointer;border:1px solid var(--dual);transition:background .15s;background:" + (v.dualBg ?? "") + ";color:" + (v.dualFg ?? "") + ""))}>
                    {"± Dual"}
                  </span>
                  {"\n          "}
                  <div onClick={v.toggleMixed} style={S("display:flex;align-items:flex-start;gap:8px;cursor:pointer;padding-top:4px;line-height:1.45")}>
                    {"\n            "}
                    <span style={S(("width:15px;height:15px;flex-shrink:0;margin-top:1px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;border:1.5px solid var(--ink);background:" + (v.mixBg ?? "") + ";color:var(--bg)"))}>
                      {I(v.mixChk)}
                    </span>
                    {"\n            "}
                    <span>
                      {"Solo regulación simultánea"}
                    </span>
                    {"\n          "}
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={S("display:flex;flex-direction:column;gap:8px")}>
                  {"\n          "}
                  <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                    {"Evidencia"}
                  </span>
                  {"\n          "}
                  <div style={S("display:flex;background:var(--soft);border-radius:8px;padding:3px")}>
                    {"\n            "}
                    {L(v.evOpts).map((o, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <span onClick={o?.onClick} style={S(("flex:1;text-align:center;padding:6px 0;border-radius:6px;cursor:pointer;background:" + (o?.bg ?? "") + ";color:" + (o?.fg ?? "") + ""))}>
                          {I(o?.label)}
                        </span>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={S("display:flex;flex-direction:column;gap:8px")}>
                  {"\n          "}
                  <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                    {"Factor "}
                    <span style={S("text-transform:none")}>
                      {"σ"}
                    </span>
                    {" del promotor"}
                  </span>
                  {"\n          "}
                  <div style={S("display:flex;gap:6px")}>
                    {"\n            "}
                    {L(v.sigOpts).map((o, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <span onClick={o?.onClick} style={S(("padding:5px 12px;border-radius:999px;cursor:pointer;border:1px solid var(--line2);background:" + (o?.bg ?? "") + ";color:" + (o?.fg ?? "") + ""))}>
                          {I(o?.label)}
                        </span>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                  </div>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("flex:1;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:18px")}>
                {"\n        "}
                {L(v.modules).map((m, $index) => (
                  <React.Fragment key={$index}>
                    {"\n          "}
                    <div style={S("display:flex;flex-direction:column;gap:2px")}>
                      {"\n            "}
                      <div onClick={m?.onClick} style={S("display:flex;justify-content:space-between;align-items:baseline;gap:8px;padding:4px 8px 6px;cursor:pointer;font-weight:600")} className={"scp4"}>
                        {I(m?.name)}
                        <span style={S("font-weight:400;color:var(--mute);min-width:3ch;text-align:right;font-variant-numeric:tabular-nums")}>
                          {I(m?.count)}
                        </span>
                      </div>
                      {"\n            "}
                      {L(m?.regs).map((g, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <div onClick={g?.onClick} onMouseEnter={g?.onEnter} onMouseLeave={g?.onLeave} style={S(("display:flex;justify-content:space-between;padding:6px 8px;border-radius:6px;cursor:pointer;transition:background .12s;background:" + (g?.bg ?? "") + ";color:" + (g?.fg ?? "") + ""))}>
                            <span>
                              {I(g?.label)}
                            </span>
                            <span style={S("opacity:.7;min-width:3ch;text-align:right;font-variant-numeric:tabular-nums")}>
                              {I(g?.deg)}
                            </span>
                          </div>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </React.Fragment>
                ))}
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("padding:12px 16px;border-top:1px solid var(--line);color:var(--mute);font-size:11px;line-height:1.5")}>
                {I(v.netFoot)}
              </div>
              {"\n    "}
            </aside>
            {"\n\n    "}
            <main style={S("position:relative;background:var(--bg2);min-height:0;overflow:hidden")}>
              {"\n      "}
              <div style={S("position:absolute;left:0;right:0;top:0;height:48px;padding:0 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;z-index:2;pointer-events:none")}>
                {"\n        "}
                <div style={S("display:flex;align-items:center;gap:10px;pointer-events:auto;min-width:0")}>
                  {"\n          "}
                  <span style={S("color:var(--mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}>
                    {I(v.summary)}
                  </span>
                  {"\n          "}
                  {v.hasSel ? (
                    <>
                      <span onClick={v.clearSel} style={S("padding:4px 10px;border:1px solid var(--line2);border-radius:6px;background:var(--bg);cursor:pointer;white-space:nowrap")}>
                        {"Limpiar "}
                        <span style={S("color:var(--mute)")}>
                          {"esc"}
                        </span>
                      </span>
                    </>
                  ) : null}
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={S("display:flex;gap:6px;pointer-events:auto;flex-shrink:0;white-space:nowrap;margin-left:auto")}>
                  {"\n          "}
                  <span onClick={v.cycleEdge} title={"Cambiar estilo de línea"} style={S("width:118px;flex-shrink:0;box-sizing:border-box;padding:6px 10px;border:1px solid var(--line);border-radius:6px;background:var(--bg);cursor:pointer;display:flex;align-items:center;gap:7px;white-space:nowrap")} className={"scp1"}>
                    <span style={S("color:var(--acc);font-size:13px;width:12px;text-align:center")}>
                      {I(v.edgeIcon)}
                    </span>
                    {I(v.edgeLabel)}
                  </span>
                  {"\n          "}
                  <span onClick={v.toggleGroups} style={S("width:104px;flex-shrink:0;box-sizing:border-box;padding:6px 10px;border-radius:6px;background:var(--bg);cursor:pointer;display:flex;align-items:center;gap:7px;white-space:nowrap;border:1px solid var(--line)")} className={"scp1"}>
                    <span style={S(("width:13px;height:13px;flex-shrink:0;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:9px;border:1.5px solid var(--ink);background:" + (v.groupsBg ?? "") + ";color:var(--bg)"))}>
                      {I(v.groupsChk)}
                    </span>
                    {"Módulos"}
                  </span>
                  {"\n          "}
                  <span onClick={v.relayout} style={S("padding:6px 12px;border:1px solid var(--line);border-radius:6px;background:var(--bg);cursor:pointer")} className={"scp1"}>
                    {"Reorganizar"}
                  </span>
                  {"\n          "}
                  <span onClick={v.download} style={S("padding:6px 12px;border:1px solid var(--line);border-radius:6px;background:var(--bg);cursor:pointer")} className={"scp1"}>
                    {"Exportar TSV"}
                  </span>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <svg ref={v.svgRef} viewBox={v.viewBox} preserveAspectRatio={"xMidYMid meet"} onPointerDown={v.onBgDown} onPointerMove={v.onMove} onPointerUp={v.onUp} style={S(("position:absolute;inset:0;width:100%;height:100%;display:block;user-select:none;touch-action:none;cursor:" + (v.bgCursor ?? "") + ";font-family:'Paper Mono',monospace"))}>
                {"\n        "}
                <defs>
                  {"\n          "}
                  <marker id={"mAct"} viewBox={"0 -5 10 10"} refX={"9"} refY={"0"} markerWidth={"9"} markerHeight={"9"} markerUnits={"userSpaceOnUse"} orient={"auto"}>
                    <path d={"M0,-4 L9,0 L0,4 Z"} style={S("fill:var(--act)")}></path>
                  </marker>
                  {"\n          "}
                  <filter id={"cloud"} x={"-60%"} y={"-60%"} width={"220%"} height={"220%"}>
                    <feGaussianBlur stdDeviation={"20"}></feGaussianBlur>
                  </filter>
                  {"\n          "}
                  <marker id={"mDual"} viewBox={"-12 -6 14 12"} refX={"0"} refY={"0"} markerWidth={"14"} markerHeight={"11"} markerUnits={"userSpaceOnUse"} orient={"auto"}>
                    <path d={"M-11,-4 L-3,0 L-11,4 Z"} style={S("fill:var(--dual)")}></path>
                    <path d={"M0,-5 L0,5"} style={S("stroke:var(--dual);stroke-width:2.4")}></path>
                  </marker>
                  {"\n          "}
                  <marker id={"mRep"} viewBox={"-2 -6 4 12"} refX={"0"} refY={"0"} markerWidth={"4"} markerHeight={"11"} markerUnits={"userSpaceOnUse"} orient={"auto"}>
                    <path d={"M0,-5 L0,5"} style={S("stroke:var(--rep);stroke-width:2.4")}></path>
                  </marker>
                  {"\n        "}
                </defs>
                {"\n        "}
                <g ref={v.gRef} transform={v.viewT}>
                  {"\n          "}
                  {L(v.hulls).map((h, $index) => (
                    <React.Fragment key={$index}>
                      {"\n            "}
                      <g filter={"url(#cloud)"} opacity={h?.op} onPointerEnter={h?.onEnter} onPointerLeave={h?.onLeave} onClick={h?.onClick} style={S("cursor:pointer;transition:opacity .3s")}>
                        {"\n              "}
                        {L(h?.pts).map((p, $index) => (
                          <React.Fragment key={$index}>
                            {"\n                "}
                            <circle cx={p?.x} cy={p?.y} r={p?.r} style={S(("fill:" + (h?.c ?? "") + ""))}></circle>
                            {"\n              "}
                          </React.Fragment>
                        ))}
                        {"\n            "}
                      </g>
                      {"\n          "}
                    </React.Fragment>
                  ))}
                  {"\n          "}
                  {I(v.hullLabels)}
                  {"\n          "}
                  {L(v.edges).map((e, $index) => (
                    <React.Fragment key={$index}>
                      {"\n            "}
                      <g opacity={e?.op}>
                        {"\n              "}
                        <path d={e?.d} markerEnd={e?.marker} style={S(("fill:none;stroke:" + (e?.color ?? "") + ";stroke-width:" + (e?.w ?? "") + ";stroke-dasharray:" + (e?.dash ?? "") + ""))}></path>
                        {"\n              "}
                        <path d={e?.d} onPointerDown={e?.onDown} style={S(("fill:none;stroke:transparent;stroke-width:" + (e?.hit ?? "") + ";cursor:pointer"))}></path>
                        {"\n            "}
                      </g>
                      {"\n          "}
                    </React.Fragment>
                  ))}
                  {"\n          "}
                  {I(v.flowDots)}
                  {"\n          "}
                  {L(v.nodes).map((n, $index) => (
                    <React.Fragment key={$index}>
                      {"\n            "}
                      <g opacity={n?.op} onPointerDown={n?.onDown} onPointerEnter={n?.onEnter} onPointerLeave={n?.onLeave} style={S("cursor:grab")}>
                        {"\n              "}
                        <circle cx={n?.x} cy={n?.y} r={n?.ring} opacity={n?.ringOp} style={S(("fill:none;stroke:var(--acc);stroke-width:" + (n?.rw ?? "") + ""))}></circle>
                        {"\n              "}
                        <circle cx={n?.x} cy={n?.y} r={n?.r} style={S(("fill:" + (n?.fill ?? "") + ";stroke:" + (n?.stroke ?? "") + ";stroke-width:" + (n?.sw ?? "") + ""))}></circle>
                        {"\n              "}
                        {I(n?.label)}
                        {"\n            "}
                      </g>
                      {"\n          "}
                    </React.Fragment>
                  ))}
                  {"\n        "}
                </g>
                {"\n        "}
                {I(v.netOverlay)}
                {"\n      "}
              </svg>
              {"\n      "}
              <div style={S("position:absolute;left:16px;bottom:16px;display:flex;align-items:flex-end;gap:8px;max-width:calc(100% - 180px)")}>
                {"\n        "}
                <div style={S("position:relative;flex-shrink:0")}>
                  {"\n          "}
                  <span onClick={v.toggleHelp} title={"Atajos"} style={S(("width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-weight:700;font-size:15px;transition:background .15s,color .15s;border:1px solid " + (v.helpBd ?? "") + ";background:" + (v.helpBg ?? "") + ";color:" + (v.helpFg ?? "") + ""))}>
                    {"!"}
                  </span>
                  {"\n          "}
                  {v.helpOpen ? (
                    <>
                      {"\n            "}
                      <div style={S("position:absolute;left:0;bottom:44px;width:280px;background:var(--bg);border:1px solid var(--line);border-radius:10px;box-shadow:0 12px 32px var(--shadow);padding:16px;display:flex;flex-direction:column;gap:12px;z-index:6")}>
                        {"\n              "}
                        <div style={S("display:flex;justify-content:space-between;align-items:center")}>
                          <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                            {"Cómo usar la red"}
                          </span>
                          <span onClick={v.toggleHelp} style={S("cursor:pointer;color:var(--mute);font-size:16px;line-height:1")}>
                            {"×"}
                          </span>
                        </div>
                        {"\n              "}
                        <div style={S("display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px 14px;align-items:center;line-height:1.4")}>
                          {"\n                "}
                          {L(v.helpKeys).map((h, $index) => (
                            <React.Fragment key={$index}>
                              {"\n                  "}
                              <span style={S("justify-self:start;padding:2px 7px;border:1px solid var(--line2);border-bottom-width:2px;border-radius:5px;font-size:11px;white-space:nowrap")}>
                                {I(h?.k)}
                              </span>
                              <span style={S("color:var(--mute)")}>
                                {I(h?.d)}
                              </span>
                              {"\n                "}
                            </React.Fragment>
                          ))}
                          {"\n              "}
                        </div>
                        {"\n            "}
                      </div>
                      {"\n          "}
                    </>
                  ) : null}
                  {"\n        "}
                </div>
                {"\n      "}
                <div style={S("display:flex;flex-wrap:wrap;gap:6px 14px;align-items:center;padding:8px 12px;white-space:nowrap;background:var(--bg);border:1px solid var(--line);border-radius:8px;font-size:11px")}>
                  {"\n        "}
                  <span style={S("color:var(--act)")}>
                    {"→ activa"}
                  </span>
                  {"\n        "}
                  <span style={S("color:var(--rep)")}>
                    {"⊣ reprime"}
                  </span>
                  {"\n        "}
                  <span style={S("color:var(--dual)")}>
                    {"± dual"}
                  </span>
                  {"\n        "}
                  <span style={S("color:var(--mute)")}>
                    {"- - predicha"}
                  </span>
                  {"\n        "}
                  <span style={S("color:var(--mute)")}>
                    {"··· homología"}
                  </span>
                  {"\n      "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("position:absolute;right:16px;bottom:16px;display:flex;align-items:center;background:var(--bg);border:1px solid var(--line);border-radius:8px")}>
                {"\n        "}
                <span onClick={v.zoomOut} style={S("width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px")}>
                  {"−"}
                </span>
                {"\n        "}
                <span onClick={v.fit} style={S("white-space:nowrap;min-width:56px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-left:1px solid var(--line);border-right:1px solid var(--line)")}>
                  {I(v.zoomPct)}
                </span>
                {"\n        "}
                <span onClick={v.zoomIn} style={S("width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px")}>
                  {"+"}
                </span>
                {"\n      "}
              </div>
              {"\n    "}
            </main>
            {"\n\n    "}
            <aside style={S(("border-left:1px solid var(--line);overflow:auto;padding:24px;flex-direction:column;gap:22px;background:var(--bg);display:" + (v.asideDisplay ?? "") + ";position:" + (v.asidePos ?? "") + ";right:0;top:0;bottom:0;width:" + (v.asideW ?? "") + ";box-shadow:" + (v.asideSh ?? "") + ";z-index:4"))}>
              {"\n      "}
              {v.isNode ? (
                <>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:6px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {I(v.nd?.kind)}
                    </span>
                    {"\n          "}
                    <span style={S(("font-size:26px;font-weight:600;font-style:" + (v.nd?.fst ?? "") + ""))}>
                      {I(v.nd?.label)}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:grid;grid-template-columns:90px minmax(0,1fr);gap:8px 12px;line-height:1.5")}>
                    {"\n          "}
                    <span style={S("color:var(--mute)")}>
                      {"Operón"}
                    </span>
                    <span style={S("font-style:italic")}>
                      {I(v.nd?.operon)}
                    </span>
                    {"\n          "}
                    <span style={S("color:var(--mute)")}>
                      {"Módulo"}
                    </span>
                    <span>
                      {I(v.nd?.mod)}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  {v.nd?.hasOut ? (
                    <>
                      {"\n          "}
                      <div style={S("display:flex;flex-direction:column;gap:6px")}>
                        {"\n            "}
                        <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                          {"Regula · "}
                          {I(v.nd?.outN)}
                        </span>
                        {"\n            "}
                        <div style={S("display:flex;flex-direction:column")}>
                          {"\n              "}
                          {L(v.nd?.out).map((r, $index) => (
                            <React.Fragment key={$index}>
                              {"\n                "}
                              <div onClick={r?.onClick} onMouseEnter={r?.onEnter} onMouseLeave={r?.onLeave} style={S("display:flex;justify-content:space-between;padding:8px 0;border-top:1px solid var(--line);cursor:pointer")} className={"scp4"}>
                                <span>
                                  <span style={S(("color:" + (r?.color ?? "") + ";font-weight:700"))}>
                                    {I(r?.sym)}
                                  </span>
                                  {" "}
                                  <span style={S(("font-style:" + (r?.fst ?? "") + ""))}>
                                    {I(r?.label)}
                                  </span>
                                </span>
                                <span style={S("color:var(--mute);font-size:11px")}>
                                  {I(r?.ev)}
                                </span>
                              </div>
                              {"\n              "}
                            </React.Fragment>
                          ))}
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  {v.nd?.hasIn ? (
                    <>
                      {"\n          "}
                      <div style={S("display:flex;flex-direction:column;gap:6px")}>
                        {"\n            "}
                        <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                          {"Regulado por · "}
                          {I(v.nd?.inN)}
                        </span>
                        {"\n            "}
                        <div style={S("display:flex;flex-direction:column")}>
                          {"\n              "}
                          {L(v.nd?.inn).map((r, $index) => (
                            <React.Fragment key={$index}>
                              {"\n                "}
                              <div onClick={r?.onClick} onMouseEnter={r?.onEnter} onMouseLeave={r?.onLeave} style={S("display:flex;justify-content:space-between;padding:8px 0;border-top:1px solid var(--line);cursor:pointer")} className={"scp4"}>
                                <span>
                                  <span style={S(("font-style:" + (r?.fst ?? "") + ""))}>
                                    {I(r?.label)}
                                  </span>
                                  {" "}
                                  <span style={S(("color:" + (r?.color ?? "") + ";font-weight:700"))}>
                                    {I(r?.sym)}
                                  </span>
                                </span>
                                <span style={S("color:var(--mute);font-size:11px")}>
                                  {I(r?.ev)}
                                </span>
                              </div>
                              {"\n              "}
                            </React.Fragment>
                          ))}
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  {v.nd?.hasPaths ? (
                    <>
                      {"\n          "}
                      <div style={S("display:flex;flex-direction:column;gap:6px")}>
                        {"\n            "}
                        <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                          {"Rutas metabólicas"}
                        </span>
                        {"\n            "}
                        {L(v.nd?.paths).map((p, $index) => (
                          <React.Fragment key={$index}>
                            {"\n              "}
                            <div onClick={p?.onClick} style={S("display:flex;justify-content:space-between;padding:8px 0;border-top:1px solid var(--line);cursor:pointer;color:var(--acc)")} className={"scp5"}>
                              <span>
                                {I(p?.label)}
                              </span>
                              <span>
                                {"→"}
                              </span>
                            </div>
                            {"\n            "}
                          </React.Fragment>
                        ))}
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  {v.nd?.isTf ? (
                    <>
                      {"\n          "}
                      <span onClick={v.nd?.toFilo} style={S("color:var(--acc);cursor:pointer")}>
                        {"Conservación en Firmicutes →"}
                      </span>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n      "}
                </>
              ) : null}
              {"\n      "}
              {v.isMulti ? (
                <>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:10px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {I(v.multiTitle)}
                    </span>
                    {"\n          "}
                    <div style={S("display:flex;flex-wrap:wrap;gap:6px")}>
                      {"\n            "}
                      {L(v.chips).map((c, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <span onClick={c?.onClick} style={S("padding:5px 10px;background:var(--accSoft);color:var(--acc);border-radius:6px;font-weight:600;cursor:pointer")}>
                            {I(c?.label)}
                            {" ×"}
                          </span>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:6px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {"Blancos compartidos · "}
                      {I(v.sharedN)}
                    </span>
                    {"\n          "}
                    {L(v.shared).map((s, $index) => (
                      <React.Fragment key={$index}>
                        {"\n            "}
                        <div onClick={s?.onClick} style={S("display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-top:1px solid var(--line);cursor:pointer")} className={"scp4"}>
                          <span style={S("font-weight:600;font-style:italic")}>
                            {I(s?.label)}
                          </span>
                          <span style={S("color:var(--mute)")}>
                            {I(s?.detail)}
                          </span>
                        </div>
                        {"\n          "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                    {v.noShared ? (
                      <>
                        <span style={S("color:var(--mute);line-height:1.6")}>
                          {"Los nodos seleccionados no comparten blancos."}
                        </span>
                      </>
                    ) : null}
                    {"\n        "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n      "}
              {v.isEdge ? (
                <>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:10px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {"Interacción"}
                    </span>
                    {"\n          "}
                    <div style={S("font-size:24px;font-weight:600;display:flex;align-items:center;gap:10px;flex-wrap:wrap")}>
                      <span onClick={v.ed?.goSrc} style={S("cursor:pointer")} className={"scp4"}>
                        {I(v.ed?.src)}
                      </span>
                      <span style={S(("color:" + (v.ed?.color ?? "") + ""))}>
                        {I(v.ed?.sym)}
                      </span>
                      <span onClick={v.ed?.goTgt} style={S("cursor:pointer")} className={"scp4"}>
                        <span style={S(("font-style:" + (v.ed?.tfst ?? "") + ""))}>
                          {I(v.ed?.tgt)}
                        </span>
                      </span>
                    </div>
                    {"\n          "}
                    <div style={S("display:flex;gap:6px;font-size:12px")}>
                      {"\n            "}
                      <span style={S(("padding:4px 10px;border-radius:999px;font-weight:600;background:" + (v.ed?.typeBg ?? "") + ";color:" + (v.ed?.color ?? "") + ""))}>
                        {I(v.ed?.typeLabel)}
                      </span>
                      {"\n            "}
                      <span style={S("padding:4px 10px;border-radius:999px;font-weight:600;background:var(--soft)")}>
                        {I(v.ed?.evLabel)}
                      </span>
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:grid;grid-template-columns:90px minmax(0,1fr);gap:10px 12px;line-height:1.5")}>
                    {"\n          "}
                    <span style={S("color:var(--mute)")}>
                      {"Operón"}
                    </span>
                    <span style={S("font-style:italic")}>
                      {I(v.ed?.operon)}
                    </span>
                    {"\n          "}
                    <span style={S("color:var(--mute)")}>
                      {"Factor σ"}
                    </span>
                    <span>
                      {I(v.ed?.sigma)}
                    </span>
                    {"\n          "}
                    <span style={S("color:var(--mute)")}>
                      {"Condición"}
                    </span>
                    <span>
                      {I(v.ed?.cond)}
                    </span>
                    {"\n          "}
                    <span style={S("color:var(--mute)")}>
                      {"Módulo"}
                    </span>
                    <span>
                      {I(v.ed?.mod)}
                    </span>
                    {"\n          "}
                    <span style={S("color:var(--mute)")}>
                      {"Método"}
                    </span>
                    <span style={S("color:var(--mute)")}>
                      {"[por curar]"}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  {v.ed?.hasMotif ? (
                    <>
                      {"\n          "}
                      <div style={S("display:flex;flex-direction:column;gap:8px")}>
                        {"\n            "}
                        <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                          {"Motivo consenso · "}
                          {I(v.ed?.motifName)}
                        </span>
                        {"\n            "}
                        <div style={S("background:var(--soft);border-radius:8px;padding:14px;font-size:15px;letter-spacing:.12em;word-break:break-all;color:var(--acc);font-weight:600")}>
                          {I(v.ed?.motif)}
                        </div>
                        {"\n            "}
                        <span style={S("color:var(--mute);font-size:11px")}>
                          {"Posición respecto al TSS: [por curar]"}
                        </span>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:8px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {"Referencia"}
                    </span>
                    {"\n          "}
                    <span style={S("line-height:1.6;color:var(--mute)")}>
                      {"[Autores, año. Revista.]"}
                    </span>
                    {"\n          "}
                    <div style={S("display:flex;gap:14px;font-size:12px")}>
                      <a href={"#"}>
                        {"PubMed ↗"}
                      </a>
                      <a href={"#"}>
                        {"DOI ↗"}
                      </a>
                    </div>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n    "}
            </aside>
            {"\n  "}
          </div>
          {"\n  "}
        </>
      ) : null}
      {"\n\n  "}
      {v.isRutas ? (
        <>
          {"\n  "}
          <div style={S(("display:grid;grid-template-columns:" + (v.rGrid ?? "") + ";min-height:0"))}>
            {"\n    "}
            <aside style={S(("border-right:1px solid var(--line);overflow:auto;padding:16px 12px;flex-direction:column;gap:4px;display:" + (v.rListDisp ?? "") + ""))}>
              {"\n      "}
              <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em;padding:4px 10px 10px")}>
                {"Metabolismo central"}
              </span>
              {"\n      "}
              {L(v.pwList).map((p, $index) => (
                <React.Fragment key={$index}>
                  {"\n        "}
                  <div onClick={p?.onClick} style={S(("padding:11px 12px;border-radius:8px;cursor:pointer;display:flex;flex-direction:column;gap:8px;transition:background .12s;background:" + (p?.bg ?? "") + ""))} className={"scp0"}>
                    {"\n          "}
                    <span style={S(("font-weight:600;color:" + (p?.fg ?? "") + ""))}>
                      {I(p?.label)}
                    </span>
                    {"\n          "}
                    <div style={S("display:flex;gap:2px")}>
                      {"\n            "}
                      {L(p?.seg).map((g, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <span style={S(("flex:1;height:4px;border-radius:2px;background:" + (g?.c ?? "") + ";border:" + (g?.bd ?? "") + ""))}></span>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </React.Fragment>
              ))}
              {"\n    "}
            </aside>
            {"\n\n    "}
            <main style={S("display:flex;flex-direction:column;background:var(--bg2);min-height:0;overflow:hidden")}>
              {"\n      "}
              <div style={S("height:52px;padding:0 16px;display:flex;align-items:center;gap:10px;background:var(--bg);border-bottom:1px solid var(--line);flex-shrink:0;min-width:0")}>
                {"\n        "}
                <h1 style={S(("margin:0;font-size:18px;font-weight:600;white-space:nowrap;display:" + (v.rTitleDisp ?? "") + ""))}>
                  {I(v.pw?.title)}
                </h1>
                {"\n        "}
                {v.rNarrow ? (
                  <>
                    {"\n          "}
                    <div style={S("display:flex;gap:4px;flex-wrap:nowrap;overflow-x:auto;min-width:0;flex:1;scrollbar-width:none")}>
                      {"\n            "}
                      {L(v.pwList).map((p, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <span onClick={p?.onClick} style={S(("padding:4px 10px;border-radius:999px;cursor:pointer;white-space:nowrap;flex-shrink:0;border:1px solid var(--line2);background:" + (p?.bg ?? "") + ";color:" + (p?.fg ?? "") + ""))}>
                            {I(p?.label)}
                          </span>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </>
                ) : null}
                {"\n        "}
                <div style={S("display:flex;background:var(--soft);border-radius:7px;padding:2px;flex-shrink:0;margin-left:auto")}>
                  {"\n          "}
                  {L(v.mLabOpts).map((o, $index) => (
                    <React.Fragment key={$index}>
                      {"\n            "}
                      <span onClick={o?.onClick} style={S(("padding:4px 10px;border-radius:5px;cursor:pointer;background:" + (o?.bg ?? "") + ";color:" + (o?.fg ?? "") + ""))}>
                        {I(o?.label)}
                      </span>
                      {"\n          "}
                    </React.Fragment>
                  ))}
                  {"\n        "}
                </div>
                {"\n        "}
                <div onClick={v.toggleReg} title={"Mostrar regulación"} style={S("display:flex;align-items:center;gap:6px;cursor:pointer;white-space:nowrap;flex-shrink:0")}>
                  <span style={S(("width:28px;height:16px;flex-shrink:0;border-radius:999px;position:relative;display:block;transition:background .15s;background:" + (v.regTrack ?? "") + ""))}>
                    <span style={S(("position:absolute;top:2px;width:12px;height:12px;border-radius:50%;background:#FFFFFF;transition:left .15s;left:" + (v.regKnob ?? "") + ""))}></span>
                  </span>
                  {"Reg."}
                </div>
                {"\n        "}
                <span onClick={v.mFitAll} title={"Mapa completo"} style={S("padding:5px 9px;border:1px solid var(--line);border-radius:6px;cursor:pointer;white-space:nowrap;flex-shrink:0")} className={"scp1"}>
                  {"⤢"}
                </span>
                {"\n        "}
                <a href={v.pw?.kegg} target={"_blank"} style={S("padding:5px 9px;border:1px solid var(--line);border-radius:6px;color:var(--ink);text-decoration:none;white-space:nowrap;flex-shrink:0")}>
                  {"KEGG ↗"}
                </a>
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("flex:1;position:relative;min-height:0;overflow:hidden")}>
                {"\n        "}
                <svg ref={v.mapRef} viewBox={v.mViewBox} onPointerDown={v.mDown} onPointerMove={v.mMove} onPointerUp={v.mUp} style={S(("position:absolute;inset:0;width:100%;height:100%;display:block;user-select:none;touch-action:none;cursor:" + (v.mCursor ?? "") + ";font-family:'Paper Mono',monospace"))}>
                  {"\n          "}
                  <defs>
                    {"\n            "}
                    <filter id={"cloudM"} x={"-60%"} y={"-60%"} width={"220%"} height={"220%"}>
                      <feGaussianBlur stdDeviation={"22"}></feGaussianBlur>
                    </filter>
                    {"\n            "}
                    <marker id={"mkI"} viewBox={"0 -5 10 10"} refX={"9"} refY={"0"} markerWidth={"8"} markerHeight={"8"} markerUnits={"userSpaceOnUse"} orient={"auto"}>
                      <path d={"M0,-4 L9,0 L0,4 Z"} style={S("fill:var(--ink)")}></path>
                    </marker>
                    {"\n            "}
                    <marker id={"mkA"} viewBox={"0 -5 10 10"} refX={"9"} refY={"0"} markerWidth={"8"} markerHeight={"8"} markerUnits={"userSpaceOnUse"} orient={"auto"}>
                      <path d={"M0,-4 L9,0 L0,4 Z"} style={S("fill:var(--acc)")}></path>
                    </marker>
                    {"\n            "}
                    <marker id={"mkIs"} viewBox={"0 -5 10 10"} refX={"1"} refY={"0"} markerWidth={"8"} markerHeight={"8"} markerUnits={"userSpaceOnUse"} orient={"auto-start-reverse"}>
                      <path d={"M0,-4 L9,0 L0,4 Z"} style={S("fill:var(--ink)")}></path>
                    </marker>
                    {"\n            "}
                    <marker id={"mkO"} viewBox={"0 -5 10 10"} refX={"9"} refY={"0"} markerWidth={"9"} markerHeight={"9"} markerUnits={"userSpaceOnUse"} orient={"auto"}>
                      <path d={"M0,-4 L9,0 L0,4 Z"} style={S("fill:var(--bg2);stroke:var(--mute);stroke-width:1.2")}></path>
                    </marker>
                    {"\n          "}
                  </defs>
                  {"\n          "}
                  <g transform={v.mT}>
                    {"\n            "}
                    {L(v.mGroups).map((g, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <g filter={"url(#cloudM)"} opacity={g?.op} onPointerEnter={g?.onEnter} onPointerLeave={g?.onLeave} onClick={g?.onClick} style={S("cursor:pointer;transition:opacity .3s")}>
                          {"\n                "}
                          {L(g?.pts).map((p, $index) => (
                            <React.Fragment key={$index}>
                              {"\n                  "}
                              <circle cx={p?.x} cy={p?.y} r={p?.r} style={S(("fill:" + (g?.c ?? "") + ""))}></circle>
                              {"\n                "}
                            </React.Fragment>
                          ))}
                          {"\n              "}
                        </g>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n            "}
                    {L(v.mLinks).map((l, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <g onPointerDown={l?.onDown} onClick={l?.onClick} style={S(("cursor:" + (l?.cur ?? "") + ""))}>
                          {"\n                "}
                          <path d={l?.d} markerEnd={"url(#mkO)"} style={S("fill:none;stroke:var(--mute);stroke-width:1.2;stroke-dasharray:5 4")}></path>
                          {"\n                "}
                          <rect x={l?.x} y={l?.y} width={l?.w} height={"24"} rx={"12"} style={S(("fill:var(--bg);stroke:" + (l?.st ?? "") + ";stroke-width:1.2"))}></rect>
                          {"\n              "}
                        </g>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n            "}
                    {L(v.mEdges).map((e, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <path d={e?.d} markerEnd={e?.mEnd} markerStart={e?.mStart} opacity={e?.op} style={S(("fill:none;stroke:" + (e?.st ?? "") + ";stroke-width:" + (e?.w ?? "") + ";stroke-dasharray:" + (e?.dash ?? "") + ""))}></path>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n            "}
                    {L(v.mNodes).map((n, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <circle cx={n?.x} cy={n?.y} r={n?.r} opacity={n?.op} onPointerEnter={n?.onEnter} onPointerLeave={n?.onLeave} style={S(("fill:" + (n?.fill ?? "") + ";stroke:" + (n?.st ?? "") + ";stroke-width:1.4"))}></circle>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n            "}
                    {L(v.mBoxes).map((b, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <g opacity={b?.op} onPointerDown={b?.onDown} onClick={b?.onClick} onPointerEnter={b?.onEnter} onPointerLeave={b?.onLeave} style={S("cursor:pointer")}>
                          {"\n                "}
                          <rect x={b?.rx} y={b?.ry} width={b?.w} height={b?.h} rx={"8"} opacity={b?.ringOp} style={S("fill:none;stroke:var(--acc);stroke-width:2")}></rect>
                          {"\n                "}
                          <rect x={b?.x} y={b?.y} width={b?.w2} height={"18"} rx={"2"} style={S(("fill:" + (b?.fill ?? "") + ";stroke:" + (b?.st ?? "") + ";stroke-width:" + (b?.sw ?? "") + ";stroke-dasharray:" + (b?.dash ?? "") + ""))}></rect>
                          {"\n                "}
                          {L(b?.bars).map((r, $index) => (
                            <React.Fragment key={$index}>
                              {"\n                  "}
                              <rect x={r?.x} y={r?.y} width={r?.w} height={"3"} rx={"1"} style={S(("fill:" + (r?.c ?? "") + ""))}></rect>
                              {"\n                "}
                            </React.Fragment>
                          ))}
                          {"\n              "}
                        </g>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n            "}
                    {I(v.mFlow)}
                    {"\n            "}
                    {I(v.mLabels)}
                    {"\n          "}
                  </g>
                  {"\n        "}
                </svg>
                {"\n        "}
                <div style={S("position:absolute;left:14px;top:12px;right:14px;display:flex;justify-content:space-between;gap:12px;pointer-events:none")}>
                  {"\n          "}
                  <span style={S(("padding:6px 10px;border-radius:7px;background:var(--bg);border:1px solid var(--line);color:var(--ink);opacity:" + (v.mInfoOp ?? "") + ";transition:opacity .12s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%"))}>
                    {I(v.mInfo)}
                  </span>
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={S("position:absolute;right:14px;bottom:14px;display:flex;align-items:center;background:var(--bg);border:1px solid var(--line);border-radius:8px")}>
                  {"\n          "}
                  <span onClick={v.mZoomOut} style={S("width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px")}>
                    {"−"}
                  </span>
                  {"\n          "}
                  <span onClick={v.mFitCur} style={S("white-space:nowrap;min-width:56px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-left:1px solid var(--line);border-right:1px solid var(--line)")}>
                    {I(v.mZoomPct)}
                  </span>
                  {"\n          "}
                  <span onClick={v.mZoomIn} style={S("width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px")}>
                    {"+"}
                  </span>
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={S("position:absolute;left:14px;bottom:14px;display:flex;gap:10px;align-items:center;padding:7px 10px;background:var(--bg);border:1px solid var(--line);border-radius:8px;font-size:11px;color:var(--mute);white-space:nowrap")}>
                  {"\n          "}
                  <span style={S("display:flex;align-items:center;gap:5px")}>
                    <span style={S("width:16px;height:10px;border-radius:2px;background:var(--accSoft);border:1px solid var(--acc)")}></span>
                    {"presente"}
                  </span>
                  {"\n          "}
                  <span style={S("display:flex;align-items:center;gap:5px")}>
                    <span style={S("width:16px;height:10px;border-radius:2px;border:1px dashed var(--line2)")}></span>
                    {"ausente"}
                  </span>
                  {"\n          "}
                  <span style={S("display:flex;align-items:center;gap:5px")}>
                    <span style={S("width:10px;height:3px;background:var(--act)")}></span>
                    {"activa"}
                  </span>
                  {"\n          "}
                  <span style={S("display:flex;align-items:center;gap:5px")}>
                    <span style={S("width:10px;height:3px;background:var(--rep)")}></span>
                    {"reprime"}
                  </span>
                  {"\n          "}
                  <span style={S("display:flex;align-items:center;gap:5px")}>
                    <span style={S("width:10px;height:3px;background:var(--dual)")}></span>
                    {"dual"}
                  </span>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n    "}
            </main>
            {"\n\n    "}
            <aside style={S("border-left:1px solid var(--line);overflow:auto;padding:24px;display:flex;flex-direction:column;gap:22px;background:var(--bg)")}>
              {"\n      "}
              {v.hasStep ? (
                <>
                  {"\n        "}
                  <div style={S("display:flex;justify-content:space-between;align-items:center")}>
                    {"\n          "}
                    <span onClick={v.clearStep} style={S("color:var(--mute);cursor:pointer")} className={"scp5"}>
                      {"← Ruta"}
                    </span>
                    {"\n          "}
                    <div style={S("display:flex;align-items:center;gap:6px")}>
                      {"\n            "}
                      <span style={S("color:var(--mute);margin-right:4px")}>
                        {"Paso "}
                        {I(v.st?.num)}
                        {" de "}
                        {I(v.st?.total)}
                      </span>
                      {"\n            "}
                      <span onClick={v.st?.prev} style={S(("width:30px;height:30px;border:1px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:" + (v.st?.prevOp ?? "") + ""))}>
                        {"↑"}
                      </span>
                      {"\n            "}
                      <span onClick={v.st?.next} style={S(("width:30px;height:30px;border:1px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:" + (v.st?.nextOp ?? "") + ""))}>
                        {"↓"}
                      </span>
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:6px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {"Enzima"}
                    </span>
                    {"\n          "}
                    <span style={S("font-size:28px;font-weight:600;font-style:italic")}>
                      {I(v.st?.gene)}
                    </span>
                    {"\n          "}
                    <a href={v.st?.ecUrl} target={"_blank"}>
                      {"EC "}
                      {I(v.st?.ec)}
                      {" ↗"}
                    </a>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:10px;background:var(--soft)")}>
                    {"\n          "}
                    <span style={S("padding:7px 14px;border-radius:999px;border:1.5px solid var(--ink);background:var(--bg);align-self:flex-start")}>
                      {I(v.st?.from)}
                    </span>
                    {"\n          "}
                    <span style={S("padding-left:18px;color:var(--mute)")}>
                      {"↓"}
                    </span>
                    {"\n          "}
                    <span style={S("padding:7px 14px;border-radius:999px;border:1.5px solid var(--ink);background:var(--bg);align-self:flex-start")}>
                      {I(v.st?.to)}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:8px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {"Operón"}
                    </span>
                    {"\n          "}
                    <div style={S("display:flex;flex-wrap:wrap;gap:4px")}>
                      {"\n            "}
                      {L(v.st?.opGenes).map((g, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <span style={S(("padding:4px 9px;border-radius:5px;font-style:italic;background:" + (g?.bg ?? "") + ";color:" + (g?.fg ?? "") + ""))}>
                            {I(g?.l)}
                          </span>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:6px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {"Regulación · "}
                      {I(v.st?.regN)}
                    </span>
                    {"\n          "}
                    {L(v.st?.regs).map((g, $index) => (
                      <React.Fragment key={$index}>
                        {"\n            "}
                        <div onClick={g?.onClick} style={S("display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--line);cursor:pointer")} className={"scp4"}>
                          <span>
                            <span style={S(("font-weight:700;color:" + (g?.color ?? "") + ""))}>
                              {I(g?.label)}
                            </span>
                            {" "}
                            <span style={S("color:var(--mute)")}>
                              {I(g?.ev)}
                            </span>
                          </span>
                          <span style={S("color:var(--acc);white-space:nowrap")}>
                            {"Ver en la red →"}
                          </span>
                        </div>
                        {"\n          "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                    {v.st?.noRegs ? (
                      <>
                        <span style={S("color:var(--mute);line-height:1.6;padding-top:6px;border-top:1px solid var(--line)")}>
                          {I(v.st?.noRegTxt)}
                        </span>
                      </>
                    ) : null}
                    {"\n        "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n      "}
              {v.noStep ? (
                <>
                  {"\n        "}
                  <div style={S("display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:10px;overflow:hidden")}>
                    {"\n          "}
                    {L(v.pwStats).map((c, $index) => (
                      <React.Fragment key={$index}>
                        {"\n            "}
                        <div style={S("padding:12px 10px;display:flex;flex-direction:column;gap:2px;min-width:0;background:var(--bg)")}>
                          <span style={S("font-size:22px;font-weight:600")}>
                            {I(c?.n)}
                          </span>
                          <span style={S("color:var(--mute);font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}>
                            {I(c?.l)}
                          </span>
                        </div>
                        {"\n          "}
                      </React.Fragment>
                    ))}
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:10px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {"Pasos"}
                    </span>
                    {"\n          "}
                    <div style={S("display:flex;gap:3px")}>
                      {"\n            "}
                      {L(v.pwStrip).map((g, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <span onClick={g?.onClick} onMouseEnter={g?.onEnter} onMouseLeave={g?.onLeave} title={g?.t} style={S(("flex:1;height:26px;border-radius:4px;cursor:pointer;transition:transform .12s;background:" + (g?.c ?? "") + ";transform:" + (g?.tr ?? "") + ""))}></span>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:10px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {"Reguladores de esta ruta"}
                    </span>
                    {"\n          "}
                    {L(v.pwRegs).map((g, $index) => (
                      <React.Fragment key={$index}>
                        {"\n            "}
                        <div onClick={g?.onClick} onMouseEnter={g?.onEnter} onMouseLeave={g?.onLeave} style={S(("border-radius:10px;padding:14px;display:flex;flex-direction:column;gap:6px;cursor:pointer;transition:border-color .12s,background .12s;border:1.5px solid " + (g?.bd ?? "") + ";background:" + (g?.bg ?? "") + ""))}>
                          {"\n              "}
                          <div style={S("display:flex;justify-content:space-between;align-items:center")}>
                            <span style={S("font-size:15px;font-weight:600")}>
                              {I(g?.label)}
                            </span>
                            <span style={S(("font-size:12px;font-weight:600;color:" + (g?.color ?? "") + ""))}>
                              {I(g?.typeLabel)}
                            </span>
                          </div>
                          {"\n              "}
                          <span style={S("font-size:12px;color:var(--mute);font-style:italic")}>
                            {I(g?.genes)}
                          </span>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                    {v.hasPwRegs ? (
                      <>
                        <span onClick={v.pwToNet} style={S("color:var(--acc);cursor:pointer")}>
                          {"Abrir reguladores en la red →"}
                        </span>
                      </>
                    ) : null}
                    {"\n        "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n    "}
            </aside>
            {"\n  "}
          </div>
          {"\n  "}
        </>
      ) : null}
      {"\n\n  "}
      {v.isFilo ? (
        <>
          {"\n  "}
          <div style={S(("display:grid;grid-template-columns:" + (v.fGrid ?? "") + ";min-height:0"))}>
            {"\n    "}
            <main style={S("display:flex;flex-direction:column;min-height:0;background:var(--bg2)")}>
              {"\n      "}
              <div style={S("padding:10px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:12px;background:var(--bg)")}>
                {"\n        "}
                <div style={S("display:flex;background:var(--soft);border-radius:8px;padding:3px")}>
                  {"\n          "}
                  {L(v.fViewOpts).map((o, $index) => (
                    <React.Fragment key={$index}>
                      {"\n            "}
                      <span onClick={o?.onClick} style={S(("padding:6px 14px;border-radius:6px;cursor:pointer;background:" + (o?.bg ?? "") + ";color:" + (o?.fg ?? "") + ""))}>
                        {I(o?.label)}
                      </span>
                      {"\n          "}
                    </React.Fragment>
                  ))}
                  {"\n        "}
                </div>
                {"\n        "}
                {v.fIsTax ? (
                  <>
                    {"\n          "}
                    <div style={S("display:flex;gap:6px;align-items:center;flex-wrap:wrap;min-width:0")}>
                      {"\n            "}
                      {L(v.sbCrumbs).map((c, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <span onClick={c?.onClick} style={S(("cursor:pointer;white-space:nowrap;color:" + (c?.fg ?? "") + ";font-weight:" + (c?.fw ?? "") + ""))}>
                            {I(c?.label)}
                          </span>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                    </div>
                    {"\n          "}
                    <span style={S("margin-left:auto;color:var(--mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0")}>
                      {I(v.sbInfo)}
                    </span>
                    {"\n        "}
                  </>
                ) : null}
                {"\n      "}
              </div>
              {"\n      "}
              {v.fIsTax ? (
                <>
                  {"\n        "}
                  <div style={S("flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:10px;overflow:hidden")}>
                    {"\n          "}
                    <svg ref={v.sbRef} viewBox={"-330 -330 660 660"} onPointerLeave={v.sbLeave} style={S("width:100%;height:100%;max-height:760px;display:block;font-family:'Paper Mono',monospace;user-select:none")}>
                      {"\n            "}
                      {L(v.sbArcs).map((a, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <path d={a?.d} onClick={a?.onClick} onPointerEnter={a?.onEnter} style={S(("fill:" + (a?.fill ?? "") + ";fill-opacity:" + (a?.fo ?? "") + ";stroke:" + (a?.st ?? "") + ";stroke-width:" + (a?.sw ?? "") + ";cursor:pointer;transition:fill-opacity .12s"))}></path>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n            "}
                      <circle cx={"0"} cy={"0"} r={v.sbInner} onClick={v.sbUp} style={S(("fill:var(--bg);stroke:var(--line2);stroke-width:1;cursor:" + (v.sbUpCur ?? "") + ""))}></circle>
                      {"\n            "}
                      {I(v.sbLabels)}
                      {"\n          "}
                    </svg>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("padding:0 20px 14px;display:flex;gap:16px;flex-wrap:wrap;color:var(--mute);font-size:11px")}>
                    {"\n          "}
                    <span style={S("display:flex;align-items:center;gap:6px")}>
                      <span style={S("width:12px;height:12px;border-radius:3px;background:var(--acc)")}></span>
                      {"Bacillales"}
                    </span>
                    {"\n          "}
                    <span style={S("display:flex;align-items:center;gap:6px")}>
                      <span style={S("width:12px;height:12px;border-radius:3px;background:var(--t2)")}></span>
                      {"Lactobacillales"}
                    </span>
                    {"\n          "}
                    <span style={S("display:flex;align-items:center;gap:6px")}>
                      <span style={S("width:12px;height:12px;border-radius:3px;background:var(--t3)")}></span>
                      {"Eubacteriales"}
                    </span>
                    {"\n          "}
                    <span>
                      {"Área proporcional al número de genomas · clic para acercar, centro para subir · valores ilustrativos"}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n      "}
              {v.fIsTree ? (
                <>
                  {"\n      "}
                  <div style={S("padding:12px 20px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;background:var(--bg)")}>
                    {"\n        "}
                    <span style={S("color:var(--mute);min-width:0")}>
                      {I(v.fInfo)}
                    </span>
                    {"\n        "}
                    <div style={S("display:flex;gap:8px;align-items:center;flex-wrap:wrap")}>
                      {"\n          "}
                      <span style={S("color:var(--mute)")}>
                        {"Columnas"}
                      </span>
                      {"\n          "}
                      <div style={S("display:flex;background:var(--soft);border-radius:8px;padding:3px")}>
                        {"\n            "}
                        {L(v.fSortOpts).map((o, $index) => (
                          <React.Fragment key={$index}>
                            {"\n              "}
                            <span onClick={o?.onClick} style={S(("padding:5px 12px;border-radius:6px;cursor:pointer;background:" + (o?.bg ?? "") + ";color:" + (o?.fg ?? "") + ""))}>
                              {I(o?.label)}
                            </span>
                            {"\n            "}
                          </React.Fragment>
                        ))}
                        {"\n          "}
                      </div>
                      {"\n          "}
                      {v.fHasCollapsed ? (
                        <>
                          <span onClick={v.fExpandAll} style={S("padding:6px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;background:var(--bg)")}>
                            {"Expandir todo"}
                          </span>
                        </>
                      ) : null}
                      {"\n          "}
                      <span onClick={v.fDownload} style={S("padding:6px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;background:var(--bg)")} className={"scp1"}>
                        {"Exportar TSV"}
                      </span>
                      {"\n        "}
                    </div>
                    {"\n      "}
                  </div>
                  {"\n      "}
                  <div style={S("flex:1;overflow:auto;padding:12px 20px 20px")}>
                    {"\n        "}
                    <svg width={v.fW} height={v.fH} onPointerLeave={v.fLeave} style={S("display:block;font-family:'Paper Mono',monospace;user-select:none")}>
                      {"\n          "}
                      {L(v.fCols).map((c, $index) => (
                        <React.Fragment key={$index}>
                          {"\n            "}
                          <rect x={c?.bx} y={c?.by} width={c?.bw} height={c?.bh} opacity={c?.bandOp} style={S("fill:var(--accSoft)")}></rect>
                          {"\n          "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                      {L(v.fRows).map((r, $index) => (
                        <React.Fragment key={$index}>
                          {"\n            "}
                          <g>
                            {"\n              "}
                            <rect x={"0"} y={r?.by} width={v.fW} height={r?.bh} opacity={r?.bandOp} style={S("fill:var(--accSoft)")}></rect>
                            {"\n              "}
                            {I(r?.label)}
                            {"\n              "}
                            {L(r?.cells).map((k, $index) => (
                              <React.Fragment key={$index}>
                                {"\n                "}
                                <rect x={k?.x} y={k?.y} width={k?.w} height={k?.h} rx={"3"} onPointerEnter={k?.onEnter} onClick={k?.onClick} style={S(("fill:" + (k?.fill ?? "") + ";fill-opacity:" + (k?.fo ?? "") + ";stroke:" + (k?.st ?? "") + ";stroke-width:" + (k?.sw ?? "") + ";cursor:pointer"))}></rect>
                                {"\n              "}
                              </React.Fragment>
                            ))}
                            {"\n            "}
                          </g>
                          {"\n          "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                      {L(v.fPaths).map((p, $index) => (
                        <React.Fragment key={$index}>
                          {"\n            "}
                          <path d={p?.d} style={S(("fill:" + (p?.fill ?? "") + ";stroke:var(--ink);stroke-width:1.3"))}></path>
                          {"\n          "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                      {L(v.fNodes).map((n, $index) => (
                        <React.Fragment key={$index}>
                          {"\n            "}
                          <g onClick={n?.onClick} style={S("cursor:pointer")}>
                            {"\n              "}
                            <circle cx={n?.x} cy={n?.y} r={"9"} style={S("fill:transparent")}></circle>
                            {"\n              "}
                            <circle cx={n?.x} cy={n?.y} r={"3.5"} style={S(("fill:" + (n?.fill ?? "") + ";stroke:var(--ink);stroke-width:1.3"))}></circle>
                            {"\n              "}
                            {I(n?.label)}
                            {"\n            "}
                          </g>
                          {"\n          "}
                        </React.Fragment>
                      ))}
                      {"\n          "}
                      {L(v.fCols).map((c, $index) => (
                        <React.Fragment key={$index}>
                          {"\n            "}
                          {I(c?.text)}
                          {"\n          "}
                        </React.Fragment>
                      ))}
                      {"\n        "}
                    </svg>
                    {"\n        "}
                    <div style={S("display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-top:16px;color:var(--mute);font-size:11px")}>
                      {"\n          "}
                      <span>
                        {"% identidad con "}
                        <em>
                          {"B. subtilis"}
                        </em>
                        {" 168"}
                      </span>
                      {"\n          "}
                      <div style={S("display:flex;gap:3px;align-items:center")}>
                        {"\n            "}
                        {L(v.fScale).map((s, $index) => (
                          <React.Fragment key={$index}>
                            {"\n              "}
                            <div style={S("display:flex;flex-direction:column;align-items:center;gap:3px")}>
                              <span style={S(("width:26px;height:14px;border-radius:3px;background:var(--acc);opacity:" + (s?.op ?? "") + ""))}></span>
                              <span>
                                {I(s?.l)}
                              </span>
                            </div>
                            {"\n            "}
                          </React.Fragment>
                        ))}
                        {"\n          "}
                      </div>
                      {"\n          "}
                      <span style={S("display:flex;align-items:center;gap:6px")}>
                        <span style={S("width:14px;height:14px;border-radius:3px;border:1px solid var(--line2)")}></span>
                        {"sin ortólogo"}
                      </span>
                      {"\n          "}
                      <span>
                        {"Topología y valores ilustrativos"}
                      </span>
                      {"\n        "}
                    </div>
                    {"\n      "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n    "}
            </main>
            {"\n    "}
            <aside style={S(("border-left:1px solid var(--line);overflow:auto;padding:24px;flex-direction:column;gap:20px;background:var(--bg);display:" + (v.fAsideDisp ?? "") + ""))}>
              {"\n      "}
              {v.fEmpty ? (
                <>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:14px;color:var(--mute);line-height:1.7")}>
                    {"\n          "}
                    <span style={S("font-size:11px;text-transform:uppercase;letter-spacing:.08em")}>
                      {"Conservación de reguladores"}
                    </span>
                    {"\n          "}
                    <span>
                      {"Árbol de especies de Firmicutes alineado con la presencia de ortólogos de cada regulador de "}
                      <em>
                        {"B. subtilis"}
                      </em>
                      {"."}
                    </span>
                    {"\n          "}
                    <div style={S("display:grid;grid-template-columns:120px minmax(0,1fr);gap:6px 12px")}>
                      {"\n            "}
                      <span style={S("color:var(--ink)")}>
                        {"Nodo del árbol"}
                      </span>
                      <span>
                        {"colapsar o expandir clado"}
                      </span>
                      {"\n            "}
                      <span style={S("color:var(--ink)")}>
                        {"Especie"}
                      </span>
                      <span>
                        {"perfil de reguladores"}
                      </span>
                      {"\n            "}
                      <span style={S("color:var(--ink)")}>
                        {"Columna"}
                      </span>
                      <span>
                        {"distribución del regulador"}
                      </span>
                      {"\n            "}
                      <span style={S("color:var(--ink)")}>
                        {"Celda"}
                      </span>
                      <span>
                        {"detalle del ortólogo"}
                      </span>
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n      "}
              {v.fHasSel ? (
                <>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:6px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {I(v.fp?.kind)}
                    </span>
                    {"\n          "}
                    <span style={S(("font-size:24px;font-weight:600;font-style:" + (v.fp?.fst ?? "") + ""))}>
                      {I(v.fp?.title)}
                    </span>
                    {"\n          "}
                    <span style={S("color:var(--mute)")}>
                      {I(v.fp?.sub)}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  {v.fp?.hasCell ? (
                    <>
                      {"\n          "}
                      <div style={S("display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:10px;background:var(--soft)")}>
                        {"\n            "}
                        <span style={S("font-size:28px;font-weight:600;color:var(--acc)")}>
                          {I(v.fp?.cellVal)}
                        </span>
                        {"\n            "}
                        <span style={S("color:var(--mute)")}>
                          {I(v.fp?.cellNote)}
                        </span>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:4px")}>
                    {"\n          "}
                    <span style={S("font-size:11px;color:var(--mute);text-transform:uppercase;letter-spacing:.08em")}>
                      {I(v.fp?.listTitle)}
                    </span>
                    {"\n          "}
                    {L(v.fp?.list).map((x, $index) => (
                      <React.Fragment key={$index}>
                        {"\n            "}
                        <div onClick={x?.onClick} style={S("display:grid;grid-template-columns:minmax(0,1fr) 80px 44px;gap:10px;align-items:center;padding:7px 0;border-top:1px solid var(--line);cursor:pointer")} className={"scp4"}>
                          {"\n              "}
                          <span style={S(("font-style:" + (x?.fst ?? "") + ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis"))}>
                            {I(x?.label)}
                          </span>
                          {"\n              "}
                          <span style={S("height:6px;border-radius:3px;background:var(--soft);overflow:hidden;display:block")}>
                            <span style={S(("display:block;height:100%;background:var(--acc);width:" + (x?.pct ?? "") + ""))}></span>
                          </span>
                          {"\n              "}
                          <span style={S("text-align:right;color:var(--mute)")}>
                            {I(x?.val)}
                          </span>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </React.Fragment>
                    ))}
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={S("display:flex;flex-direction:column;gap:8px")}>
                    {"\n          "}
                    {v.fp?.canUse ? (
                      <>
                        <span onClick={v.fp?.useOrg} style={S("padding:9px 12px;border-radius:8px;background:var(--ink);color:var(--bg);cursor:pointer;text-align:center")}>
                          {"Usar como organismo activo"}
                        </span>
                      </>
                    ) : null}
                    {"\n          "}
                    {v.fp?.canNet ? (
                      <>
                        <span onClick={v.fp?.toNet} style={S("color:var(--acc);cursor:pointer")}>
                          {"Abrir "}
                          {I(v.fp?.netLabel)}
                          {" en la red →"}
                        </span>
                      </>
                    ) : null}
                    {"\n          "}
                    <span onClick={v.fClear} style={S("color:var(--mute);cursor:pointer")}>
                      {"Limpiar selección"}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n    "}
            </aside>
            {"\n  "}
          </div>
          {"\n  "}
        </>
      ) : null}
      {"\n\n  "}
      {v.isDist ? (
        <>
          {"\n  "}
          <div style={S("display:grid;grid-template-rows:auto minmax(0,1fr);min-height:0")}>
            {"\n    "}
            <div style={S("padding:14px 20px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap")}>
              {"\n      "}
              <div style={S("display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;min-width:0")}>
                {"\n        "}
                <span style={S("font-size:18px;font-weight:600")}>
                  {"Aislamientos secuenciados"}
                </span>
                {"\n        "}
                <span style={S("color:var(--mute)")}>
                  <em>
                    {I(v.orgName)}
                  </em>
                  {" · "}
                  {I(v.dCount)}
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("display:flex;gap:8px;align-items:center;flex-wrap:wrap")}>
                {"\n        "}
                <div style={S("height:34px;width:240px;border:1px solid var(--line2);border-radius:8px;display:flex;align-items:center;padding:0 10px;gap:8px")}>
                  {"\n          "}
                  <span style={S("color:var(--mute)")}>
                    {"⌕"}
                  </span>
                  {"\n          "}
                  <input value={(v.dq) ?? ""} onChange={v.onDQ} placeholder={"Filtrar por ambiente o país"} style={S("flex:1;min-width:0;border:0;outline:none;background:transparent;font-size:13px")} />
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={S("display:flex;background:var(--soft);border-radius:8px;padding:3px")}>
                  {"\n          "}
                  {L(v.dEnvOpts).map((o, $index) => (
                    <React.Fragment key={$index}>
                      {"\n            "}
                      <span onClick={o?.onClick} style={S(("padding:5px 10px;border-radius:6px;cursor:pointer;white-space:nowrap;background:" + (o?.bg ?? "") + ";color:" + (o?.fg ?? "") + ""))}>
                        {I(o?.label)}
                      </span>
                      {"\n          "}
                    </React.Fragment>
                  ))}
                  {"\n        "}
                </div>
                {"\n        "}
                <span onClick={v.dToggleTable} style={S("padding:7px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;white-space:nowrap")} className={"scp1"}>
                  {I(v.dTableLabel)}
                </span>
                {"\n        "}
                <span onClick={v.dExport} style={S("padding:7px 12px;border-radius:6px;cursor:pointer;background:var(--ink);color:var(--bg);white-space:nowrap")}>
                  {"Exportar TSV"}
                </span>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={S(("display:grid;grid-template-columns:" + (v.dGrid ?? "") + ";min-height:0"))}>
              {"\n      "}
              {v.dShowTable ? (
                <>
                  {"\n        "}
                  <div style={S("overflow:auto;border-right:1px solid var(--line);min-height:0")}>
                    {"\n          "}
                    <div style={S("min-width:640px")}>
                      {"\n            "}
                      <div style={S(("display:grid;grid-template-columns:" + (v.dCols ?? "") + ";position:sticky;top:0;background:var(--bg);border-bottom:1px solid var(--ink);z-index:1"))}>
                        {"\n              "}
                        {L(v.dHead).map((h, $index) => (
                          <React.Fragment key={$index}>
                            {"\n                "}
                            <span onClick={h?.onClick} style={S(("padding:10px 12px 8px;font-weight:600;cursor:pointer;white-space:nowrap;display:flex;gap:6px;justify-content:" + (h?.jc ?? "") + ";color:" + (h?.fg ?? "") + ""))} className={"scp4"}>
                              {I(h?.label)}
                              <span style={S("color:var(--acc);width:10px")}>
                                {I(h?.arrow)}
                              </span>
                            </span>
                            {"\n              "}
                          </React.Fragment>
                        ))}
                        {"\n            "}
                      </div>
                      {"\n            "}
                      {L(v.dRows).map((r, $index) => (
                        <React.Fragment key={$index}>
                          {"\n              "}
                          <div onClick={r?.onClick} onMouseEnter={r?.onEnter} style={S(("display:grid;grid-template-columns:" + (v.dCols ?? "") + ";border-bottom:1px solid var(--line);cursor:pointer;background:" + (r?.bg ?? "") + ""))} className={"scp0"}>
                            {"\n                "}
                            <span style={S("padding:9px 12px;display:flex;align-items:center;gap:8px;white-space:nowrap")}>
                              <span style={S(("width:8px;height:8px;border-radius:50%;flex-shrink:0;background:" + (r?.dot ?? "") + ""))}></span>
                              <span style={S("color:var(--acc)")}>
                                {I(r?.acc)}
                              </span>
                            </span>
                            {"\n                "}
                            <span style={S("padding:9px 12px")}>
                              {I(r?.env)}
                            </span>
                            {"\n                "}
                            <span style={S("padding:9px 12px")}>
                              {I(r?.geo)}
                            </span>
                            {"\n                "}
                            <span style={S("padding:9px 12px;text-align:right")}>
                              {I(r?.lat)}
                            </span>
                            {"\n                "}
                            <span style={S("padding:9px 12px;text-align:right")}>
                              {I(r?.lon)}
                            </span>
                            {"\n                "}
                            <span style={S("padding:9px 12px;text-align:right")}>
                              {I(r?.year)}
                            </span>
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </React.Fragment>
                      ))}
                      {"\n            "}
                      {v.dNone ? (
                        <>
                          <div style={S("padding:28px;text-align:center;color:var(--mute)")}>
                            {"Ningún aislamiento coincide con el filtro."}
                          </div>
                        </>
                      ) : null}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </>
              ) : null}
              {"\n      "}
              <div style={S("position:relative;min-height:420px;background:var(--bg2)")}>
                {"\n        "}
                <iframe ref={v.globeRef} src={"Globo.html"} title={"Globo"} style={S("position:absolute;inset:0;width:100%;height:100%;border:0;display:block")}></iframe>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n  "}
        </>
      ) : null}
      {"\n\n  "}
      {v.isTablas ? (
        <>
          {"\n  "}
          <div style={S("overflow:auto")}>
            {"\n    "}
            <div style={S("max-width:1400px;margin:0 auto;padding:28px 28px 56px;display:flex;flex-direction:column;gap:18px")}>
              {"\n      "}
              <div style={S("display:flex;gap:4px;border-bottom:1px solid var(--line);flex-wrap:wrap")}>
                {"\n        "}
                {L(v.tTabs).map((t, $index) => (
                  <React.Fragment key={$index}>
                    {"\n          "}
                    <span onClick={t?.onClick} style={S(("padding:10px 14px;cursor:pointer;margin-bottom:-1px;border-bottom:2px solid " + (t?.bd ?? "") + ";color:" + (t?.fg ?? "") + ";font-weight:" + (t?.fw ?? "") + ""))}>
                      {I(t?.label)}
                    </span>
                    {"\n        "}
                  </React.Fragment>
                ))}
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap")}>
                {"\n        "}
                <div style={S("height:36px;min-width:260px;flex:1;max-width:420px;border:1px solid var(--line2);border-radius:8px;display:flex;align-items:center;padding:0 12px;gap:8px")}>
                  {"\n          "}
                  <span style={S("color:var(--mute)")}>
                    {"⌕"}
                  </span>
                  {"\n          "}
                  <input value={(v.tq) ?? ""} onChange={v.onTQ} placeholder={"Buscar en la tabla"} style={S("flex:1;min-width:0;border:0;outline:none;background:transparent;font-size:13px")} />
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={S("display:flex;gap:8px;align-items:center;position:relative;flex-wrap:wrap")}>
                  {"\n          "}
                  <span style={S("color:var(--mute)")}>
                    {I(v.tSelInfo)}
                  </span>
                  {"\n          "}
                  {v.tHasFilters ? (
                    <>
                      <span onClick={v.tClearFilters} style={S("padding:7px 12px;border-radius:6px;cursor:pointer;color:var(--acc)")}>
                        {"Quitar filtros"}
                      </span>
                    </>
                  ) : null}
                  {"\n          "}
                  <span onClick={v.tToggleCols} style={S("padding:7px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer")} className={"scp1"}>
                    {"Columnas ▾"}
                  </span>
                  {"\n          "}
                  <span onClick={v.tCopy} style={S("padding:7px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer")} className={"scp1"}>
                    {I(v.tCopyLabel)}
                  </span>
                  {"\n          "}
                  <span onClick={v.tExport} style={S("padding:7px 12px;border-radius:6px;cursor:pointer;background:var(--ink);color:var(--bg)")}>
                    {I(v.tExportLabel)}
                  </span>
                  {"\n          "}
                  {v.tColsOpen ? (
                    <>
                      {"\n            "}
                      <div style={S("position:absolute;right:0;top:42px;width:240px;background:var(--bg);border:1px solid var(--line);border-radius:10px;box-shadow:0 12px 32px var(--shadow);z-index:6;padding:8px;display:flex;flex-direction:column;max-height:360px;overflow:auto")}>
                        {"\n              "}
                        {L(v.tColOpts).map((c, $index) => (
                          <React.Fragment key={$index}>
                            {"\n                "}
                            <div onClick={c?.onClick} style={S("display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:6px;cursor:pointer")} className={"scp0"}>
                              <span style={S(("width:16px;height:16px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:11px;border:1.5px solid var(--ink);background:" + (c?.bg ?? "") + ";color:var(--bg)"))}>
                                {I(c?.chk)}
                              </span>
                              {I(c?.label)}
                            </div>
                            {"\n              "}
                          </React.Fragment>
                        ))}
                        {"\n            "}
                      </div>
                      {"\n          "}
                    </>
                  ) : null}
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n\n      "}
              <div style={S("overflow-x:auto")}>
                {"\n        "}
                <div style={S(("min-width:" + (v.tMinW ?? "") + ";border-top:2px solid var(--ink);border-bottom:2px solid var(--ink)"))}>
                  {"\n          "}
                  <div style={S(("display:grid;grid-template-columns:" + (v.tGrid ?? "") + ";align-items:end;border-bottom:1px solid var(--ink)"))}>
                    {"\n            "}
                    <span onClick={v.tAll} style={S("padding:10px 8px;display:flex;align-items:center;cursor:pointer")}>
                      <span style={S(("width:15px;height:15px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;border:1.5px solid var(--ink);background:" + (v.tAllBg ?? "") + ";color:var(--bg)"))}>
                        {I(v.tAllChk)}
                      </span>
                    </span>
                    {"\n            "}
                    {L(v.tHead).map((h, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <span onClick={h?.onClick} style={S(("padding:10px 10px 8px;font-weight:600;cursor:pointer;display:flex;gap:6px;align-items:flex-end;white-space:nowrap;justify-content:" + (h?.jc ?? "") + ";color:" + (h?.fg ?? "") + ""))} className={"scp4"}>
                          {I(h?.label)}
                          <span style={S("color:var(--acc);width:10px")}>
                            {I(h?.arrow)}
                          </span>
                        </span>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div style={S(("display:grid;grid-template-columns:" + (v.tGrid ?? "") + ";border-bottom:1px solid var(--line);background:var(--bg2)"))}>
                    {"\n            "}
                    <span></span>
                    {"\n            "}
                    {L(v.tHead).map((h, $index) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <span style={S("padding:6px 6px")}>
                          <input value={(h?.fv) ?? ""} onChange={h?.onF} placeholder={h?.ph} style={S(("width:100%;height:26px;border:1px solid var(--line);border-radius:5px;padding:0 7px;font-size:11px;background:var(--bg);outline:none;text-align:" + (h?.ta ?? "") + ""))} />
                        </span>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                  </div>
                  {"\n          "}
                  {L(v.tRows).map((r, $index) => (
                    <React.Fragment key={$index}>
                      {"\n            "}
                      <div onClick={r?.onOpen} style={S(("display:grid;grid-template-columns:" + (v.tGrid ?? "") + ";border-bottom:1px solid var(--line);cursor:pointer;background:" + (r?.bg ?? "") + ""))} className={"scp0"}>
                        {"\n              "}
                        <span onClick={r?.onToggle} style={S("padding:9px 8px;display:flex;align-items:center")}>
                          <span style={S(("width:15px;height:15px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;border:1.5px solid var(--line2);background:" + (r?.chkBg ?? "") + ";color:var(--bg)"))}>
                            {I(r?.chk)}
                          </span>
                        </span>
                        {"\n              "}
                        {L(r?.cells).map((c, $index) => (
                          <React.Fragment key={$index}>
                            {"\n                "}
                            <span style={S(("padding:9px 10px;line-height:1.45;overflow-wrap:break-word;hyphens:none;text-align:" + (c?.ta ?? "") + ";color:" + (c?.fg ?? "") + ";font-weight:" + (c?.fw ?? "") + ";font-style:" + (c?.fst ?? "") + ""))}>
                              {I(c?.t)}
                            </span>
                            {"\n              "}
                          </React.Fragment>
                        ))}
                        {"\n            "}
                      </div>
                      {"\n          "}
                    </React.Fragment>
                  ))}
                  {"\n          "}
                  {v.tNoRows ? (
                    <>
                      <div style={S("padding:28px;text-align:center;color:var(--mute)")}>
                        {"Ninguna fila coincide con los filtros."}
                      </div>
                    </>
                  ) : null}
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:wrap")}>
                {"\n        "}
                <p style={S("margin:0;max-width:820px;line-height:1.7;color:var(--ink2)")}>
                  <span style={S("font-weight:700")}>
                    {I(v.tCapTitle)}
                  </span>
                  {" "}
                  {I(v.tCap)}
                </p>
                {"\n        "}
                <div style={S("display:flex;align-items:center;gap:6px;white-space:nowrap")}>
                  {"\n          "}
                  <span style={S("color:var(--mute);margin-right:6px")}>
                    {I(v.tRange)}
                  </span>
                  {"\n          "}
                  <span onClick={v.tPrev} style={S(("width:32px;height:32px;border:1px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:" + (v.tPrevOp ?? "") + ""))}>
                    {"←"}
                  </span>
                  {"\n          "}
                  <span onClick={v.tNext} style={S(("width:32px;height:32px;border:1px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:" + (v.tNextOp ?? "") + ""))}>
                    {"→"}
                  </span>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <span style={S("color:var(--mute);font-size:11px")}>
                {"Clic en una fila para abrirla en su vista · filtros numéricos aceptan >, <, >=, <="}
              </span>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n  "}
        </>
      ) : null}
      {"\n\n  "}
      {v.isDescargas ? (
        <>
          {"\n  "}
          <div style={S("overflow:auto")}>
            {"\n    "}
            <div style={S("max-width:960px;margin:0 auto;padding:56px 32px;display:flex;flex-direction:column;gap:24px")}>
              {"\n      "}
              <h1 style={S("margin:0;font-size:30px;font-weight:600")}>
                {"Descargas"}
              </h1>
              {"\n      "}
              <div style={S("display:flex;flex-direction:column;border-top:2px solid var(--ink);border-bottom:2px solid var(--ink)")}>
                {"\n        "}
                {L(v.dl).map((d, $index) => (
                  <React.Fragment key={$index}>
                    {"\n          "}
                    <div style={S("display:grid;grid-template-columns:minmax(0,1fr) 90px 120px;gap:16px;align-items:center;padding:16px 4px;border-bottom:1px solid var(--line)")}>
                      {"\n            "}
                      <div style={S("display:flex;flex-direction:column;gap:4px")}>
                        <span style={S("font-weight:600")}>
                          {I(d?.name)}
                        </span>
                        <span style={S("color:var(--mute);line-height:1.5")}>
                          {I(d?.desc)}
                        </span>
                      </div>
                      {"\n            "}
                      <span style={S("color:var(--mute)")}>
                        {I(d?.fmt)}
                      </span>
                      {"\n            "}
                      <span onClick={d?.onClick} style={S(("padding:8px 12px;border-radius:6px;text-align:center;cursor:pointer;border:1px solid var(--line);color:" + (d?.fg ?? "") + ""))} className={"scp1"}>
                        {I(d?.action)}
                      </span>
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </React.Fragment>
                ))}
                {"\n      "}
              </div>
              {"\n      "}
              <span style={S("color:var(--mute);line-height:1.6")}>
                {"Las tablas filtradas también se pueden exportar desde la sección Tablas."}
              </span>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n  "}
        </>
      ) : null}
      {"\n\n  "}
      {v.isAcerca ? (
        <>
          {"\n  "}
          <div style={S("overflow:auto")}>
            {"\n    "}
            <div style={S("max-width:900px;margin:0 auto;padding:56px 32px 72px;display:flex;flex-direction:column;gap:40px;line-height:1.7")}>
              {"\n      "}
              <div style={S("display:flex;flex-direction:column;gap:12px")}>
                {"\n        "}
                <h1 style={S("margin:0;font-size:30px;font-weight:600")}>
                  {"Acerca de FIRMA"}
                </h1>
                {"\n        "}
                <p style={S("margin:0;color:var(--ink2)")}>
                  {"Base de datos de interacciones de regulación transcripcional y rutas metabólicas reconstruidas para "}
                  <em>
                    {"Bacillus subtilis"}
                  </em>
                  {" y otros Firmicutes."}
                </p>
                {"\n      "}
              </div>
              {"\n      "}
              <div style={S("display:grid;grid-template-columns:160px minmax(0,1fr);gap:16px 32px;border-top:1px solid var(--line);padding-top:24px")}>
                {"\n        "}
                <span style={S("font-weight:600")}>
                  {"Contenido"}
                </span>
                {"\n        "}
                <div style={S("display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px")}>
                  {"\n          "}
                  {L(v.counts).map((c, $index) => (
                    <React.Fragment key={$index}>
                      {"\n            "}
                      <div style={S("display:flex;flex-direction:column")}>
                        <span style={S("font-size:22px;font-weight:600")}>
                          {I(c?.n)}
                        </span>
                        <span style={S("color:var(--mute)")}>
                          {I(c?.l)}
                        </span>
                      </div>
                      {"\n          "}
                    </React.Fragment>
                  ))}
                  {"\n        "}
                </div>
                {"\n        "}
                <span style={S("font-weight:600")}>
                  {"Evidencia"}
                </span>
                {"\n        "}
                <div style={S("display:flex;flex-direction:column;gap:8px;color:var(--ink2)")}>
                  {"\n          "}
                  <span>
                    <span style={S("font-weight:600;color:var(--ink)")}>
                      {"Experimental."}
                    </span>
                    {" Interacción demostrada por ensayos de unión (EMSA, footprinting, ChIP) o por cambios de expresión en mutantes."}
                  </span>
                  {"\n          "}
                  <span>
                    <span style={S("font-weight:600;color:var(--ink)")}>
                      {"Predicha."}
                    </span>
                    {" Inferida por búsqueda de motivos o por homología, sin validación directa."}
                  </span>
                  {"\n        "}
                </div>
                {"\n        "}
                <span style={S("font-weight:600")}>
                  {"Versión"}
                </span>
                <span style={S("color:var(--mute)")}>
                  {"[v0.1 · fecha de publicación]"}
                </span>
                {"\n        "}
                <span style={S("font-weight:600")}>
                  {"Licencia"}
                </span>
                <span style={S("color:var(--mute)")}>
                  {"[por definir]"}
                </span>
                {"\n        "}
                <span style={S("font-weight:600")}>
                  {"Contacto"}
                </span>
                <span style={S("color:var(--ink2)")}>
                  {"Laboratorio de la Dra. Rosa María Gutiérrez Ríos · Departamento de Microbiología Molecular · Instituto de Biotecnología, UNAM · Cuernavaca, Morelos"}
                </span>
                {"\n        "}
                <span style={S("font-weight:600")}>
                  {"Cómo citar"}
                </span>
                {"\n        "}
                <div style={S("background:var(--soft);border-radius:10px;padding:16px;display:flex;justify-content:space-between;gap:16px;align-items:flex-start;flex-wrap:wrap")}>
                  {"\n          "}
                  <span style={S("flex:1;min-width:240px")}>
                    {"[Autores]. FIRMA: Firmicutes Integrated Regulatory & Metabolic Atlas. [Revista, año]. https://[dominio]"}
                  </span>
                  {"\n          "}
                  <span onClick={v.copyCite} style={S("padding:6px 12px;border:1px solid var(--line2);border-radius:6px;white-space:nowrap;cursor:pointer;background:var(--bg)")}>
                    {I(v.copyLabel)}
                  </span>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n  "}
        </>
      ) : null}
    </div>
    </>
  );
}
