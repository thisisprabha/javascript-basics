/* Write your code below. Good luck! 🙂 */

// Fumction declaration
/* TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49. */
const calcAvergae = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAvergae(44, 23, 71);
let scoreKoalas = calcAvergae(65, 54, 49);
let checkWinner = function (avgDolphins, avgKolas) {
  if (avgDolphins >= 2 * avgKolas) {
    console.log(' dolphins are winner. Score is ' + avgDolphins);
  } else if (avgKolas >= 2 * avgDolphins) {
    console.log(' Kolas are winner. Score is ' + avgKolas);
  } else {
    console.log('no one wins');
  }
};
//console.log(scoreDolphins);
//console.log(scoreKoalas);
//console.log(checkWinner(scoreDolphins, scoreKoalas));

/* ------------------------------------------------------------------------------- */

//Birth year in array excersice
const CalcBirthYear = birthYear => 2023 - birthYear;
const birthYears = [1947, 1943, 1960, 2002, 2001, 1997, 1992, 2020];
//console.log(birthYears.includes(1947))
birthYears.push(1969);
//console.log(CalcBirthYear(1991));
//console.log(birthYears);
for (let i = 0; i <= birthYears.length - 1; i++) {
  // console.log("Fucking Age is " + CalcBirthYear(birthYears[i]));
}
//console.log(CurrentAge);

/* ------------------------------------------------------------------------------- */

//Tio Calculator
const calcTip = function (tipamount) {
  return tipamount >= 50 && tipamount <= 300
    ? tipamount * 0.15
    : tipamount * 0.2;
};
const bills = [125, 555, 44];
const tip = 20;
const table1 = calcTip(bills[2]);
//console.log(table1)
//console.log('Bill amount is $' + bills[2] + '. Tip is $' + table1 + '. So the final bill is $' + (bills[2] + table1));

/* ------------------------------------------------------------------------------- */
const jhon = {
  firstName: 'Prabha',
  lastName: 'Karan',
  job: 'Designer',
  location: 'Chennai',
  friends: ['Mohan', 'James', 'Sabari'],
};
// Jhonas has 3 friends, and his best friends is called mohan.
const keyName = 'Name';
// console.log(jhon['first' + keyName]);
// console.log(jhon['last' + keyName]);
// console.log(jhon.firstName + ' has ' + jhon.friends.length + ' friends and his best friends is called ' + jhon.friends[0]);

/* ------------------------------------------------------------------------------- */
//prabha is a 32 years old designer from chennai, and he has a driving license.

const prabha = {
  firstName: 'Prabha',
  lastName: 'Karan',
  birthyear: 1991,
  job: 'Designer',
  location: 'Chennai',
  friends: ['Mohan', 'James', 'Sabari'],
  calcAge: function () {
    return 2023 - this.birthyear;
  },
  driverLicese: true,
  hasDriverLicese: function () {
    if (this.driverLicese) {
      return 'has a';
    } else return 'dont have a';
  },
};
//console.log(prabha.calcAge(1991));
//console.log(prabha.firstName + ' is a ' + prabha.calcAge(1991) + ' years old ' + prabha.job + ', and he ' + prabha.hasDriverLicese(true) + ' Driver Licensee');

/* ------------------------------------------------------------------------------- */
// Coding challenge
// formula BMI = mass / (height * height)

const mark = {
  fullname: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
  bmi: this.calcBMI,
};

const john = {
  fullname: 'Jhon Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
  bmi: this.calcBMI,
};
const higherBmi = function () {
  return john.calcBMI() < mark.calcBMI()
    ? 'Mark ' + mark.calcBMI()
    : 'Jhon ' + john.calcBMI();
};
const lowerBmi = function () {
  return john.calcBMI() > mark.calcBMI()
    ? 'Mark ' + mark.calcBMI()
    : 'Jhon ' + john.calcBMI();
};
//console.log(higherBmi(mark, john) + ' BMI is higer than ' + lowerBmi(mark, john));
//console.log(john.bmi)

// For loop
/* ------------------------------------------------------------------------------- */
const years = [1991, 1944, 1964, 1947, 1977, 1980, 2002, 2010];
const ages = [];
const calculateAge = function (year) {
  for (let i = 0; i < years.length; i++) {
    // ages[i] = 2023 - years[i];
    ages.push(2023 - years[i]);
    //console.log(ages[i]);
  }
};
calculateAge();
//console.log(ages);

// Filter only string

const prabhaArray = [
  'Prabha',
  'Karan',
  1991,
  'Designer',
  true,
  ['Mohan', 'James', 'Sabari'],
];
const prabhatypeof = [];
//console.log('----only string-----')
for (let i = 0; i < prabhaArray.length; i++) {
  if (typeof prabhaArray[i] !== 'string') continue;
  //console.log(prabhatypeof.push(typeof prabhaArray[i]));
  //console.log(prabhaArray[i], typeof prabhaArray[i]);
}

//console.log('----only Number-----')
for (let i = 0; i < prabhaArray.length; i++) {
  if (typeof prabhaArray[i] === 'number') break;
  //console.log(prabhatypeof.push(typeof prabhaArray[i]));
  //  console.log(prabhaArray[i], typeof prabhaArray[i]);
}

//------------Reverse Order----------------------
for (let i = prabhaArray.length; i >= 0; i--) {
  //console.log(prabhaArray[i]);
}

// Looop inside loop
for (let i = 1; i <= 3; i++) {
  //console.log(`Starting Exercise ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`   Repetition set ${j}`);
  }
}

//------------Whiel Loop----------------------

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  //console.log(`OOPS! its ${dice}.`)
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('YAY! Starting...');
}

// Codign challenge

/* Your tasks:

    Create an array called bills containing all 10 test bill values.

    Create empty arrays for the tips and the totals (tips and totals)

    Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

*/

const calculateTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const myBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const myTips = [];
const myTotal = [];
for (let i = 0; i <= myBills.length - 1; i++) {
  myTips[i] = calculateTip(myBills[i]);
  myTotal[i] = myTips[i] + myBills[i];
}

for (let i = 0; i <= myTips.length - 1; i++) {
  console.log(
    `Bill is $${myBills[i]}. Tip is $${myTips[i]}. So The total is $${myTotal[i]}.`
  );
}
//console.log(myBills, myTips, myTotal)

const mycalcAverge = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

//console.log(mycalcAverge(myTotal));
console.log(mycalcAverge(myTotal));
console.log('log');
