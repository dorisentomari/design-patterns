let Window = (function () {
  let window;
  return function (name) {
    if (window) {
      return window;
    } else {
      this.name = name;
      return (window = this);
    }
  }
})();

let w1 = new Window('tom');
let w2 = new Window('mark');
console.log(w1 === w2);
console.log(w1.name); // tom
console.log(w2.name); // tom
