class Plant {
  constructor(name) {
    this.name = name;
  }
}

class Apple extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Orange extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Lemon extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class AppleFactory {
  static create(...args) {
    return new Apple(...args);
  }
}

class OrangeFactory {
  static create(...args) {
    return new Apple(...args);
  }
}

class LemonFactory {
  static create(...args) {
    return new Lemon(...args);
  }
}

let apple = AppleFactory.create('苹果', '甜');
let orange = OrangeFactory.create('橘子', '酸');
let lemon = LemonFactory.create('橘子', '酸');

console.log(apple.name, apple.flavour);
console.log(orange.name, orange.flavour);
console.log(lemon.name, lemon.flavour);
