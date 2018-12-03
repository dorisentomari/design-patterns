// 观察者模式之Node.js自定义事件
const EventEmitter = require('events').EventEmitter;

const emitter1 = new EventEmitter();

emitter1.on('some', (...args) => {
  console.log('first some events', args);
});

emitter1.on('some', (...args) => {
  console.log('second some events', args);
});

setTimeout(() => {
  emitter1.emit('some', 'mark', 18);
}, 1000);
