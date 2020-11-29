function Person (name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(this.name);
}

let p1 = new Person('jack');
let p2 = new Person('sherry');
console.log(p1.getName === p2.getName);

