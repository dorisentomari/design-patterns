// 父类
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} eat...`);
  }
  speak() {
    console.log(`${this.name} speak....`);
  }
}

let zhang = new People('zhang', 20);
zhang.eat();
zhang.speak();

let wang = new People('wang', 21);
wang.eat();
wang.speak();

// 子类
class Student extends People {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
  study() {
    console.log(`${this.name} study...`);
  }
}

let xiaoming = new Student('xiaoming', 18, 24);
xiaoming.eat();
xiaoming.speak();
xiaoming.study();

