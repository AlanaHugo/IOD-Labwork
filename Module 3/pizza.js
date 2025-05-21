// function preparePizza() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Started preparing pizza ...");
//       resolve(); // go to the next step
//     }, 500);
//   });
// }


// const makeBase = () => new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Made the base");
//     resolve();
//   }, 500);
// });

// const addSauceAndCheese = () => new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Added the sauce and cheese");
//     resolve();
//   }, 500);
// });

// const addToppings = () => new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Added the pizza toppings");
//     resolve();
//   }, 500);
// });

// const cookPizza = () => new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Cooked the pizza");
//     resolve();
//   }, 500);
// });

// const pizzaReady = () => new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Pizza is ready");
//     resolve();
//   }, 500);
// });

// preparePizza()
//   .then(makeBase)
//   .then(addSauceAndCheese)
//   .then(addToppings)
//   .then(cookPizza)
//   .then(pizzaReady);


function delayLog(message) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
      resolve(); // Promise is resolved after logging
    }, 500); // 0.5 second delay
  });
}

async function makePizza() {
  await delayLog("Started preparing pizza ...");
  await delayLog("Made the base");
  await delayLog("Added the sauce and cheese");
  await delayLog("Added the pizza toppings");
  await delayLog("Cooked the pizza");
  await delayLog("Pizza is ready");
}

makePizza();
