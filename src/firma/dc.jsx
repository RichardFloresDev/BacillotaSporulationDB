// Sustituto mínimo del runtime del prototipo (dc-runtime): una clase de lógica
// con state/setState que un componente React aloja y re-renderiza.
import React from 'react';

export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
  }
  setState(update, cb) {
    this.__host && this.__host.setLogicState(update, cb);
  }
  forceUpdate() {
    this.__host && this.__host.forceUpdate();
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  renderVals() {
    return {};
  }
}

export function host(Logic, View, name) {
  class Host extends React.Component {
    constructor(props) {
      super(props);
      this.logic = new Logic(props);
      this.logic.__host = this;
      this.state = { v: 0 };
    }
    setLogicState(update, cb) {
      const prev = this.logic.state;
      const patch = typeof update === 'function' ? update(prev) : update;
      this.logic.state = { ...prev, ...patch };
      this.setState(s => ({ v: s.v + 1 }), cb);
    }
    componentDidMount() { this.logic.componentDidMount(); }
    componentDidUpdate(prevProps) { this.logic.props = this.props; this.logic.componentDidUpdate(prevProps); }
    componentWillUnmount() { this.logic.componentWillUnmount(); }
    render() {
      this.logic.props = this.props;
      const vals = { ...this.props, ...(this.logic.renderVals() || {}) };
      return <div className="sc-host" data-sc-name={name}>{View(vals)}</div>;
    }
  }
  Host.displayName = name;
  return Host;
}
