class StateMachine {
  constructor(options) {
    let {init = '', transitions = [], methods = {}} = options;
    this.state = init;
    transitions.forEach(transition => {
      let {from, to, name} = transition;
      this[name] = function () {
        if (this.state === from) {
          this.state = to;
          let onMethod = 'on' + name.slice(0, 1).toUpperCase() + name.slice(1);
          methods[onMethod] && methods[onMethod]();
        }
      }
    })
  }
}

module.exports = StateMachine;
