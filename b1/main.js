// -----------------//
// -----String----//
// -----------------//

// b1
let s1 = "Amela A Beta";
let s2 = "Beta";
let s3 = "abc";
let checkStringExist = (string1, string2) => {
  if (string1.includes(string2)) {
    return true;
  }
  // if (s1.includes(s2)) {
  //     return true
  // }
  return false;
};
// console.log(checkStringExist(s1, s2));
// console.log(checkStringExist(s1, s3));

// -----------------//

//b2
let stringSort = "Xin chào các bạn";
let shortenString = (stringSort) => {
  return stringSort.slice(0, 8) + "...";
};

// console.log(shortenString(stringSort));

// -----------------//

//b3
let mutilString = "LANDMARK";
let copyX10String = (mutilString) => {
  return mutilString.repeat(10);
};

// console.log(copyX10String(mutilString));

// -----------------//

//b4
let a = "a";
let repeatString = (string) => {
  return (string + "-").repeat(10).slice(0, -1);
};
// console.log(repeatString(a));

let reverseString = "Hello";
let reverseStrin = (string) => {
  return string.split("").reverse().join("");
};

// console.log(reverseStrin(reverseString));

// -----------------//

//b5

let x = "Race car";
let y = "hello world";

let checkReverseString = (string1, string2) => {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  string1.split("").reverse().join("");
  if (string1 === string2) {
    return true;
  }
  return false;
};

// console.log(checkReverseString(x, y));

// -----------------//

//b6

let UptoCase = "ABC";
let checkUpToCase = (string) => {
  if (string === string.toUpperCase()) {
    return true;
  }
  return false;
};
//  console.log(checkUpToCase(UptoCase));

// -----------------//
// -----Number----//
// -----------------//

//b1
let r = 10;
let sphericalVolume = (r) => {
  let pi = Math.PI;
  return (volume = (4 / 3) * pi * Math.pow(r, 3));
};
// console.log(sphericalVolume(r).toFixed(2));

// -----------------//

//b2
let numEnd = 8;
let numStart = 3;
let sum = 0;
let totalIntegerInRange = (numStart, numEnd, sum) => {
  let Start = Math.min(numStart, numEnd) + 1;
  let End = Math.max(numStart, numEnd);
  console.log(Start);
  console.log(End);
  for (let i = Start; i < End; i++) {
    sum += i;
    console.log(sum);
  }
  return sum;
};

// console.log(totalIntegerInRange(numStart, numEnd, sum));

// -----------------//

//b3

let numIsPrime = 13;
let checkPrime = (prime) => {
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
let sumInt = (integer, sumInteger) => {
  for (let i = 2; i < integer; i++) {
    if (checkPrime(i)) {
      // console.log(sumInteger);
      sumInteger += i;
    }
  }
  return sumInteger;
};

// console.log(sumInt(integer, sumInteger));

// -----------------//

//b5

let intLessThan = 20
let sumLessThan = (intLessThan) => {
  let sum = 0

  if (intLessThan <= 0 ) {
    return "Number is not integer"
  }

  for (let i = 0; i <= Math.sqrt(intLessThan); i++) {
    if (intLessThan % i === 0) {
      sum += i
      if (i !== Math.sqrt(intLessThan)) {
        sum += intLessThan/i
      }
    }
  }
  return sum
}

// console.log(sumLessThan(intLessThan));

// -----------------//

//b6

let sortNum = 576115

let sortNumber = (sortNum) => {
    return parseInt(sortNum.toString().split('').sort().join(''));
}

// console.log(sortNumber(sortNum));