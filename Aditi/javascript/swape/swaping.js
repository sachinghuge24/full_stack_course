/*wap to swape two number with using third variable.*/
var x=10;
var y=20;
var temp;

document.write("value of x is "+x);
document.write('<br/>');
document.write("value of y is "+y);
document.write('<br/>');
document.write('<br/>');

temp=x;
x=y;
y=temp;

document.write("value of x after swap is "+x);
document.write('<br/>');
document.write("value of y after swap is "+y);
document.write('<br/>');