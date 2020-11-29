const fs = require('fs');

let readFile = promisify(fs.readFile);

(async function read() {
  let a1 = await readFile('./a1.txt', 'utf-8');
  let a2 = await readFile('./a2.txt', 'utf-8');
  let a3 = await readFile('./a3.txt', 'utf-8');
  console.log(a1, a2, a3);
})();

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    });
  }
}



