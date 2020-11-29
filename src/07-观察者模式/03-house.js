class Agent {
  constructor() {
    this._events = {};
  }

  subscribe(type, listener) {
    let listeners = this._events[type];
    if (listeners) {
      listeners.push(listener);
    } else {
      this._events[type] = [listener];
    }
  }

  publish(type) {
    let listeners = this._events[type];
    let args = Array.prototype.slice.call(arguments, 1);
    if (listeners) {
      listeners.forEach(listener => listener(...args));
    }
  }
}

class LandLord {
  constructor(name) {
    this.name = name;
  }

  lend(agent, area, money) {
    agent.publish('house', area, money);
  }
}

class Tenant {
  constructor(name) {
    this.name = name;
  }

  rent(agent) {
    agent.subscribe('house', (area, money) => {
      console.log(this.name, '看到新房源了', area, '平', money, '元');
    });
  }
}

let agent = new Agent();
let t1 = new Tenant('jack');
let t2 = new Tenant('tom');
t1.rent(agent);
t2.rent(agent);

let landLord = new LandLord('Herry');
landLord.lend(agent, 20, 2000);
landLord.lend(agent, 30, 3000);
