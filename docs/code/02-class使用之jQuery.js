class JQuery {
  constructor(selector) {
    let slice = Array.prototype.slice;
    let dom = slice.call(document.querySelectorAll(selector));
    let len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
      console.log(this);
      console.log(this[i]);
    }
    this.length = len;
    this.selector = selector || '';
  }

  append(node) {

  }

  addClass(name) {

  }

  html(data) {

  }

}

window.$ = function (selector) {
  // 工厂模式
  return new JQuery(selector);
};