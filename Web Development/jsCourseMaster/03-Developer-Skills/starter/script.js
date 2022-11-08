// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // Breaking up into subproblmes
// // How to ignore errors?
// // Find the max value in temp array
// // Fin the min value in the temp array
// // Subtract min from max (amplitude) and return it.

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// calcTempAmplitude([3, 7, 4]);
// max = 3 (first element of the array). Logic asks if 3 is greater than the first value in the array. No, because 3 is not greater than 3. The it asks is 7 greater than 3. THen yes, it is, and now max = 7. Next asks if 4 is greater than 7. No, so nothing happens. Logic at the end is that max is 7.

// const positiveTemperatures = [9, 13, 17, 15, 14, 9, 5];
// const negativeTemperatures = [-2, -6, -1, `error`];
// // Breaking up into sub-problems
// // How to ignore errors?
// // Find the max value in temp array
// // Fin the min value in the temp array
// // Subtract min from max (amplitude) and return it.

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(
//   positiveTemperatures,
//   negativeTemperatures
// );
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: `temp`,
//     unit: `celsius`,
//     // value: Number(prompt(`Degrees celsius:`)),
//     value: 10,
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// const positiveTemperatures = [9, 13, 17, 15, 14, 9, 5];
// const negativeTemperatures = [-2, -6, -1, `error`];
// // Breaking up into sub-problems
// // How to ignore errors?
// // Find the max value in temp array
// // Fin the min value in the temp array
// // Subtract min from max (amplitude) and return it.

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug(
//   positiveTemperatures,
//   negativeTemperatures
// );
// console.log(amplitudeBug);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(`... ` + str);
};
printForecast(data1);
