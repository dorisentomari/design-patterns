class SuccessState {
  show() {
    console.log('显示绿色');
  }
}

class WarningState {
  show() {
    console.log('显示黄色');
  }
}

class ErrorState {
  show() {
    console.log('显示红色');
  }
}

class Battery {
  constructor() {
    this.amount = 'high';
    this.state = new SuccessState();  // 满电状态
  }

  show() {
    // 显示的逻辑委托为状态对象
    this.state.show();
    // 内部还要维护状态的变化
    if (this.amount === 'high') {
      this.amount = 'middle';
      this.state = new WarningState();
    } else if (this.amount === 'middle') {
      this.amount = 'low';
      this.state = new ErrorState();
    } else if (this.amount === 'low') {
      this.amount = 'high';
      this.state = new SuccessState();
    }

  }
}

const battery = new Battery();
battery.show();
battery.show();
battery.show();
battery.show();
