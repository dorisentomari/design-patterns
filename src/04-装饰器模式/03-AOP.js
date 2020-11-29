/*
* AOP Aspect Oriented Programming 面向切片编程
* 通过预编译方式和运行期动态代理实现在不修改源代码的情况下，给程序动态统一添加功能的一种技术
* */

Function.prototype.before = function (beforeFn) {
  let _this = this;
  return function () {
    beforeFn.apply(this, arguments);
    _this.apply(this, arguments);
  }
}

Function.prototype.after = function (afterFn) {
  let _this = this;
  return function () {
    _this.apply(this, arguments);
    afterFn.apply(this, arguments);
  }
}

function buy(goods, money) {
  console.log(`购买 ${goods}，花了 ${money} 元`);
}

buy = buy.before(function () {
  console.log('申请 1 元钱');
});

buy = buy.after(function () {
  console.log('找回 0.2 元');
});

buy('盐', 0.8);
