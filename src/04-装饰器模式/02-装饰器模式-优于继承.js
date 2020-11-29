class Coffee {

  make(water) {
    return `${water} + 咖啡`;
  }

  cost() {
    return 10;
  }
}

class MilkCoffee {
  constructor(parent) {
    this.parent = parent;
  }

  make(water) {
    return `${this.parent.make(water)} + 奶`
  }

  cost() {
    return this.parent.cost() + 2;
  }
}

class SugarCoffee {
  constructor(parent) {
    this.parent = parent;
  }

  make(water) {
    return `${this.parent.make(water)} + 糖`
  }

  cost() {
    return this.parent.cost() + 3;
  }
}

let coffer = new Coffee();
let res = coffer.make('水');
console.log('咖啡', res, '价格', coffer.cost());

let milkCoffer = new MilkCoffee(coffer);
res = milkCoffer.make('水');
console.log('加奶咖啡', res, '价格', milkCoffer.cost());

let sugarCoffer = new SugarCoffee(coffer);
res = sugarCoffer.make('水');
console.log('加糖咖啡', res, '价格', sugarCoffer.cost());

let sugarCoffer2 = new SugarCoffee(milkCoffer);
res = sugarCoffer2.make('水');
console.log('加糖加奶咖啡', res, '价格', sugarCoffer2.cost());
