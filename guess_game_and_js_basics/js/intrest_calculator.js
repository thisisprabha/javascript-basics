// const bill = 275;
// const tip = bill <= 275 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log('The bill was ${bill}, the tip  was ${tip} and the todal value is ${bill+tip}')

let currencyConvertor = function (rupee, currencysymbol) {
    let usd = 0.012
    let arabDhiram = 0.044
    let nepalRupee = 1.59

    let rupeeTousd = rupee * usd
    let rupeeTodhiram = rupee * arabDhiram
    let rupeeTonepalrupee = rupee * nepalRupee

    if (currencysymbol == 'usd') {
        console.log(rupeeTousd)

    } else if (currencysymbol == 'arabDhiram') {
        console.log(rupeeTodhiram);

    } else if (currencysymbol == 'nepalRupee') {
        console.log(rupeeTonepalrupee);

    } else {
        console.log('Your currency is no value at this moment');
    }


}

console.log(currencyConvertor(999, 'usd'));
console.log(currencyConvertor(999, 'arabDhiram'));
console.log(currencyConvertor(999, 'nepalRupee'));
