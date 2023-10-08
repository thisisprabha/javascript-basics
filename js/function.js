// Fumction declaration
function age1(birthyear, firstname) {
    const actualage = 2024 - birthyear
    return firstname + ' age is ' + actualage + ' years';
}
const findage1 = age1(1991, 'prabha')
console.log(findage1);


// Fumction Expression
const age2 = function (birthyear, firstname) {
    const actualage = 2024 - birthyear
    return firstname + ' age is ' + actualage + ' years';
}

const findage2 = age2(1995, 'Devi')
console.log(findage2);


//arrow function
const age3 = (birthyear, firstname) => {
    const actualage = 2024 - birthyear
    return firstname + ' age is ' + actualage + ' years';
}

const findage3 = age3(1964, 'Ravi')
console.log(findage3);