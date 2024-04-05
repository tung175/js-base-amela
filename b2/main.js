// -----------------//
// -----Array----//
// -----------------//

// b1

let b1 = [2, 1, 3];

const minNumber = (arr) => {
  return Math.min(...arr);
};
// console.log(minNumber(b1));
// -----------------//

// b2
let b2 = [2, 4, 1, 6, 3, 4];

const findSecInArr = (arr) => {
  // console.log(arr);
  // console.log([... new Set(arr)]);
  let removeDupArr = [...new Set(arr)].sort((a, b) => {
    b - a;
  });
  return removeDupArr[1];
};
// console.log(findSecInArr(b2));

// -----------------//

// b3

let b3 = ["Hân", "Tùng", "Lâm", "Hoàng", "An"];

const sortStudentsZToA = (arr) => {
  console.log(arr);
  arr.sort((a, b) => {
    return b.localeCompare(a, "vi");
  });
  return arr;
};

// console.log(sortStudentsZToA(b3));

// -----------------//

// b4

let sum = 0;
const sumLessThanV = (sum) => {
  for (let i = 0; i < 100; i++) {
    if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

// console.log(sumLessThanV(sum));

// -----------------//

// b5
let b5 = [4, 5, 5, 2, 6, 7, 5, 8];
const newArr = (arr) => {
  return arr.map((value) => {
    // console.log(value % 2);
    return value % 2;
  });
};

// console.log(newArr(b5));

// -----------------//

// b6
let b6 = ["aaa", "fff", "a", "b", "c"];
const findMaxLengthInArr = (arr) => {
  let lgString = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lgString) {
      lgString = arr[i].length;
    }
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === lgString) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
// console.log(findMaxLengthInArr(b6));

// -----------------//

// b7

let randomArr = [0, 2, 4, 5, 7, 2, 4, 5];

const random = (randomArr) => {
  return randomArr[Math.floor(Math.random() * randomArr.length)];
};
// console.log(random(randomArr));
// console.log(Math.random());
// console.log(randomArr.length);

// -----------------//

// b8
let mixRandomArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const randomMixing = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let MixArr = Math.floor(Math.random() * arr.length);
    [arr[i], arr[MixArr]] = [arr[MixArr], arr[i]];
  }
  return arr;
};

// console.log(randomMixing(mixRandomArr));

// -----------------//

// b9

let arr1 = [0, 1, 3];
let arr2 = [1, 3];

const checkExistInTwoArr = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};
// console.log(checkExistInTwoArr(arr1, arr2));

// -----------------//

// b10
const checkNotExistInTwoArr = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};
// console.log(checkNotExistInTwoArr(arr1, arr2));

// -----------------//

// b11
let string = "dog";
const sub_string = (string) => {
  let sub_string = [];

  for (let i = 0; i < string.length; i++) {
    // console.log("check i:", i);
    for (let j = i + 1; j <= string.length; j++) {
      //   console.log("check j:", j);
      sub_string.push(string.slice(i, j));
      //   console.log("check sub_string: ", string.slice(i, j));
    }
  }

  return sub_string;
};
// console.log(sub_string(string));

// -----------------//

// b12
let ascArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let toDownArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const checkAsc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(checkAsc(ascArr));

// -----------------//

// b13
let oddArr = [7, 5, 3, 1];
const checkDesc = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] >= arr[i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(checkDesc(oddArr));

// -----------------//
// -----Object----//
// -----------------//

// b1

let obj = {
  name: "Nguyen Van A",
  age: 25,
  email: "abc@gmail.com",
};

const getKeysInObj = (obj) => {
  return Object.keys(obj);
  // let keyOfObj = []
  // for (let key in obj) {
  //   keyOfObj.push(key)
  // }
  // return keyOfObj
};

// console.log(getKeysInObj(obj));

// -----------------//

// b2

const getValuesInObj = (obj) => {
  return Object.values(obj);
  // let valueOfObj = []
  // for (let key in obj) {
  //   valueOfObj.push(obj[key])
  // }
  // return valueOfObj
};
// console.log(getValuesInObj(obj));

// -----------------//

// b3
let key = "name";
const checkExistObj = (obj, key) => {
  if (obj.hasOwnProperty(key)) return true;
  // if (key in obj) {
  //   return true
  // }
  return false;
};

// console.log(checkExistObj(obj, key));
// -----------------//

// b4
const getLengthObj = (obj) => {
  return Object.keys(obj).length;
};

// console.log(getLengthObj(obj));

// -----------------//

// b5
let user = [
  {
    name: "Nguyen Van A",
    age: 26,
    isStatus: true,
  },
  {
    name: "Nguyen Van B",
    age: 25,
    isStatus: false,
  },
  {
    name: "Nguyen Van V",
    age: 30,
    isStatus: false,
  },
  {
    name: "Nguyen Van C",
    age: 22,
    isStatus: true,
  },
  {
    name: "Nguyen Van S",
    age: 20,
    isStatus: false,
  },
  {
    name: "Nguyen Van A",
    age: 16,
    isStatus: true,
  },
];
const getInfoUser = (user) => {
  // let {name, age, isStatus} = user
  // if (age > 25 && isStatus === true) {
  //   return user
  // }
 let data = user.filter(user => user.age > 25 && user.isStatus === true)
  if (data) {
    return data;
  }
  return "Not found user";
};
// console.log(getInfoUser(user));
