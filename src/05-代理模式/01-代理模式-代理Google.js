class Google {
  get(url) {
    return 'http://www.google.com';
  }
}

class Proxy {
  constructor() {
    this.google = new Google();
  }

  get(url) {
    return this.google.get(url);
  }
}

let proxy = new Proxy();
let result = proxy.get();
console.log(result);
