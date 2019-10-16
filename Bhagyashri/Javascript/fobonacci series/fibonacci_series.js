/*WAP to print fibonacci series*/

var num1=0;
var num2=1;
var num3;

document.write(num1+"</br>");
document.write(num2+"</br>");
num=5;
for(var i=0; i<=num; i++){
num3=num1+num2;
num1=num2;
num2=num3;
document.write(num3+ "</br>" );
}
