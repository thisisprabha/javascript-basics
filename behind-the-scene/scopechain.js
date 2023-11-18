'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age} years old, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1986 && birthYear <= 1996) {
      var str = true;
      // Reassigning outer scope's variable.
      output = `New Output`;

      const millinial = `oh! you are a millinial,  ${birthYear}`;
      console.log(millinial);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(millinial);
    console.log(str);
    // console.log(add(2, 3)); //function scoped so it will not work
    console.log(output);
  }
  printAge();

  return age;
}
const firstName = `Jonas`;
calcAge(1991);

// Both are outside score. so i wont work at all.

// printAge();
// console.log(age);
