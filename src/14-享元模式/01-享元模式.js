function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
}

Person.prototype.getAge = function () {
  return 18;
}



