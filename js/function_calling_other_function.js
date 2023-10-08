// Fumction declaration

let cutfruitPieces = function (fruit) {
    return fruit * 2;
}

function fruitProcessor(apple, orange) {
    const applePieces = cutfruitPieces(apple);
    const orangePieces = cutfruitPieces(orange);
    const juice = "TADA!! juice made with " + applePieces + " apples and " + orangePieces + " oranges"
    return juice;
}

console.log(fruitProcessor(2, 3));


let calculateAge = function (birthYear) {
    return 2042 - birthYear;
}

const Yearsuntilretirement = function (birthYear, firstName) {
    const age = calculateAge(birthYear);
    const retirment = 65 - age
    if (retirment > 0) {
        return "This Fucker " + firstName + " retires in " + retirment + " Years";
    } else {
        return -1
    }
}

console.log(Yearsuntilretirement(1991, 'Prabha'));
console.log(Yearsuntilretirement(1999, 'John'));
console.log(Yearsuntilretirement(1947, 'Jimmy'));