'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// WITHOUT optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining - ? for the local object only, for example .xxxx? not .xxxx.xxxx?
// console.log(restaurant.openingHours?.mon?.open);

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   if (open !== `closed`) {
//     console.log(`On ${day}, we open at ${open}.`);
//   } else {
//     console.log(`On ${day}, we are closed.`);
//   }
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// //Arrays
// const users = [
//   {
//     name: `Jonas`,
//     email: `snoop@loop.com`,
//   },
// ];

// console.log(users[0]?.name ?? `User array empty.`);

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Adding default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Via del Sole, 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: `Via del Sole, 21`,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 7 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more

// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);

// //Iterables: arrays, strings, maps, sets. Not Objects
// const str = `Jonas`;

// const letters = [...str, ` `, `S.`];
// console.log(letters);
// console.log(...str);
// console.log();

// //Real world example
// const ingredients = [
//   // prompt(`Let's make pasta! Ingredient 1?`),
//   // prompt(`Let's make pasta! Ingredient 2?`),
//   // prompt(`Let's make pasta! Ingredient 31?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guido` };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Ristorante Roma`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //1. Destructuring
// // Spread, because on the right had side of the =.
// const arrr = [1, 2, ...[3, 4]];

// // REST, because on the left hand side fo the =.
// const [aa, bb, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2. Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const xx = [23, 5, 7];
// add(...xx);

// restaurant.orderPizza(`mushrooms`, `onions`, `olives`, `ham`);

// Logical Operators can use any data type, return any data type, and short-circuiting

// console.log(`------OR------`);
// console.log(3 || `Jason`);
// console.log(`` || `Jason`);
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || `` || `Hello` || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`------AND------`);
// console.log(0 && `Jonas`);
// console.log(7 && `Jonas`);
// console.log(`Hey` && 23 && null && `Jonas`);

// // Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Nullish: null and undefined (does not include 0 or ``)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: `Capri`,
//   numGuests: 0,
// };

// const rest2 = {
//   name: `La Piazza`,
//   owner: `Giovanni Rossi`,
// };

// //  OR assignment operator

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // above the same as below.
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner &&= `<ANONYMOUS`;
// rest1.owner &&= `<ANONYMOUS`;

// console.log(rest1);
// console.log(rest2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open ${properties.length} days. `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// //Property Values

// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}.`);
// }

// const ordersSet = new Set([
//   `Pasta`,
//   `Pizza`,
//   `Pizza`,
//   `Risotto`,
//   `Pasta`,
//   `Pizza`,
// ]);

// console.log(new Set(`Jason`));

// console.log(ordersSet.size);
// console.log(ordersSet.has(`Pizza`));
// console.log(ordersSet.has(`Bread`));
// ordersSet.add(`Garlic Bread`);
// ordersSet.delete(`Risotto`);
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example

// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size
// );

//Maps
// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// rest.set(2, `Lisbon, Portugal`);

// rest
//   .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open!`)
//   .set(false, `We are closed.`);

// console.log(rest.get(`name`));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// console.log(rest.has(`categories`));
// rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, `Test`);
// rest.set(document.querySelector(`h1`), `Heading`);
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

const question = new Map([
  [`question`, `What is the best programming language in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `Correct 🎉`],
  [false, `Try again!`],
]);
console.log(question);

// Convert object to map

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt(`Your answer`));
console.log(answer);

console.log(question.get(question.get(`correct`) === answer));

// Convert map to array

console.log([...question]);
