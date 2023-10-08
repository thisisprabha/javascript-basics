`USE STRICT`;

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Numebr!';
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 0;
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// refractor Code DRY principle
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (gamescore) {
  document.querySelector('.score').textContent = gamescore;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const bodyColor = function (bgcolor) {
  document.querySelector('body').style.backgroundColor = bgcolor;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};
const displayHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highScore;
};
//function starts
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, typeof guessValue);
  if (!guessValue) {
    displayMessage('🔴 No Numebr!');
  } else if (secreteNumber === guessValue) {
    displayMessage('🎉 Correct Numebr!');
    bodyColor('#91BE62');
    displayNumber(secreteNumber);
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    //Dry Principle Code Refaractor
  } else if (guessValue !== secreteNumber) {
    if (score > 1) {
      displayMessage(guessValue > secreteNumber ? '⬆️Too High' : '⬆️Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('😕 You lost the game!');
      displayScore(0);
    }
  }
  // If too high
  // } else if (guessValue > secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬆️Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😕 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     console.log((document.querySelector('.score').textContent = 0));
  //   }

  // If too high

  // } else if (guessValue < secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬇️ Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😕 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     console.log((document.querySelector('.score').textContent = 0));
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  bodyColor('#222');
  displayNumber('?');
  displayGuess('');
  displayScore(score);
});
