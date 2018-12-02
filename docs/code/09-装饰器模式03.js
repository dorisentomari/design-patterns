import {time, readonly} from 'core-decorators';

class Bird {
  @readonly
  @time('sing')
  sing() {
    console.log('hello, singer');
  }
}

var bird = new Bird();
bird.sing();
// error
// bird.sing = function () {
//   console.log('byebye singer');
// };