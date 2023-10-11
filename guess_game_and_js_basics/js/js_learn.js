/* 
Find Fibinacci sequence for given interger 'n'
*/

function findFibonacci(n){
let fib = [0,1]
for(let i = 2; i<n; i++){
fib[i] = fib[i-1]+ fib[i-2];
console.log(fib[i-1])
}
return fib;
}
console.log("running..." + findFibonacci(3));



/* 
Find Factorial number for given interger 'n'
*/

function findFactorial(n){
	let fac = [];
	for (let i = 0; i>Math.sqrt(n); i++){
		fac[i] = fac[i-1];
		}
	return fac;
}
//console.log(findFactorial(4));

/* 
Find prime number or not from given number 'n'
*/

function isPrime(n){

}