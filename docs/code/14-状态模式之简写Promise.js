import StateMachine from 'javascript-state-machine'

const fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve(state, data) {
      // state是当前状态机的实例
      // data是fsm.resolve()的参数
      console.log(state);
      data.successList.forEach(fn => fn());
    },
    onReject(state, data) {
      data.failList.forEach(fn => fn());
    }
  }
});

class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];
    fn(() => {
      fsm.resolve(this);
    }, () => {
      fsm.reject(this);
    })
  }

  then(successFn, failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }

}

function loadImg(src) {
  const promise = new MyPromise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject();
    };
    img.src = src;
  });
  return promise;
}

let src = 'https://gitee.com/logo-black.svg';
let result = loadImg(src);

result.then(() => {
  console.log('ok1');
}, () => {
  console.log('fail1');
});

result.then(() => {
  console.log('ok2');
}, () => {
  console.log('fail2');
});
