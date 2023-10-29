'use strict';

//Seleting Elements
const score_Element_0 = document.querySelector('#score--0');
const score_Element_1 = document.querySelector('#score--1');
const currentScore_0 = document.getElementById('current--0');
const currentScore_1 = document.getElementById('current--1');
const dice_Element = document.querySelector('.dice');
const new_Btn_element = document.querySelector('.btn--new');
const roll_Btn_element = document.querySelector('.btn--roll');
const hold_Btn_element = document.querySelector('.btn--hold');
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

let currentScore = 0;
let activePlayer = 0;
let currentPoints = 0;

//On-start config
score_Element_0.textContent = 0;
score_Element_1.textContent = 0;
dice_Element.classList.add('hidden');

//Roling dice function
roll_Btn_element.addEventListener('click', function () {
  // 1. Generating a random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice on screen
  dice_Element.classList.remove('hidden');
  dice_Element.src = `dice-${dice}.png`;

  // 3. check for dice 1
  if (dice !== 1) {
    //adding dice value to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player_0.classList.toggle('player--active');
    player_1.classList.toggle('player--active');
  }
});

hold_Btn_element.addEventListener('click', function () {
  // Add current score to player score
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  currentPoints = currentScore;
  //Check if its above 100 score

  //Switch to next player
});
