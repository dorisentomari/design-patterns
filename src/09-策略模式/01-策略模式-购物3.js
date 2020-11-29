class Customer {
  constructor() {
    this.kinds = {
      normal(amount) { return amount },
      member(amount) { return amount * 0.9 },
      vip(amount) { return amount * 0.8 },
    };
  }

  pay(kind, amount) {
    return this.kinds[kind] && this.kinds[kind](amount);
  }
}

let c1 = new Customer();
console.log(c1.pay('normal', 100));
console.log(c1.pay('member', 100));
console.log(c1.pay('vip', 100));


