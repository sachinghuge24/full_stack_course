/*
WAP to find second largest number in an array */

var myarray=[10,20,30,200,70];

document.write("MY Array is " +myarray);

var first_largest=myarray[0];
var second_largest=myarray[0];

for(var i=0;i<myarray.length;i++)
{
  if(myarray[i]>=first_largest)
   {
	second_largest=first_largest;
    first_largest=myarray[i];
}
}
document.write('</br>');
document.write('</br>');
document.write("First largest Array is " +first_largest);