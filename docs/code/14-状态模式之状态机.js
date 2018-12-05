import StateMachine from 'javascript-state-machine'

const fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 监听执行收藏
    onDoStore() {
      console.log('收藏成功');
      updateText();
    },
    // 监听取消收藏
    onDeleteStore() {
      console.log('取消收藏');
      updateText();
    }
  }
});

function updateText() {
  $btn1.innerText = fsm.state;
}

let $btn1 = document.getElementById('btn1');

$btn1.addEventListener('click', function (e) {
  e.stopPropagation();
  if (fsm.is('收藏')) {
    fsm.doStore();
  } else {
    fsm.deleteStore();
  }
});

// 初始化文案
updateText();
