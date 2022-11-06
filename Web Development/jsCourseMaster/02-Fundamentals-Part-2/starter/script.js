// `use strict`;

// function logger() {
//   console.log(`My name is mud.`);
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   return `Juice with ${apples} apples and ${oranges} oranges.`;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

// const appleOrangeJuice = fruitProcessor(3, 3);
// console.log(appleOrangeJuice);

// function calcAgeOne(birthYear) {
//   return 2050 - birthYear;
// }

// const ageOne = calcAgeOne(1979);
// console.log(ageOne);

// const calcAgeTwo = function (birthYear) {
//   return 2040 - birthYear;
// };

// const ageTwo = calcAgeTwo(1979);
// console.log(ageOne, ageTwo);

// const calcAgeThree = (birthYear) => 2037 - birthYear;
// const ageThree = calcAgeThree(1979);
// console.log(ageThree);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 60 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1979, `Jason`));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple slices and ${orangePieces} orange slices.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 60 - age;

//   if (retirement > 0) {
//     return `${firstName} has ${retirement} years until retirement!`;
//   } else {
//     return `${firstName} has already retired 🎊🎉🎊`;
//   }
// };

// console.log(yearsUntilRetirement(1979, `Jason`));
// console.log(yearsUntilRetirement(1986, `Mercedes`));
// console.log(yearsUntilRetirement(1960, `Deese`));

// const friends = [`Michael`, `Stephen`, `Peter`];
// console.log(friends);

// console.log(friends[0]);
// console.log(friends.length);

// friends[2] = `Roscoe`;
// console.log(friends);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2040 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const ageOne = calcAge(years[0]);
// const ageTwo = calcAge(years[1]);
// const ageThree = calcAge(years[years.length - 1]);
// console.log(ageOne, ageTwo, ageThree);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = [`Michael`, `Stephen`, `Peter`];
// friends.push(`Jay`); // add to last
// friends.unshift(`John`); // add to first
// const popped = friends.pop(); // remove last. no argument needed
// const shifted = friends.shift(); // no argument will remove first.
// console.log(friends);
// console.log(popped);
// console.log(shifted);

// console.log(friends.indexOf(`Stephen`));

// console.log(friends.includes(`Bob`));

// const jason = {
//   firstName: `Jason`,
//   lastName: `Dockery`,
//   birthYear: 1979,
//   job: `Badass Mothertrucker`,
//   family: [`Mercedes`, `Zoey`, `Anna`],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`;
//   },
// };

// const driversLicense = jason.hasDriversLicense
//   ? `has a driver's license`
//   : `doesn't have a drivers license`;

// // console.log(jason);

// // console.log(jason.lastName);
// // console.log(jason[`lastName`]);

// // const nameKey = `Name`;
// // console.log(jason[`first` + nameKey]);
// // console.log(jason[`last` + nameKey]);

// // console.log(
// //   `${jason[`first` + nameKey]} has ${
// //     jason.family.length
// //   } friends and his best friend is ${jason.family[1]}.`
// // );
// console.log(jason.calcAge());
// console.log(jason.age);
// console.log(jason.age);
// console.log(jason.age);
// console.log(jason.age);

// console.log(
//   `${jason.firstName} is a ${jason.age} year old ${jason.job}, and ${driversLicense}.`
// );
// console.log(jason.getSummary());

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

const jason = [
  `Jason`,
  `Dockery`,
  2022 - 1979,
  `Programmer Wannabe`,
  [`Frank`, `Daniel`, `Frank Antonio`],
];

for (let i = 0; i < 5; i++) {
  console.log(jason[i]);
}
