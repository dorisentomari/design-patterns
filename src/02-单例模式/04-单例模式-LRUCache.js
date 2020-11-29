/*
* 1. 数据库连接池，缓存是为了提高性能
* */

/*
* 2. LRU cache
* */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.memeners = [];
  }

  put(key, value) {
    let oldIndex = -1;
    let oldAge = -1;
    let found = false;
    for (let i = 0; i < this.memeners.length; i++) {
      const member = this.memeners[i];
      if (member.age > oldAge) {
        oldAge = member.age;
        oldIndex = i;
      }
      if (member.key === key) {
        found = true;
        this.memeners[i] = {key, value, age: 0};
      } else {
        member.age++;
      }
    }
    if (!found) {
      if (this.capacity === this.memeners.length) {
        this.memeners.splice(oldIndex, 1);
      }
      this.memeners.push({key, value, age: 0});
      return true;
    }
  }

  get(key) {
    for (let i = 0; i < this.memeners.length; i++) {
      const member = this.memeners[i];
      if (member.key === key) {
        member.age = 0
        return member;
      }
    }
    return -1;
  }
}

let lruCache = new LRUCache(3);

lruCache.put('1', '1');
lruCache.put('2', '2');
lruCache.put('3', '3');
lruCache.put('4', '4');
lruCache.put('5', '5');

console.log(lruCache);
