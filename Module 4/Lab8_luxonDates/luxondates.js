//1. Days between 1 May 1987 & today

 const { DateTime } = require('luxon');

 const birthday = DateTime.fromISO('1987-05-01');
 const today = DateTime.now();

 const daysbetween = today.diff(birthday, 'days').days;
 
 console.log(Math.floor(daysbetween));

 //2. Display years, months and days

 const diff = today.diff(birthday, ['years','months','days']).toObject();
 const difference = `${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, ${Math.floor(diff.days)} days.`;

console.log(difference);

//3. Closest date to today

function moreRecent (date1, date2) {
  const today = DateTime.local();

  const diff1 = Math.abs(today.diff(date1).milliseconds); //breakdown in to ms
  const diff2 = Math.abs(today.diff(date2).milliseconds);

  if (diff1 < diff2) {
    return "Date 1 is closer to today.";
  } else if (diff2 < diff1) {
    return "Date 2 is closer to today.";
  } else {
    return "Both dates are equally close to today.";
  }
}

const date1 = DateTime.fromISO("2025-05-26");
const date2 = DateTime.fromISO("2024-05-26");

console.log(moreRecent(date1, date2));

//4. is date 1 before or after date 2

function before (diff1, diff2) {
//   const today = DateTime.local();

  if (diff1 < diff2) {
    return "Date 1 is earlier than date 2.";
  } else if (diff2 < diff1) {
    return "Date 1 is later than date 2.";
  } else {
    return "Both dates are equal.";
  }
}

const diff1 = DateTime.fromISO("2025-05-26");
const diff2 = DateTime.fromISO("2024-05-26");

console.log(before (diff1, diff2));

//5. Current time in London

const londonTime = DateTime.now().setZone('Europe/London');

console.log("The time in London is" + londonTime.toString());