'use strict';

console.log(this);

//regular function
const calcAge = function (birthyear) {
  console.log(2023 - birthyear);
  console.log(this);
};

// arrow function
const calcAgeArrow = (birthyear) => {
  console.log(2023 - birthyear);
  console.log(this);
};

//method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2023 - this.year);
  },
};

const devi = {
  year: 1995,
};

devi.calcAge = jonas.calcAge; //method borrwoing

const f = jonas.calcAge;

calcAge(1991);
calcAgeArrow(1991);
jonas.calcAge();
devi.calcAge();
f();
