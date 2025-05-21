//1.

// function makeCounter() { 
function makeCounter(startFrom, incrementBy) { // c) increment count
let currentCount = startFrom; // b) startFrom argument
return function() {
currentCount += incrementBy;
console.log(currentCount)
return currentCount;
};
}
let counter1 = makeCounter(5, 3); // b) start from 5 and c) increment by 3
counter1(); // 1
counter1(); // 2

// a) Counter 2, IS independant of counter 1
let counter2 = makeCounter(22, 5);
counter2(); // 1
counter2(); // 2
counter2(); // 3 

//2.

// a) order = 4, 3, 2, 1
// 4 has no delay, 3 has a zero delay, 1 delay is higher than 2

function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');
// setTimeout(delayMsg, 2000,'#5: Delayed by 2000ms')

const timeout5 = setTimeout(delayMsg, 2000, '#5: Delayed by 2000ms');
clearTimeout(timeout5); // d) clear timeout


//b)
// const delay = (ms) => new Promise(res => setTimeout(res,ms))
// async function delayMSG() {
    
//     await delay (100);
//     console.log('#1: Delayed by 100ms');

//     await delay (20);
//     console.log('#2: Delayed by 20ms');

//     await delay (0);
//     console.log('#3: Delayed by 0ms');

//     console.log('#4: Not Delayed at all'); 

// }

// delayMSG();

//3.

// a) + b) + c)
function debounce(func, ms) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this,args);
    }, ms);
  };
}


function printMe(msg) {
console.log(`Debounced ${msg}`);
}
printMe = debounce(printMe, 1000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// 1000ms of no calls
setTimeout(() => printMe('#1'), 100);
setTimeout(() => printMe('#2'), 200);
setTimeout(() => printMe('#3'), 300);

//4.

// a)

let a = 0;
let b = 1;

const intervalID = setInterval (() => {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
}, 1000);

setTimeout(() => { // c) intervalID stop
  clearInterval(intervalID);
  console.log("Interval stopped.");
}, 10000); // Stop after 10 seconds

function printFibonacciTimeouts() {
  let a = 0;
  let b = 1;
  let count = 0;
  const maxCount = 10;  // c) max 10 numbers printed

  function printNext() {
    if (count >= maxCount) {
      console.log("Timeouts finished.");
      return;
    }

    console.log(a);
    const next = a + b;
    a = b;
    b = next;
    count++;

    setTimeout(printNext, 1000); // Schedule the next call
  }

  printNext(); // Start the sequence
}

printFibonacciTimeouts();

5. 
let car = {
make: "Porsche",
model: '911',
year: 1964,

description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); // c) this returns the original which is accurate at the time it runs

// setTimeout(car.description, 200); //fails - passing the function detached from the object

// a)
//setTimeout(() => car.description(), 200); 

// d) bind method

setTimeout(car.description.bind(car), 200);


let car2 = car;
car2.year = 2010; // b) + c) delayed description references updated car year 
// because that is what is accurate at the time that it runs.

// e)
let car3 = car;
car3.make = "Audi";

console.log(car2);
console.log(car3);

6. 
a)
Function.prototype.delay = function(ms) {
  const originalFunc = this;
  return function(...args) {
    setTimeout(() => {
      originalFunc.apply(this, args); // b) use apply 
    }, ms);
  };
};

function multiply(a, b, c, d) { //c) add 2 more parameters
console.log( a * b * c * d );
}
multiply.delay(500)(5, 2, 2, 2); // prints 25 after 500 milliseconds

//7. 

class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
const myClock = new DigitalClock('my clock:')
myClock.start()

// a) new class inherited from DigitalClock using extend
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const preciseClock = new PrecisionClock("precise clock:", 2000); // ticks every 2s
preciseClock.start();

// Stop after 10 seconds
setTimeout(() => preciseClock.stop(), 10000);
setTimeout(() => myClock.stop(),10000);

// b) Alarm clock
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    let date = new Date();
    let [hours, mins] = [date.getHours(), date.getMinutes()];

    // Format current time as hh:mm
    let currentTime = 
      (hours < 10 ? '0' : '') + hours + ':' + 
      (mins < 10 ? '0' : '') + mins;

    if (currentTime === this.wakeupTime) {
      console.log("Wake Up!");
      this.stop(); // stop ticking
    } else {
      super.display(); // use inherited display method
    }
  }
}

const alarm = new AlarmClock("alarm clock:", "07:00");
alarm.start();

//8. 

// b) modify orderItems
// function orderItems(itemName) {
// return `Order placed for: ${itemName}`;
// }
// create a decorated version of the original function

function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

// a) decorator function to validate a single string arg

// function validateStringArg(fn) {
//   return function(arg) {
//     if (typeof arg !== 'string') {
//       throw new Error("Argument must be a string");
//     }
//     return fn(arg);
//   };
// }

// c) extend Decorator to include all args
function validateStringArgs(fn) {
  return function(...args) {
    for (let arg of args) {
      if (typeof arg !== 'string') {
        throw new Error("All arguments must be strings");
      }
    }
    return fn(...args);
  };
}
const validatedOrderItem = validateStringArgs(orderItems);


const validatedOrderItems = validateStringArgs(orderItems);

// d) test - valid
try {
  console.log(validatedOrderItems("Apple Watch", "iPhone", "iPad"));
} catch (err) {
  console.error("Error:", err.message);
}

// d) test - invalid
try {
  console.log(validatedOrderItems("Apple Watch", 123)); // should throw
} catch (err) {
  console.error("Error:", err.message);
}


console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error

//9. 

// a) promise-based random delay
function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1; // 1 to 20 seconds
  const delayMs = delay * 1000;

// b) resolve or reject of even / odd
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay); // even = success
      } else {
        reject(delay); // odd = failure
      }
    }, delayMs);
  });
}

// c) & d) test with .then() and .catch()
randomDelay()
  .then((delay) => {
    console.log(`Success! Delayed for ${delay} seconds.`);
  })
  .catch((delay) => {
    console.log(`Failed! Odd delay of ${delay} seconds.`);
  });

10.

import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}
});
return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

// a) & b) 
async function fetchPromise1() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error(`URL invalid! status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON from response
    console.log("Data received:", data);
  } catch (error) {
    console.error("Failed to fetch:", error.message);
  }
}


fetchPromise1();
