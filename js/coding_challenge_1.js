let markHeight = 1.69;
let jhonHeight = 1.95;
let markWeight = 78;
let jhonWeight = 92
let markBMI = markWeight / markHeight ** 2;
let jhonBMI = jhonWeight / (jhonHeight * jhonHeight);
let compareBMI = markBMI > jhonBMI;
console.log("Mark BMI is" + " " + markBMI);
console.log("Jhon BMI is" + " " + jhonBMI);

if (markBMI < jhonBMI) {
    console.log('Jhon BMI  (${jhonBMI}) is higher than mark')
}
else {
    console.log('Marks BMI (${markBMI}) is higher than Jhon')
}
console.log("Mark BMI is higher due to system returns" + " " + compareBMI);


const inputYear = '1991'
console.log(inputYear + "|" + typeof inputYear);
console.log(Number(inputYear) + 32);
console.log(String(inputYear), Number(inputYear))


let n = '1' + 10;
let o = '1' - 10;
let p = '1' + 's';
console.log(n, typeof (n));
console.log(o, typeof (o));
console.log(p, typeof (p));
n = n - 1;
o = o - 1;
p = p + 1;
console.log(n, typeof (n));
console.log(o, typeof (o));
console.log(p, typeof (p));


const favorite = Number(prompt('Enter Any Number'));
console.log(favorite);

if (favorite === 23) console.log('Yay! its an amazing number!')

