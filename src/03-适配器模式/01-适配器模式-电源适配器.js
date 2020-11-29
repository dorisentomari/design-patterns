class Power {
  charge() {
    return '220V';
  }
}

class Adaptor {
  constructor(power) {
    this.power = power;
  }

  charge() {
    let v = this.power.charge();
    return `${v} => 12V`;
  }
}

class Client {
  constructor(adaptor) {
    this.adaptor = adaptor;
  }

  use() {
    console.log(this.adaptor.charge());
  }

}

let power = new Power();
let adaptor = new Adaptor(power);
let client = new Client(adaptor);
client.use();

