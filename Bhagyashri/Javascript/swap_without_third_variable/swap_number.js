/*
WAP to swap number without using third variable*/

var num1=40;
var num2=7;

document.write("Value of Num1 is " +num1);
document.write('</br>');
document.write("Value of Num2 is " +num2);
document.write('</br>');
document.write('</br>');

num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
 
document.write("Value of Num1 post swap is " +num1);
document.write('</br>');
document.write("Value of Num2 post swap is " +num2);
document.write('</br>');