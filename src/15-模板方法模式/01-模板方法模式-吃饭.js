class Person {

  dinner() {
    this.buy();
    this.cook();
    this.eat();
  }

  buy() {
    throw new Error('buy 方法必须由子类实现');
  }

  cook() {
    throw new Error('cook 方法必须由子类实现');
  }

  eat() {
    throw new Error('eat 方法必须由子类实现');
  }

}

class Wang extends Person {

  buy() {
    console.log('买黄瓜');
  }

  cook() {
    console.log('烹饪黄瓜');
  }

  eat() {
    console.log('吃黄瓜');
  }

}

const wang = new Wang();
wang.dinner();
