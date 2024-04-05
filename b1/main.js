// -----------------//
// -----String----//
// -----------------//

// b1
let s1 = "Amela A Beta";
let s2 = "Beta";
let s3 = "B";
const checkStringExist = (string1, string2) => {
  let char = string1.split(" ");
  console.log(char);
  for (let i = 0; i < char.length; i++) {
    if (char[i] === string2) {
      return true;
    }
  }
  return false;
};
// console.log(checkStringExist(s1, s2));
// console.log(checkStringExist(s1, s3));

// -----------------//

//b2
let stringSort = "Xin chào các bạn";
const shortenString = (stringSort) => {
  return stringSort.slice(0, 8) + "...";
};

// console.log(shortenString(stringSort));

// -----------------//

//b3
let mutilString = "LANDMARK";
const copyX10String = (mutilString) => {
  return mutilString.repeat(10);
};

// console.log(copyX10String(mutilString));

// -----------------//

//b4
let a = "a";
const repeatString = (string) => {
  return (string + "-").repeat(10).slice(0, -1);
};
// console.log(repeatString(a));

let reverseString = "Hello";
const reverseStrin = (string) => {
  return string.split("").reverse().join("");
};

// console.log(reverseStrin(reverseString));

// -----------------//

//b5

let x = "Race car";
let y = "hello world";

const checkReverseString = (rawString) => {
  rawString = rawString.toLowerCase().replace(/\s/g, '');
//   console.log(rawString);
//  console.log(rawString.split(" ").reverse().join(""));
  if (rawString === rawString.split("").reverse().join("")) {
    return true;
  }
  return false;
};

// console.log(checkReverseString(x));
// console.log(checkReverseString(y));

// -----------------//

//b6

let uptoCase = "ABC";
const checkUpToCase = (string) => {
  if (string === string.toUpperCase()) {
    return true;
  }
  return false;
};
//  console.log(checkUpToCase(uptoCase));

// -----------------//
// -----Number----//
// -----------------//

//b1
let r = 10;
const sphericalVolume = (r) => {
  if (r <= 0) {
    return "R must large 0";
  }
  let pi = Math.PI;
  return (volume = (4 / 3) * pi * Math.pow(r, 3));
};
// console.log(sphericalVolume(r).toFixed(2));

// -----------------//

//b2
let numEnd = 8;
let numStart = 3;
let sum = 0;
const totalIntegerInRange = (numStart, numEnd, sum) => {
  let start = Math.min(numStart, numEnd) + 1;
  let end = Math.max(numStart, numEnd);
  console.log(start);
  console.log(end);
  for (let i = start; i < end; i++) {
    sum += i;
    console.log(sum);
  }
  return sum;
};

// console.log(totalIntegerInRange(numStart, numEnd, sum));

// -----------------//

//b3

let numIsPrime = 13;
const checkPrime = (prime) => {
  if (prime <= 1) {
    return false;
  }
  for (let index = 2; index <= Math.sqrt(prime); index++) {
    if (prime % index === 0) {
      return false;
    }
  }
  return true;
};

// -----------------//

//b4
let integer = 5;
let sumInteger = 0;
const sumInt = (integer, sumInteger) => {
  for (let i = 2; i <= integer; i++) {
    if (checkPrime(i)) {
      // console.log(sumInteger);
      sumInteger += i;
    }
  }
  return sumInteger;
};

console.log(sumInt(integer, sumInteger));

// -----------------//

//b5

let intLessThan = 20;
const sumLessThan = (intLessThan) => {
  let sum = 0;

  if (intLessThan <= 0) {
    return "Number is not integer";
  }

  for (let i = 0; i <= Math.sqrt(intLessThan); i++) {
    if (intLessThan % i === 0) {
      sum += i;
      if (i !== Math.sqrt(intLessThan)) {
        sum += intLessThan / i;
      }
    }
  }
  return sum;
};

// console.log(sumLessThan(intLessThan));

// -----------------//

//b6

let sortNum = 576115;

const sortNumber = (sortNum) => {
  return parseInt(sortNum.toString().split("").sort().join(""));
};

// console.log(sortNumber(sortNum));

