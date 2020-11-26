function Window(name) {
  this.name = name;
}

Window.prototype.getName = function () {
  console.log(this.name);
}

let createInstance = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new Window(name)
    }
    return instance;
  }
})();

let w1 = new createInstance('tom');
let w2 = new createInstance('mark');

console.log(w1 === w2);
console.log(w1.name);     // tom
console.log(w2.name);     // tom

function Animal(name) {
  this.name = name;
}

let CreateSingle = function (Constructor) {
  let instance ;
  return function () {
    if(!instance) {
      // Constructor.apply(this, arguments);
      // Object.setPrototypeOf(this, Constructor.prototype);
      // instance = this;
      instance = new Constructor(...arguments);
    }
    return instance;
  }
}

let createWindow = CreateSingle(Animal);
let cw1 = createWindow('jack');
let cw2 = createWindow('mark');
console.log(cw1 === cw2);
console.log(cw1.name);
console.log(cw2.name);
