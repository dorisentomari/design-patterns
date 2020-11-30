class A {
  constructor(bridge) {
    this.bridge = bridge;
  }

  go() {
    console.log(`从 ${this.from()} 到达 ${this.bridge.to()}`);
  }

  from() {
    throw new Error('子类必须实现 from 方法');
  }
}

class A1 extends A {
  from() {
    return 'A1';
  }
}

class A2 extends A {
  from() {
    return 'A2';
  }
}

class B {
  to() {
    throw new Error('子类必须实现 to 方法');
  }
}

class B1 extends B {
  to() {
    return 'B1';
  }
}

class B2 extends B {
  to() {
    return 'B2';
  }
}

let b2 = new B2();
let a1 = new A1(b2);
a1.go();
