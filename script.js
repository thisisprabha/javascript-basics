`USE STRICT`;

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Numebr!';
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 0;
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

const secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = secreteNumber;
  console.log(guessValue, typeof guessValue);
  if (!guessValue) {
    document.querySelector('.message').textContent = '🔴 No Numebr!';
  } else if (guessValue > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆️Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😕 You lost the game!';
      document.querySelector('.score').textContent = 0;
      console.log((document.querySelector('.score').textContent = 0));
    }
  } else if (guessValue < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😕 You lost the game!';
      document.querySelector('.score').textContent = 0;
      console.log((document.querySelector('.score').textContent = 0));
    }
  } else if (secreteNumber === guessValue) {
    document.querySelector('.message').textContent = `🎉 Correct Numebr!`;
    document.querySelector('body').style.backgroundColor = '#91BE62';
  }
});