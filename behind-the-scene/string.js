'use strict';

const actual_String = 'Hello USA & India people. We love you!';
const lower_Case = actual_String.toLowerCase();
const UPPER_CASE = actual_String.toUpperCase();
// console.log(lower_Case);
// console.log(UPPER_CASE);
// console.log(actual_String[0]);
// console.log('Hello'[1]);
// console.log(lower_Case.indexOf('H'));
// console.log(lower_Case.indexOf('h'));
// console.log(lower_Case.lastIndexOf('e'));
// console.log(lower_Case.indexOf('usa'));
// console.log(lower_Case.includes('india'));
// console.log(lower_Case.slice(6, 9));
// console.log(lower_Case.slice(12, 17));

// Fix Capitalisation

const person_Name = function (name) {
  console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
};

const annoucement = `All passengers come to boarding door 81, I repeat door 81`;

console.log(annoucement.replaceAll(`door`, `Gate`));
console.log(annoucement.replace(/door/g, `gate`)); //relace strings from old to new here...

//split method
console.log(`all +is +well`.split(`+`));
const [firstName, lastName] = `William Buthher`.split(' ');
console.log(`Mr. ` + firstName, lastName.toUpperCase());

//changing capitalize names
function capitalizeName(name) {
  let names = name.split(` `);
  let finalName = [];
  for (let n of names) {
    finalName.push(n[0].toUpperCase() + n.slice(1).toLowerCase()); // Actual way
    // finalName.push(n.replace(n[0], n[0].toUpperCase())); // another way
  }
  console.log(finalName.join(` `));
}
capitalizeName(`mr. prabha karan`);
capitalizeName(`jhon lenon lord`);

const airplane = `Airbus d720`;
console.log(airplane.includes(`Bus`));
console.log(airplane.includes(`Boeing`));
console.log(airplane.startsWith(`Air`));

if (airplane.startsWith(`Air`) && airplane.endsWith(`d720`)) {
  //and means plus
  console.log(`Its airbus plane`);
} else console.log(`you going to die!`);

person_Name(`prABHA`);
person_Name(`Jhonny Bravo`);

//check baggage items if any one carries a gun,
const baggage = function (items) {
  const checkbaggage = items.toLowerCase();
  if (checkbaggage.includes(`gun`) || checkbaggage.includes(`knife`)) {
    console.log(`Get out from the plane`);
  } else console.log(`Welcome aboard!`);
};
baggage(`I have a makeup kit, spray kit, knife and water bottle`);
baggage(`I have bread, pair of T.shirt and pair of pants`);
baggage(`I have pair of trousers with shirt and also i have a gun for my protection`);

//paddaing
console.log(`hello`.padStart(23, `+`).padEnd(46, `+`));

//maskign credit card numbers
const creditCardNumber = function (num) {
  const str = num + ' ';
  const last4Digit = str.slice(-5);
  // console.log(str);
  return last4Digit.padStart(str.length, `*`);
  // return last4Digit;
};
console.log(creditCardNumber(4343343443431212));
console.log(creditCardNumber(782145650));
