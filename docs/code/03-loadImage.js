function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    }
    img.onerror = function () {
      reject('加载失败');
    }
    img.src = src;
  });
}

let src = 'https://www.baidu.com/img/bd_logo1.png';
let result = loadImage(src);

result.then(img => {
  console.log('img.width', img.width);
  return img;
}).then(img => {
  console.log('img.height', img.height);
  return img;
}).then(img => {
  console.log('img.src', img.src);
}).catch(error => {
  console.log(error);
});