'use strict';

const actual_String = 'Hello USA & India people. We love you!';
const lower_Case = actual_String.toLowerCase();
const UPPER_CASE = actual_String.toUpperCase();
console.log(lower_Case);
console.log(UPPER_CASE);
console.log(actual_String[0]);
console.log('Hello'[1]);
console.log(lower_Case.indexOf('H'));
console.log(lower_Case.indexOf('h'));
console.log(lower_Case.lastIndexOf('e'));
console.log(lower_Case.indexOf('usa'));
console.log(lower_Case.includes('india'));
console.log(lower_Case.slice(6, 9));
console.log(lower_Case.slice(12, 17));

// Fix Capitalisation
const person_Name = function (name) {
  console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
};
person_Name(`prABHA`);
person_Name(`Jhonny Bravo`);

//split method
console.log(`all +is +well`.split(`+`));
const [firstName, lastName] = `William Buthher`.split(' ');
console.log(`Mr. ` + firstName, lastName.toUpperCase());

//changing capitalize names
function capitalizeName(name) {
  let names = name.split(` `);
  let finalName = [];
  for (let n of names) {
    finalName.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    // finalName.join();
  }
  console.log(finalName.join(` `));
}
capitalizeName(`mr. prabha karan`);
capitalizeName(`jhon lenon lord`);
