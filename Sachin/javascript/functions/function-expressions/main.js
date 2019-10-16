/**
*	Function Expressions.
*  Basic example . 
*/

var number1 = 10;

var addNumber = function(num1, num2) {
		return num1 + num2;
}

/**
*	
*  Basic example . 
*  Write a program to add two number and if Added number is greater than 50 then perfrom the quare operation on that number. 
*/
/*
function multiply(num1, num2) {
		return  num1/num2;
}

function division(num1, num2) {
		return  num1/num2;
}

function square(number) {
		return  number * number;
}

function addNum(num1, num2) {
		var addition = num1 + num2;
		if( addition === 50) { 
				var multi = multiply( num1, num2);
				document.write("Number Multi is: " + multi);
		}else if(addition > 50) {
				var numberSquare = square(addition);
				document.write("Number Square is: " +numberSquare);
		} else {
			var numbDiv = division(num1, num2);
			document.write("Number Division is:" + numbDiv);
		}
}

addNum(20, 30);
*/
/* 
* passing function name as parameter: 
*     1. perform addtion of two number: 10 and 20;
*     2.   result   ------- fun1 or fun2 or fun3 
*     				3. fun1( num1, num2)
*		4. Display result of function output. 
*/

// greater than 50
var  square = function(num1, num2) {
		var add = num1 + num2;
		
		return add * add;
}

// equal to 50
var  multiply = function(num1, num2) {
		return  num1 * num2;
}
// less than 50
var  division = function(num1, num2) {
		return  num1/num2;
}

function addNum(num1, num2, funBody ) {
		var retrunData = funBody(num1, num2 );
		document.write(' Return data ' + retrunData );
}

var num1 = 20;
var num2 = 10;

var addition = num1 + num2;

if( addition === 50) { 
	addNum(num1, num2, multiply);
}else if(addition > 50) {
		addNum(num1, num2, square);
} else {
	addNum(num1, num2, division);
}








if( addition === 50) { 
	addNum(num1, num2, multiply);
}else if(addition > 50) {
		addNum(num1, num2, square);
} else {
	addNum(num1, num2, division);
}







