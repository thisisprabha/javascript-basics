`USE STRICT`;
// Find how many stocks/how much needed to get dividend.
// console.log('hello');

// price of one shares
// What is their dividede amount
// How much amount that i needed from stocks
const calcDividend = function (stockprice, dividend_per_share, dividend_income) {
  let a = dividend_income / dividend_per_share;
  console.log(
    `You need ${Math.round(a)} shares to get ${dividend_income} in one Quater,\nAlso you need ${
      Math.round(a) * stockprice
    } (${Math.round(a)} stocks x ${stockprice}) amount to invest`
  );
  console.log(`Totally you get ${dividend_income * 4} in a year.`);
};

//calcDividend(93, 1.5, 10000);

//Finding vowels in words
const words = [];
const vowels = ['a', 'e', 'i', 'o', 'u'];
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
const findVowels = function (quotes) {
  for (let j = 0; j <= quotes.length - 1; j++) {
    //console.log(quotes[i]);

    words.push(quotes[j]);

    if ('a' == quotes[j]) {
      //console.log(`${quotes[j]} is there ${j}`);
      a = a + 1;
      //console.log(a);
    } else if ('e' == quotes[j]) {
      //console.log(`${quotes[j]} is there ${j}`);
      e = e + 1;
      // console.log(e);
    } else if ('i' == quotes[j]) {
      //console.log(`${quotes[j]} is there ${j}`);
      i = i + 1;
      // console.log(wi);
    } else if ('o' == quotes[j]) {
      //console.log(`${quotes[j]} is there ${j}`);
      o = o + 1;
      // console.log(o);
    } else if ('u' == quotes[j]) {
      //console.log(`${quotes[j]} is there ${j}`);
      u = u + 1;
      // console.log(u);
    }
  }

  if (a == 0 && e == 0 && i == 0 && o == 0 && u == 0) {
    console.log('WTF! no vowels');
  }
  console.log(`In the world '${quotes}'. `);
  console.log(` a is ${a} \n e is ${e}\n i is ${i}\n o is ${o}\n u is ${u}`);
};
console.log(findVowels('The Brown fox jumps overs the lazy dog'));
