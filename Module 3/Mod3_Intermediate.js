//1. 

function ucFirstLetters(str) {
  return str
    .split(' ') //split the string
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Test cases
console.log(ucFirstLetters("los angeles"));     
console.log(ucFirstLetters("i live in sydney"));     
console.log(ucFirstLetters("a boy named sue")); 
       
//2. 

// function to truncate using if
// function truncate(str,max) {
//   if (str.length > max) {
//     return str.slice(0,max - 3) + "...";
//   } else {
//     return str;
//   }
// }

//b) conditional operator variant
function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

console.log(truncate('This text will be truncated if it is too long', 25))


// This text will be truncat...

//3. 

const animals = ['Tiger', 'Giraffe']

//a) using push to add new values to the end
animals.push ('Elephant', 'Lion' )
//b) using unshift to add new values to the start
animals.unshift('Antelope', 'leopard')
//c)sort alphabetically using sort
animals.sort();
//d) function to replace the middle index
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length /2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Zebra');

// e) Case-insensitive function
function ignoreCase (str, prefix) {
  return str.toLowerCase().startsWith(prefix.toLowerCase());
}

// e) Filter animals that start with "l" or "L"
const startWithL = animals.filter(animal => ignoreCase (animal, "l"));

console.log(startWithL); 
console.log(animals);

//4. 

//a) camel-case function
// function camelCase (cssProp) {
//   return cssProp 
//   .split('-') //split words
//   .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)) 
// .join(''); //arrow function to change the first letter of the second word then join together

// }

// b) for of loop variation
function camelCase(cssProp) {
  let result = "";
  let capitalizeNext = false;

  for (const char of cssProp) {
    if (char === "-") {
      capitalizeNext = true;
    } else {
      result += capitalizeNext ? char.toUpperCase() : char;
      capitalizeNext = false;
    }
  }

  return result;
}


//5.
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working? ===> a) concatenating strings not adding numbers

// b) currencyAddition (float1, float2)...
function currencyAddition(float1, float2) {
  const factor = 100; 
  const int1 = Math.round(float1 * factor); //multiply by factor of 100 to convert to whole integer
  const int2 = Math.round(float2 * factor);
  const result = (int1 + int2) / factor; //add integers and divide by 100 to comvert back to decimal number
  return result;
}
console.log(currencyAddition(0.1, 0.2));

// c) CurrencyOperation with Switch
function currencyOperation(float1, float2, operation) {
  const factor = 100;

  const int1 = Math.round(float1 * factor); // Convert to integers
  const int2 = Math.round(float2 * factor);

  let result;

  switch (operation) { //switch statement for addition and multiplication
    case '+':
      result = (int1 + int2) / factor;
    case '*':
      result = parseFloat((float1 * float2).toFixed(2));
    
    }

  return result;
}

console.log(currencyOperation(0.1, 0.2, '+'));
console.log(currencyOperation(0.5,0.5, '*'));

//6.
function unique (duplicatesArray) {
  return [...new Set(duplicatesArray)]} //a) Set object to remove duplicates

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const flowers = ['daisy', 'rose', 'dhalia', 'rose', 'rose', 'lily']

console.log(unique(colours));
console.log(unique(testScores));
console.log(unique(flowers)); //own array test

//7.

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

//a) find object with ID of '3"
function getBookTitle(bookId) {
  return bookId.id === 3;
}
// a) arrow function to find a book with ID "4"
// const getBookTitle(bookId) = books.find(({ id }) => id === 4)
// console.log(getBookTitle(bookId));

console.log(books.find(getBookTitle));

// b) filter the array 
const getOldBooks = books.filter((book) => book.year <= 1950);
console.log(getOldBooks);

//c) add map function 
const addGenre = books.map(book => ({
  ...book,
  Genre: "Classic"
}));

console.log(addGenre);

//8. 

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) new map for DEF 

const phoneBookDEF = new Map()
phoneBookDEF.set('Daisy', '0411123456') // b) array of new values
phoneBookDEF.set('Evelyn', '0400555666')
phoneBookDEF.set('Fran','0405999888')

phoneBookABC.set('Caroline', '0999999999') // c) update value for key 'Caroline'

console.log(phoneBookABC);
console.log(phoneBookDEF);

// d) print Map using function printPhoneBook(contacts)

function printPhoneBook(contacts) {
contacts.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);

});
}
printPhoneBook(phoneBookDEF);

// e) combine maps with Spread

const allContacts = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(allContacts);

// f) print new Map
printPhoneBook(allContacts);


//9.
let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};


    let total = 0; //start at 0
    for (let key in salaries) { //create the loop for the cumulative total
        total += salaries[key];
    } 

console.log("Total Salaries:",total); //console log "total"

//10.
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// a) hours passed today

function getHours() {
  const now = new Date();
  const today = now.getHours();
  return today;
}

const hoursPassed = getHours();
console.log("Hours passed today:", hoursPassed);

// b) seconds passed today
function getSecondsPassedToday() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return (hours * 3600) + (minutes * 60) + seconds;
}

const secondsPassed = getSecondsPassedToday();
console.log("Seconds passed today:", secondsPassed);

// c) age calculation

function getAge(startDate) {
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();
  let days = today.getDate() - startDate.getDate();

  // Adjust for negative days (borrow from previous month)
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Adjust for negative months (borrow from previous year)
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

const inputDate = new Date('1987-05-01');
const diff = getAge(inputDate);

console.log(`${diff.years} years, ${diff.months} months, and ${diff.days} days.`);

// d) days between 22-01-2020 and 05-07-2022

function getDaysBetween(date1, date2) {
  const oneDayMs = 1000 * 60 * 60 * 24; 

  const diffMs = Math.abs(date2 - date1);

  const diffDays = Math.floor(diffMs / oneDayMs);

  return diffDays;
}

const startDate = new Date('2020-01-22');
const endDate = new Date('2022-07-05');

const daysBetween = getDaysBetween(startDate, endDate);

console.log(`There are ${daysBetween} days between ${startDate.toDateString()} and ${endDate.toDateString()}.`);




