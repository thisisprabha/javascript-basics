`USE STRICT`;
console.log('hello');
// 5 foot => 60 inch
// 5 foot => 152.4 cm
// 1 inch => 2.3kg after 50kg
// 1 inch => 2.3kg
const avergaeMaleWeight = 50;
const avergaeMaleHeight = 60;
// const avergaeMaleHeight = 152.4;  //in cm
const devineFormulaWeight = 2.3;
let sum = [4, 3, 2, 1];
let total = [];
let tempCont = 0;

const calcIBW = function (yourHeight) {
  for (let i = avergaeMaleHeight; i <= yourHeight; i++) {
    let a = [];
    console.log(`above inches is ${i}`);
    total.push(i);
    //return a;
  }

  for (let j = 0; j <= total.length; j++) {
    //console.log(tempCont, j);
    tempCont = avergaeMaleWeight + devineFormulaWeight * total.length;
    console.log(
      `log is ${avergaeMaleWeight} + ${devineFormulaWeight} * ${total.length}`
    );
  }
};

console.log(calcIBW(62));
console.log(total);
console.log(`Your Ideal weight is ${tempCont}`);
