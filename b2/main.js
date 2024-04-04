// -----------------//
// -----Array----//
// -----------------//

// b1

let b1 = [2, 1, 3];

let minNumber = (arr) => {
  return Math.min(arr);
};
// console.log(minNumber(b1));
// -----------------//

// b2
let b2 = [2, 4, 1, 6, 3];

let findSecInArr = (arr) => {
  arr.sort((a, b) => {
    return b - a;
  });
  return arr[1];
};

// console.log(findSecInArr(b2));

// -----------------//

// b3

let b3 = ["Hân", "Tùng", "Lâm", "Hoàng", "An"];

let sortStudentsZToA = (arr) => {
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
let sumLessThanV = (sum) => {
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
let newArr = (arr) => {
    return arr.map((value) => {
        // console.log(value % 2);
        return value % 2
    })
}

// console.log(newArr(b5));

// -----------------//

// b6
let b6 = ['aaa', 'fff', 'a', 'b', 'c']
let findMaxLengthInArr = (arr) => {
    return arr.reduce((a, b) => {
        return a.length > b.length ? a : b
    })
}
console.log(findMaxLengthInArr(b6));