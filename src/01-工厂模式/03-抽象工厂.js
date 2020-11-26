class Factory {
  createButton() {
  }

  createIcon() {
  }
}

class AppleIcon {
  render() {
    console.log('render AppleIcon');
  }
}

class WindowsIcon {
  render() {
    console.log('render WindowsIcon');
  }
}

class AppleButton {
  render() {
    console.log('render AppleButton');
  }
}

class WindowsButton {
  render() {
    console.log('render WindowsButton');
  }
}

class WindowsFactory extends Factory {
  createButton() {
    return new WindowsButton();
  }

  createIcon() {
    return new WindowsIcon();
  }
}

class AppleFactory extends Factory {
  createButton() {
    return new AppleButton();
  }

  createIcon() {
    return new AppleIcon();
  }
}

let windowsFactory = new WindowsFactory();
windowsFactory.createButton().render();
windowsFactory.createIcon().render();

let appleFactory = new AppleFactory();
appleFactory.createButton().render();
appleFactory.createIcon().render();

