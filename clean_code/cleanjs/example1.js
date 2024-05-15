// Sử dụng class hoặc Object trong ES6 để làm đẹp lại đoạn code sau

// var name = 'John';
// var age = 30;

// function displayUser() {
//   console.log(name + ' is ' + age + ' years old.');
// }

// function updateUser(newName, newAge) {
//   name = newName;
//   age = newAge;
// }

// displayUser();
// updateUser('Jane', 25);
// displayUser();
//class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayUser() {
    console.log(`${this.name} is ${this.age} years old.`);
  }

  updateUser(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
}

const user = new User('John', 30);
user.displayUser();
user.updateUser('Jane', 25);
user.displayUser();

//or obj

const userObj = {
  name: 'John',
  age: 30,
  displayUser() {
    console.log(`${this.name} is ${this.age} years old.`);
  },
  updateUser(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
};

user.displayUser();
user.updateUser('Jane', 25);
user.displayUser();