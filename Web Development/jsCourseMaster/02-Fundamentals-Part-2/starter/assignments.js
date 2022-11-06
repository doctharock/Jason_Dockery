`use strict`;

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
// }

// const unitedStates = describeCountry(
//   `The United States of America`,
//   350,
//   `Washington, DC`
// );
// console.log(unitedStates);

// const mexico = describeCountry(`Mexico`, 150, `Mexico City`);
// console.log(mexico);

// const finland = describeCountry(`Finland`, 6, `Helsinki`);
// console.log(finland);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// // const unitedStates1 = percentageOfWorld1(`The United States of America`, 350);
// console.log(unitedStates1);

// const china1 = percentageOfWorld1(`China`, 2000);
// console.log(china1);

// const finland1 = percentageOfWorld1(`Finland`, 6);
// console.log(finland1);

// const calcPopPercentage = function percentageOfWorld2(country, population) {
//   return `${country} has ${
//     (population / 7900) * 100
//   }% of the world population.`;
// };

// const unitedStates = calcPopPercentage(`The United States of America`, 350);
// console.log(unitedStates);

// const china = calcPopPercentage(`China`, 2000);
// console.log(china);

// const finland = calcPopPercentage(`Finland`, 6);
// console.log(finland);

// const percentageOfWorld3 = (country, population) => {
//   const averagePop3 = (population / 7900) * 100;
//   return `${country} has ${averagePop3}% of the world population.`;
// };

// console.log(percentageOfWorld3(`The United States of America`, 350));
// console.log(percentageOfWorld3(`China`, 2000));
// console.log(percentageOfWorld3(`Finland`, 6));

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//   console.log(description);
// };

// describePopulation(`The United States of America`, 350);
// describePopulation(`Portugal`, 10);
// describePopulation(`Finland`, 6);

// const calcAverage = (score) => {
//   const averageScore = (scoreOne + scoreTwo + scoreThree) / 3;
//   return;
// };

// function checkWinner(scoreOne, scoreTwo, scoreThree) {
//   const avgDolphins = calcAverage(score);
//   const avgKoalas = (65, 54, 49);

//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log`The Dolphins win ${avgDolphins}-${avgKoalas}!`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log`The Koalas win ${avgKoalas}-${avgDolphins}!`;
//   } else {
//     console.log(`Bunch of losers!`);
//   }
// }

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// //Test set 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(
//       `The Dolphins win with a score of (${avgDolphins} - ${avgKoalas})`
//     );
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(
//       `The Koalas win with a score of (${avgKoalas} - ${avgDolphins})`
//     );
//   } else {
//     console.log(`Everyone is a loser!`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [10, 1441, 332, 83];
// console.log(populations === 4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// console.log(
//   `The bill was $${bills[0]}, the tip was $${tip}. The final bill was $${
//     bills[0] + tip
//   }.`
// );

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// const myCountry = {
//   country: `The United States of America`,
//   capital: `Washington, DC`,
//   language: `English`,
//   population: 350,
//   neighbors: [`Canada`, `Mexico`],
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`
// );

// const john = {
//   firstName: `John`,
//   lastName: `Smith`,
//   weight: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };

// const mark = {
//   firstName: `Mark`,
//   lastName: `Miller`,
//   weight: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//     console.log(mark.calcBMI);
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(john.BMI, mark.BMI);

// if (john.BMI > mark.BMI) {
//   console.log(
//     `${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI})!`
//   );
// } else if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s (${john.BMI})!`
//   );
// } else {
//   console.log(`Their BMI is the same!`);
// }

// for (let voter = 1; voter <= 30; voter++) {
//   console.log(`Voter number ${voter} is currently voting 🗳️.`);
// }
