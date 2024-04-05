// -----------------//
// -----Date----//
// -----------------//

// b1
let string: string = "/";
const getCurrentDate = (string: string): string => {
  let objectDate = new Date();

  let day = objectDate.getDate();
  // console.log(day);

  let month = objectDate.getMonth();
  // console.log(month + 1);

  let year = objectDate.getFullYear();
  // console.log(year);
  // return day + string + month + string + year
  return `${day}${string}${month + 1}${string}${year}`;
};

// console.log(getCurrentDate(string));

// -----------------//

// b2

let month: string = "3";
let year: string = "2001";
const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

// console.log(getDaysInMonth(+month, +year));

// -----------------//

// b3

const isWeekend = (): string => {
  let days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  days.forEach((day: string, index: number) => {
    // Check if the index of day value is equal to the returned value of getDay()
    index = new Date().getDay();
    if (index === 0 || index === 6) {
      console.log("Today is " + day);
    }
  });
  return "Not the weekend today";
};

// console.log(isWeekend());

// -----------------//

// b4

const getHourAndMin = (): string => {
  let objectDate: Date = new Date();
  let h: number = objectDate.getHours();

  let m: number = objectDate.getMinutes();
  return `${h}:${m}`;
};

// console.log(getHourAndMin());

// -----------------//

// b5
const calculateSinceStartOfYear = (): number => {
  let currentDate: Date = new Date();
  let startDate: Date = new Date(currentDate.getFullYear(), 0, 0);

  let millisecondsSinceStartOfYear =
    currentDate.getTime() - startDate.getTime();

  return Math.floor(millisecondsSinceStartOfYear / (1000 * 3600 * 24));
};

// console.log(calculateSinceStartOfYear());

// -----------------//

// b6

const calculateAge = (): number => {
  let year: string = "2001";
  let month: string = "5";
  let day: string = "11";

  let birthDate: Date = new Date(+year, +month, +day);
  // console.log(+month);

  // console.log(birthDate);

  let currentDate: Date = new Date();
  // console.log(currentDate);
  let age: number = currentDate.getFullYear() - birthDate.getFullYear();
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDay() < birthDate.getDay())
  ) {
    return age--;
  }
  return age;
};

// console.log(calculateAge());

// -----------------//

// b7
const isEarlyWeek = (): string => {
  let days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  days.forEach((day: string, index: number) => {
    // Check if the index of day value is equal to the returned value of getDay()
    index = new Date().getDay();
    if (index === 1) {
      console.log("Today is " + day);
    }
  });
  return "Not early week today";
};

// -----------------//

// b8

let currentDate: Date = new Date();
const calculateLastDayInMouth = (currentDate: Date): number => {
  let lastDay: Date = new Date(currentDate);
  lastDay.setDate(1);
  lastDay.setMonth(lastDay.getMonth() + 1);
  lastDay.setDate(lastDay.getDate() - 1);
  return lastDay.getDate();
};
// console.log(calculateLastDayInMouth(currentDate));

// -----------------//

// b9

const countDownNewYear = (): void => {
  let currentDate: Date = new Date();
  let startYear: Date = new Date(currentDate.getFullYear() + 1, 0, 1);

  let countDown: number = startYear.getTime() - currentDate.getTime();
  let convertToS: number = Math.floor(countDown / 1000);

  console.log(convertToS);

  setTimeout(() => {
    if (convertToS > 0) {
      countDownNewYear();
    }
  }, 1000);
};
// countDownNewYear()

// -----------------//

// b10

let user = {
  name: "Nguyen Van A",
  age: 26,
  isStatus: true,
  a: {
    a: [1, 2, 3],
    b: {
      c: 2,
    },
  },
  c: ["a", "v", "d"],
};
const resetObject = (obj: any): void => {
  for (let key in obj) {
    // console.log("check for: ",obj);
    if (Array.isArray(obj[key])) {
      if (obj[key].every((e: string) => typeof e === "string")) {
        obj[key] = Array(obj[key].length).fill("");
      }
      if (obj[key].every((e: number) => typeof e === "number")) {
        obj[key] = Array(obj[key].length).fill(0);
      }
    //   console.log("check array:", obj[key]);
    } else if (typeof obj[key] === "object") {
    //   console.log("check obj: ", obj[key]);
      resetObject(obj[key]);
    } else if (typeof obj[key] === "number") {
      obj[key] = 0;
    } else if (typeof obj[key] === "boolean") {
      obj[key] = false;
    } else {
      obj[key] = "";
    }
  }
}

// console.log("Init data:", user);
// resetObject(user);
// console.log("Reset data:", user);

// -----------------//

// b11
let currentTime = new Date();
let s: number = 1100
const plusSec = (currentTime:string, s: number) => {
    let currentDate: Date = new Date(currentTime)
    // console.log(currentDate);
    if (s > 1000) {
        return `X must less than 1000`
    }
    currentDate.setSeconds(currentDate.getSeconds() + s)
    return currentDate.toTimeString().split(" ")[0]
}

console.log(plusSec(currentTime.toISOString(), s));
