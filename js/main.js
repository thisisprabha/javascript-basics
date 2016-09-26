function myChess(){
var white = document.createElement("span");
var innerValue = document.createTextNode("this is white");
white.appendChild(innerValue);
var whole = document.getElementById("board").appendChild(white);
var whiteOne = "<div style='background: white'></div>";
var blackOne = "<div style='background: black'></div>";
//console.log(white);
for(var i = 0; i<64; i++)
{
	document.getElementById("board").innerHTML = white;
	console.log(white);
}

}

// var j=0;
// function range(from,to){
	
// 	for(i=from; i<=to; i++){
// 		j=j+i; 
// 		console.log(i);
// 	}
// 	console.log(j);
// }

total = 0;
function range(from,to){
	
	while(from<to){
		console.log(from);
		from = from+1;
		total = total+from;
		}
	console.log("total is "+  total);
	total=0;
	
}




// function printFarmInventry1(cows,goats){
// 	var cowString = String(cows);
// 	while(cowString.length<3)
// 		cowString = "0" + cowString;
// 		console.log(cowString +" "+ "cows");

// 	var goatStiring = String(goats);
// 	while(goatStiring.length<3)
// 		goatStiring = "0" + goatStiring;
// 	console.log(goatStiring +" "+ "goats")
// }
// printFarmInventry1(7,12);

// function printZeroPaddedwithLabel(number, label){
// 	var numberString = String(number)
// 	while(numberString.length<3)
// 		numberString = "0" + numberString;
// 	return console.log(numberString + " " + label)
// }

// function printFarmInventry2(cows,goats,pigs,beer){
// 	printZeroPaddedwithLabel(cows,"cows");
// 	printZeroPaddedwithLabel(goats,"goats");
// 	printZeroPaddedwithLabel(pigs,"pigs");
// 	printZeroPaddedwithLabel(beer,"beer");
// }

function zeroPad(name,width){
	var nameString = String(name)
	while(nameString.length<width)
		nameString = "0" + nameString;
	return nameString;
}
function printFarmInventry(cows,pigs,beers,goats,whale){
	console.log(zeroPad(cows,3) +" "+ "Cows");
	console.log(zeroPad(pigs,3) +" "+ "Pigs");
	console.log(zeroPad(beers,3) +" "+ "Beers");
	console.log(zeroPad(goats,3) +" "+ "Goats");
	console.log(zeroPad(whale,3) +" "+ "Whale");
}
printFarmInventry(2,4,5,6,7);
/* 

var count =1;
for(i=1; i<=8; i++){

//moreWhite = document.body.appendChild(white);

var last = '';
if(i%2== 0)
	document.getElementById('board').innerHTML+=white;
else {
	document.getElementById('board').innerHTML+=black;
	last = "black";
}
if(i%8 == 0)
{
	if(last == "black")
		i=0;
	else
		i=1;
}
count++;
if(count == 64)
	break;
	//console.log(moreWhite);
}

*/