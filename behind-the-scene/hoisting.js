'use strict';

// console.log(name);
// console.log(job);
// console.log(year);

//declaring variables
// var name = 'Jonas';
// let job = `Teacher`;
// const year = 1991;

console.log(addDec(2, 3));
console.log(addEpr(2, 3));
console.log(addArrow(2, 3));

// Function Declaration

function addDec(a, b) {
  return a + b;
}

const addEpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
