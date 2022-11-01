// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// let firstName = "Jason",
//   lastName = "Dockery";
// console.log(firstName + " " + lastName);

// const markMass1 = 78;
// const markHeight1 = 1.69;
// const markBMI1 = markMass1 / markHeight1 ** 2;
// const johnMass1 = 92;
// const johnHeight1 = 1.95;
// const johnBMI1 = johnMass1 / johnHeight1 ** 2;
// const markHigherBMI1 = markBMI1 > johnBMI1;

// console.log(
//   "Mark's BMI is " +
//     markBMI1 +
//     ". John's BMI is " +
//     johnBMI1 +
//     ". Is Mark's BMI higher than John's? " +
//     markHigherBMI1 +
//     "."
// );

// const markMass2 = 95;
// const markHeight2 = 1.88;
// const markBMI2 = markMass2 / markHeight2 ** 2;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;
// const johnBMI2 = johnMass2 / johnHeight2 ** 2;
// const markHigherBMI2 = markBMI2 > johnBMI2;
// console.log(
//   "Mark's BMI is " +
//     markBMI2 +
//     ". John's BMI is " +
//     johnBMI2 +
//     ". Is Mark's BMI higher than John's? " +
//     markHigherBMI2 +
//     "."
// );

// if (markBMI1 > johnBMI1) {
//   console.log(
//     `Mark's BMI of ${markBMI1} is higher than John's BMI of ${johnBMI1}`
//   );
// } else {
//   console.log(
//     `John's BMI of ${johnBMI1} is higher than Mark's BMI of ${markBMI1}`
//   );
// }

// if (markBMI2 > johnBMI2) {
//   console.log(
//     `Mark's BMI of ${markBMI2} is higher than John's BMI of ${johnBMI2}`
//   );
// } else {
//   console.log(
//     `John's BMI of ${johnBMI2} is higher than Mark's BMI of ${markBMI2}`
//   );
// }

// const firstName = "Jason";
// const job = "Senior Analyst";
// const birthYear = "1979";
// let year = 2022;
// const jason =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jason);

// const jasonNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense || hasGoodVision);
// console.log(hasDriversLicense && hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log(`Sarah is able to drive.`);
// // } else {
// //   console.log(`Someone else should drive.`);
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

// const teamOneName = "Dragons";
// const teamTwoName = "Koalas";

// const teamOneScore = (96 + 108 + 89) / 3;
// const teamTwoScore = (96 + 108 + 89) / 3; // original scores 88 + 91 + 110

// if (teamOneScore > teamTwoScore) {
//   console.log(
//     `The ${teamOneName} wins the game with an average score of ${teamOneScore}!`
//   );
// } else if (teamOneScore === teamTwoScore) {
//   console.log(`It's a tie with an average score of ${teamOneScore}!`);
// } else if (teamTwoScore > teamOneScore) {
//   console.log(
//     `The ${teamTwoName} wins the game with an average score of ${teamTwoScore}!`
//   );
// }

// Bonus 1

// const teamOneName = "Dragons";
// const teamTwoName = "Koalas";

// const teamOneScore = (97 + 112 + 101) / 3;
// const teamTwoScore = (109 + 95 + 123) / 3; // original scores 88 + 91 + 110

// if (teamOneScore > teamTwoScore && teamOneScore >= 100) {
//   console.log(
//     `The ${teamOneName} wins the game with an average score of ${teamOneScore}!`
//   );
// } else if (teamOneScore === teamTwoScore) {
//   console.log(`It's a tie with an average score of ${teamOneScore}!`);
// } else if (teamTwoScore > teamOneScore && teamTwoScore >= 100) {
//   console.log(
//     `The ${teamTwoName} wins the game with an average score of ${teamTwoScore}!`
//   );
// }

// Bonus 2

// const teamOneName = "Dragons";
// const teamTwoName = "Koalas";

// const teamOneScore = (97 + 112 + 85) / 3;

// const teamTwoScore = (109 + 95 + 86) / 3; // original scores 88 + 91 + 110
// console.log(teamOneScore, teamTwoScore);

// if (teamOneScore > teamTwoScore && teamOneScore >= 100) {
//   console.log(
//     `The ${teamOneName} wins the game with an average score of ${teamOneScore}!`
//   );
// } else if (
//   teamOneScore === teamTwoScore &&
//   teamOneScore >= 100 &&
//   teamTwoScore
// ) {
//   console.log(`It's a tie with an average score of ${teamOneScore}!`);
// } else if (teamTwoScore > teamOneScore && teamTwoScore >= 100) {
//   console.log(
//     `The ${teamTwoName} wins the game with an average score of ${teamTwoScore}!`
//   );
// } else {
//   console.log(`Nobody wins. Losers!`);
// }

// const day = `sunday`;

// switch (day) {
//   case `monday`:
//     console.log(`Plan course structure.`);
//     console.log(`Go to coding meetup.`);
//     break;
//   case `tuesday`:
//     console.log(`Prepare theory videos.`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`Write code examples.`);
//     break;
//   case `friday`:
//     console.log(`Record videos`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`Enjoy the weekend!`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
// }

// if (day === `monday`) {
//   console.log(`Plan course Structure.`, `Go to coding meetup.`);
// } else if (day === `tuesday`) {
//   console.log(`Prepare theory videos.`);
// } else if (day === `wednesday` || day === `thursday`) {
//   console.log(`Write Code Examples.`);
// } else if (day === `friday`) {
//   console.log(`Record videos`);
// } else if (day === `saturday` || day === `sunday`) {
//   console.log(`Enjoy the weekend!`);
// } else {
//   console.log(`Not a valid day!`);
// }
