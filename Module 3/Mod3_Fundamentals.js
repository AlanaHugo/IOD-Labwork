// Q1. 

console.log(" " + 1 + 0); //string concatenation of 1 & 0, result = 10 
console.log(true + false); //boolean becomes an integer with use of "+", result = 1+0 
console.log(!true); //not operator changes !True to False
console.log(6 / "3"); //use of "/" converts string to number, result = 2
console.log("2" * "3"); //use of "*" converts string to number, result = 6
    // been trimmed when "-" operator converts to a number, result -2

//Q2 

let three = 3 //removed "" to change string to numbers.
let four = 4
let thirty = 30

// what is the value of the following expressions?
let addition = three + four // concatenating string. Result = 34
let multiplication = three * four // 12
let division = three / four // 0.75
let subtraction = three - four // -1
let lessThan1 = three < four //true, unicode value of 3 is less than 4
let lessThan2 = thirty < four //true, unicode value of 3 is less than 4

// changing three, four and thirty to numbers y removing "" will give the correct result.

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

//Q3.
if (0) console.log('#1 zero is true') // will not print - 0 is treated as empty boolean string
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true') //will not print - null is treated as empty string
if (-1) console.log('negative is true') 
if (1) console.log('positive is true')

// Q4.

let a = 2, b = 3;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than or equal to 10'}`;

console.log(result);

let result = `${a} + ${b} is `
if (a + b < 10) {
result += 'less than 10'; //+= is the same as 
} else {
 result += 'greater than 10';
}

// Q5. 

// let name = "Alana" //a expression syntax
// function getGreeting(name) {
// return 'Hello ' + name + '!';
//  }

// console.log(getGreeting(name));
 
let firstname = "Hugo" //b arrow funtion
const getGreeting1 = (firstname) => 'Hello ' + firstname + '!';

console.log(getGreeting1(firstname));

// Q6. 
const westley = {
name: 'Westley',
numFingers: 5
 }
const rugen = {
name: 'Count Rugen',
numFingers: 6
}
const inigo = {
firstName: 'Inigo',
lastName: 'Montoya', //added lastname "Montoya" to inigo, added to greeting function.
greeting(person) {
let greeting = `Hello ${person.name}, 
my name is ${this.firstName} ${this.lastName}. `; 

console.log(greeting + this.getCatchPhrase(person));
},

getCatchPhrase: (person) => person.numFingers === 6 //c) arrow function with conditional operator
? "You killed my father. Prepare to die." : "Nice to meet you."


getCatchPhrase(person) {     //b) argument for 6 fingers
if (person.numFingers === 6) {
return "You killed my father. Prepare to die"
} else {
return 'Nice to meet you.';
}    
}
}

inigo.greeting(westley)
inigo.greeting(rugen)

//7. 

const basketballGame = {
score: 0,
foul: 0, //c) new property for fouls

freeThrow() {
this.score++;
return this;  // a) add return this to return the objects/enable chaining
},
basket() {
this.score += 2;
return this;
},

foulTrack() {
    this.fouls++; //c) increment fouls by x1
    return this;
},

threePointer() {
this.score += 3;
return this;
},

halfTime() {
console.log('Halftime score is '+this.score);
return this;
},

fullTime() { //b) add fullTime score count
console.log('Fulltime score is '+this.score);
return this;
}

}
//d) chaining combinations
const allstats = basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime().foulTrack();

const scoreonly = basketballGame.basket().freeThrow().freeThrow().basket().threePointer().threePointer();

const fouls = basketballGame.foulTrack();

//8.
function printproperties(city) { //a) funtion to print properties 
for (let key in city) {
//     console.log(`${key}: ${city[key]}`);
//   }
// }

// const sydney = {
// name: 'Sydney',
// population: 5_121_000,
// state: 'NSW',
// founded: '26 January 1788',
// timezone: 'Australia/Sydney'
// };

// const melbourne = { // b) add another city/new object  
// name: 'Melbourne',
// population: 5_451_120,
// state: 'VIC',
// founded: '30 August 1835',
// timezone: 'Australia/Sydney'
// };

// printproperties(sydney); //test function printproperties
// printproperties(melbourne);

//9

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let moreSports = teamSports //a) New object = teamSports
let moreSports = [...teamSports] //e) copy teamsports & cat1 and update values with spread operator
moreSports.push('Rugby');
moreSports.unshift('Badminton');
let cat2 = { ...cat1}
let dog2 = dog1; //b)new dog2 variable and value
dog2 = "Spot";
// let cat2 = cat1; // c) new cat var with new name value
cat2.name = 'Bonnie';
console.log(teamSports); //updated - they point to the same object 
console.log(moreSports);
console.log(dog1); //only the string changed 
console.log(dog2);
console.log(cat2);
console.log(cat1); //updated - they point to the same object



//10. 

class PersonClass {
// function Person(name, age)       d)rewrite using class 
constructor (name,age) {
this.name = name;
this.age = age;
this.human = true;
}
canDrive() {
return this.age >=17;   //e)can drive function
}
}

// const student1 = new Person('John', 57) // a) new object
// const student2 = new Person('Jane', 74) // b) second new object
const student3 = new PersonClass('Elenor', 14) // e)

// console.log(student1); // c) 
// console.log(student2); // c)
console.log(student3);
console.log('can drive: ' + student3.canDrive()); //f)