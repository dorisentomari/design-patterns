function Window(name) {
  this.name = name;
}

Window.getInstance = function () {
  if (!this.instance) {
    this.instance = new Window();
  }
  return this.instance;
}

let w1 = Window.getInstance();
let w2 = Window.getInstance();
console.log(w1 === w2);
