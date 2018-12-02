// 工厂模式
class Product {
  constructor(name) {
    this.name = name;
  }

  init() {
    console.log('init');
  }

  func1() {
    console.log('fun1');
  }

  func2() {
    console.log('fun2');
  }

}

class Creator {
  create(name) {
    return new Product(name);
  }
}

let creator = new Creator();
let p = creator.create('mark');
p.init();
p.func1();
p.func2();
