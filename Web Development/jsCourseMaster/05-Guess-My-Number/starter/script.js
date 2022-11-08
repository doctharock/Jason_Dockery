'use strict';

/* console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};
const styleNumber = function (numberWidth) {
  document.querySelector(`.number`).style.width = numberWidth;
};
const styleBackground = function (background) {
  document.querySelector(`body`).style.backgroundColor = background;
};
const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};
// Check button
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔ No number!`);

    // When player wins.
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    displayNumber(secretNumber);
    styleBackground(`#60b347`);

    styleNumber(`30rem`);

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`☹️ You lost! Game Over.`);
      displayScore(0);
    }
  }
});

// Click Action button
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start Guessing ...`);
  displayScore(score);
  displayNumber(`?`);
  document.querySelector(`.guess`).value = ``;
  styleBackground(`#222`);
  styleNumber(`15rem`);
});
