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
