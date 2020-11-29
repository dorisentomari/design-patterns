class Sum {
  sum(a, b) {
    return a + b;
  }
}

class Minus {
  minus(a, b) {
    return a - b;
  }
}

class Multiply {
  multiply(a, b) {
    return a * b;
  }
}

class Divide {
  divide(a, b) {
    return a / b;
  }
}

class Calculator {
  constructor() {
    this._sum = new Sum();
    this._minus = new Minus();
    this._multiply = new Multiply();
    this._divide = new Divide();
  }

  sum(...args) {
    return this._sum.sum(...args);
  }

  minus(...args) {
    return this._minus.minus(...args);
  }

  multiply(...args) {
    return this._multiply.multiply(...args);
  }

  divide(...args) {
    return this._divide.divide(...args);
  }

}

let calculator = new Calculator();
console.log(calculator.sum(2, 4));
console.log(calculator.minus(2, 4));
console.log(calculator.multiply(2, 4));
console.log(calculator.divide(2, 4));


