let fruits = ['apple', 'banana', 'cherry'];
let applePresent = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === 'apple') {
    applePresent = true;
    break;
  }
}

let fruitsEdited = ['apple', 'banana', 'cherry'];
let applePresentEdited = fruits.includes('apple');