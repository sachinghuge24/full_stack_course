/**
* Write a program to perfrom addition of numbers. 
*/


function calculator( numberFirst, numberSecond, operator ) {
		var result = null;
		switch(operator) {
				case '+': 
					result = numberFirst + numberSecond;
					break;
				case '-': 
					result = numberFirst - numberSecond;
					break;
				case '*': 
					result = numberFirst * numberSecond;
					break;
				case '/': 
					result = numberFirst / numberSecond;
					break;
				case '%': 
					result = numberFirst % numberSecond;
					break;
				default: 
					result = numberFirst + numberSecond;
		}
		
		return result;
}

var numFirst			= 20;
var numSecond	= 30;

var addition				= calculator(numFirst, numSecond, '+');
var substraction		= calculator(40, 34, '-');
var division				= calculator(10, 34, '*');
var multi						= calculator(90, 34, '/');
var mod						= calculator(90, 9, '%');

document.write(addition);
document.write('<br/>');
document.write(substraction);
document.write('<br/>');
document.write(division);
document.write('<br/>');
document.write(multi);
document.write('<br/>');
document.write(mod);
document.write('<br/>');


/*
var numFirst			= 20;
var numSecond	= 30;

var addition			= numFirst + numSecond;
var substraction	= numFirst - numSecond;
var division			= numFirst / numSecond;
var multi					= numFirst * numSecond;


document.write(addition);
document.write('<br/>');
document.write(substraction);
document.write('<br/>');
document.write(division);
document.write('<br/>');
document.write(multi);
document.write('<br/>');

*/
