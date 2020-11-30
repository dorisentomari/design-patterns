function Folder(name) {
  this.name = name;
  this.children = [];
  this.parent = null;
}

Folder.prototype.add = function (child) {
  child.parent = this;
  this.children.push(child);
}

Folder.prototype.show = function () {
  console.log('文件夹', this.name);
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].show();
  }
}

Folder.prototype.remove = function () {
  if (!this.parent) {
    return;
  }

  let children = this.parent.children;
  for (let i = 0; i < children.length; i++) {
    if (children[i] === this) {
      children.splice(i, 1);
      return;
    }
  }


}


function File(name) {
  this.name = name;
}

File.prototype.show = function () {
  console.log('文件', this.name);
}

let video = new Folder('video');
let vue = new Folder('vue');
let react = new Folder('react');
let vuejs = new File('vuejs');
let reactjs = new File('reactjs');

vue.add(vuejs);
react.add(reactjs);

video.add(vue);
video.add(react);
video.show();
console.log('=======删除 react 文件夹========');
react.remove();
video.show();

