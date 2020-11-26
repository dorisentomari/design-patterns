class Plant {
  constructor(name) {
    this.name = name;
  }

  grow() {
    console.log('Plant grow');
  }
}

class Apple extends Plant{
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Orange extends Plant{
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Factory {
  static create(type) {
    switch (type) {
      case 'apple':
        return new Apple('苹果', '甜');
      case 'orange':
        return new Orange('橘子', '酸');
      default:
        return new Error('你要的类型不存在');
    }
  }
}

let apple = Factory.create('apple');
let orange = Factory.create('orange');

console.log(apple.flavour);
console.log(orange.flavour);
