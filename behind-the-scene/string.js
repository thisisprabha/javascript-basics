'use strict';

const actual_String = 'Hello USA & India people. We love you!';
const lower_Case = actual_String.toLowerCase();
console.log(lower_Case);
console.log(actual_String[0]);
console.log('Hello'[1]);
console.log(lower_Case.indexOf('H'));
console.log(lower_Case.indexOf('h'));
console.log(lower_Case.lastIndexOf('e'));
console.log(lower_Case.indexOf('usa'));
console.log(lower_Case.includes('india'));
console.log(lower_Case.slice(6, 9));
console.log(lower_Case.slice(12, 17));
