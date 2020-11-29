class EventEmitter {

  constructor() {
    this._events = {};
  }

  on(eventName, cb) {
    if (!this._events) {
      this._events = {};
    }

    if (eventName !== 'newListener') {
      this.emit('newListener', eventName);
    }

    if (this._events[eventName]) {
      this._events[eventName].push(cb);
    } else {
      this._events[eventName] = [cb];
    }
  }

  emit(eventName, ...args) {
    if (this._events && this._events[eventName]) {
      this._events[eventName].forEach(event => event(...args));
    }
  }

  off(eventName, cb) {
    if (this._events && this._events[eventName]) {
      this._events[eventName] = this._events[eventName].filter(c => (c !== cb && c.l !== cb));
    }
  }

  once(eventName, cb) {
    let self = this;
    once.l = cb;

    function once(...args) {
      cb(...args);
      self.off(eventName, cb);
    }

    this.on(eventName, once);
  }

}

const util = require('util');

function Girl() {
}

util.inherits(Girl, EventEmitter);

let girl = new Girl();

const cry = (who) => console.log(who, 'cry');
const eat = (who) => console.log(who, 'eat');

girl.once('message', cry);
girl.once('message', eat);

console.log(girl._events);

girl.emit('message', 'Lily')
girl.emit('message', 'Lily')
