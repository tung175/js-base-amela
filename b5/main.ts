// -----------------//
// -----Date----//
// -----------------//

// b1
let separator: string = "/";
const getCurrentDate = (separator: string): string => {
  const objectDate = new Date();
  let day = objectDate.getDate();
  // console.log(day);
  let month = objectDate.getMonth();
  // console.log(month + 1);
  let year = objectDate.getFullYear();
  // console.log(year);
  let formattedDay = day < 10 ? "0" + day : day.toString();
  let formattedMonth = month < 10 ? "0" + month : month.toString();

  return `${formattedDay}${separator}${formattedMonth}${separator}${year}`;

  // console.log(objectDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }));
  // return objectDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
};
// console.log(getCurrentDate(separator));

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

  let today: number = new Date().getDay();

  if (today === 0 || today === 6) {
    return "Today is weekend";
  }
  return `Today is ${days[today]}`;
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

const minutesToHoursAndMinutes = (
  minutes: number
): { hours: number; minutes: number } => ({
  hours: Math.floor(minutes / 60),
  minutes: minutes % 60,
});

const totalMinutes = 145;
const { hours, minutes } = minutesToHoursAndMinutes(totalMinutes);
console.log(`Total: ${hours} hours and ${minutes} minutes.`);

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
    return --age;
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
  let today: number = new Date().getDay();
  if (today === 1) {
    return "Today is early weekend";
  }
  return `Today is ${days[today]}`;
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
const countdownToNewYear = () => {
  const currentDate: Date = new Date();
  const newYear: Date = new Date(currentDate.getFullYear() + 1, 0, 1);

  let daysRemaining: number = Math.ceil(
    (newYear.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  let hoursRemaining: number = 24 - currentDate.getHours() - 1;
  let minutesRemaining: number = 59 - currentDate.getMinutes();
  let secondsRemaining: number = 59 - currentDate.getSeconds();

  console.log(
    "Time until New Year:",
    `${daysRemaining.toString().padStart(2, "0")} day ${hoursRemaining
      .toString()
      .padStart(2, "0")}:${minutesRemaining
      .toString()
      .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`
  );
  setTimeout(() => {
    countdownToNewYear();
  }, 1000);
};
// countdownToNewYear()
// -----------------//

// b10

// const resetData = (user: any):any => {
//   const resetObject = (obj: any): any => {
//     for (let key in obj) {
//       // console.log("check for: ", obj);
//       if (Array.isArray(obj[key])) {
//         if (obj[key].every((e: string) => typeof e === "string")) {
//           obj[key] = Array(obj[key].length).fill("");
//         } else if (obj[key].every((e: number) => typeof e === "number")) {
//           obj[key] = Array(obj[key].length).fill(0);
//         }
//         // console.log("check array:", obj[key]);
//       } else if (typeof obj[key] === "object" && obj[key] !== null) {
//         // console.log("check obj: ", obj[key]);
//         obj[key] = resetObject(obj[key]);
//       } else if (typeof obj[key] === "number") {
//         obj[key] = 0;
//       } else if (typeof obj[key] === "boolean") {
//         obj[key] = false;
//       } else {
//         obj[key] = "";
//       }
//     }
//     // console.log("check obj", obj);
//     return obj
//   };
//   return resetData(user);
// }

interface IUser {
  name: string;
  age: number;
  isStatus: boolean;
  a: {
    a: number[];
    b: {
      c: number;
    };
  };
  c: string[];
}
const resetData = (user: IUser): IUser => {
  const resetObject = (obj: any): any => {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key] = Array(obj[key].length).fill(
          typeof obj[key][0] === "number" ? 0 : ""
        );
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        obj[key] = resetObject(obj[key]);
      } else if (typeof obj[key] === "number") {
        obj[key] = 0;
      } else if (typeof obj[key] === "boolean") {
        obj[key] = false;
      } else {
        obj[key] = "";
      }
    }
    return obj;
  };
  return resetObject(user);
};
let user: IUser = {
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
// console.log(resetData(user));

// -----------------//

// b11
let currentTime = new Date();
let s: number = 1100;
const plusSec = (currentTime: string, s: number) => {
  let currentDate: Date = new Date(currentTime);
  // console.log(currentDate);
  if (s > 1000) {
    return `X must less than 1000`;
  }
  currentDate.setSeconds(currentDate.getSeconds() + s);
  return currentDate.toTimeString().split(" ")[0];
};

// console.log(plusSec(currentTime.toISOString(), s));
