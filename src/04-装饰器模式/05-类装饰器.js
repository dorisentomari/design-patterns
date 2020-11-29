
function log(...args) {
  return function (target) {
    console.log(...args);
    console.log(target);
    target.prototype.getHome = function () {
      console.log(target.name, 'getHome');
    }
  }
}

@log('aaaa', 'bbbb')
class Person {
  constructor(name, age) {
    console.log('Person constructor');
    this.name = name;
    this.age = age;
    this.getHome();
  }

  getName() {
    console.log('name', this.name);
  }

  getAge() {
    console.log('name', this.age);
  }

}


let person = new Person('jack', 18);

