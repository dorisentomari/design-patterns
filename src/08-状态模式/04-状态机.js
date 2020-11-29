const StateMachine = require('javascript-state-machine');
const MyStateMachine = require('./StateMachine');

/*
* solid 固态
* liquid 液态
* gas 气态
*
* solid --melt--> liquid    固态 --融化--> 液态
* liquid --vaporize--> gas  液态 --蒸发--> 气态
* liquid --freeze--> solid  液态 --冻结--> 固态
* gas --condense--> liquid  气态 --凝结--> 液态
* */

let fsm = new MyStateMachine({
  init: 'solid',
  transitions: [
    { from: 'solid', to: 'liquid', name: 'melt' },
    { from: 'liquid', to: 'solid', name: 'freeze' },
    { from: 'solid', to: 'gas', name: 'vaporize' },  // 汽化
    { from: 'gas', to: 'liquid', name: 'condense' },  // 凝结
  ],
  methods: {
    // 监听融化的动作
    onMelt() { console.log('融化 onMelt'); },
    // 监听冻结的动作
    onFreeze() { console.log('冻结 onFreeze'); },
    // 监听蒸发的动作
    onVaporize() { console.log('蒸发 onVaporize'); },
    // 监听凝结的动作
    onCondense() { console.log('凝结 onCondense'); },
  },
});

fsm.melt();
fsm.freeze();
fsm.vaporize();
fsm.condense();
