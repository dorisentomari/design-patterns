class Modal {
  constructor(options = {}) {
    this.title = options.title || '标题';
    this.content = options.content || '内容';
    this.onConfirm = options.onConfirm;
    this.onConfirmText = options.onConfirmText || '确定';
    this.onCancel = options.onCancel;
    this.onCancelText = options.onCancelText || '取消';
  }

  // 初始化页面弹窗
  init() {
    this.panel = document.createElement('div');
    this.panel.className = 'modal';
    document.body.appendChild(this.panel);

    let titleP = document.createElement('p');
    titleP.innerHTML = this.title;
    this.panel.appendChild(titleP);
    this.titleP = titleP;

    let contentP = document.createElement('p');
    contentP.innerHTML = this.content;
    this.panel.appendChild(contentP);
    this.contentP = contentP;

    let buttonGroup = document.createElement('div');

    let confirmBtn = document.createElement('button');
    confirmBtn.className = 'button confirm';
    confirmBtn.innerText = this.onConfirmText;
    buttonGroup.appendChild(confirmBtn);
    this.confirmBtn = confirmBtn;

    let cancelBtn = document.createElement('button');
    cancelBtn.className = 'button cancel';
    cancelBtn.innerText = this.onCancelText;
    buttonGroup.appendChild(cancelBtn);
    this.cancelBtn = cancelBtn;

    this.panel.appendChild(buttonGroup);
  }

  eventListener() {
    this.confirmBtn.addEventListener('click', e => {
      this.onConfirm(e);
      this.hide();
    });
    this.cancelBtn.addEventListener('click', e => {
      this.onCancel(e);
      this.hide();
    });
  }

  hide() {
    this.panel.style.display = 'none';
  }
}

class ContentCloseModal extends Modal {
  init() {
    super.init();
    this.contentP.parentNode.removeChild(this.contentP);
    this.cancelBtn.parentNode.removeChild(this.cancelBtn);
  }
}

class CloseMeModal extends Modal {
  init() {
    super.init();
    let closeMeDom = document.createElement('span');
    closeMeDom.innerHTML = 'x';
    closeMeDom.className = 'close-me';
    this.panel.appendChild(closeMeDom);
    this.closeMe = closeMeDom;
  }

  eventListener() {
    super.eventListener();
    this.closeMe.addEventListener('click', (e) => {
      this.hide(e);
    })
  }


}

