'use strict';

//Seleting Elements
const score_Element_0 = document.querySelector('#score--0');
const score_Element_1 = document.querySelector('#score--1');
const dice_Element = document.querySelector('.dice');
const new_Btn_element = document.querySelector('.btn--new');
const roll_Btn_element = document.querySelector('.btn--roll');
const hold_Btn_element = document.querySelector('.btn--hold');

//On-start config
score_Element_0.textContent = 0;
score_Element_1.textContent = 0;
dice_Element.classList.add('hidden');

//Roling dice function
roll_Btn_element.addEventListener('click', function () {
  // 1. Generating a random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display dice on screen
  dice_Element.classList.remove('hidden');
  // 3. Switch to player 2 if dice is 1
});
