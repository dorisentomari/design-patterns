class Customer {
  constructor(kind) {
    this.kind = kind;
  }

  pay(amount) {
    return this.kind.pay(amount);
  }
}

class Normal {
  pay(amount) {
    return amount;
  }
}

class Member {
  pay(amount) {
    return amount * 0.9;
  }
}

class Vip {
  pay(amount) {
    return amount * 0.8;
  }
}

let c1 = new Customer(new Normal());
console.log(c1.pay(100));

let c2 = new Customer(new Member());
console.log(c2.pay(100));

let c3 = new Customer(new Vip());
console.log(c3.pay(100));
