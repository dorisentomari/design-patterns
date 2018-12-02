class LoginForm {
  constructor() {
    this.state = false;
  }

  show() {
    if (this.state) {
      console.log('已经显示登录框');
      return;
    }
    this.state = true;
    console.log('登录框已显示')
  }

  hide() {
    if (!this.state) {
      console.log('已经隐藏登录框');
      return;
    }
    this.state = false;
    console.log('登录框已隐藏');
  }
}

LoginForm.getInstacne = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  }
})();


let login1 = LoginForm.getInstacne();
login1.show();

let login2 = LoginForm.getInstacne();
login2.hide();

console.log('login1 === login2', login1 === login2);
