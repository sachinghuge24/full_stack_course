/*
WAP to find second largest number in an array */

var myarray=[10,20,30,200,70];
document.write("MY Array is " +myarray);
var first_largest=myarray[0];
var second_largest=myarray[0];
for(var i=0;i<myarray.length;i++) {
	if(myarray[i]>=first_largest) {
		second_largest = first_largest;
		first_largest = myarray[i];
	}	
	else if ( myarray[i]>second_largest && myarray[i]<first_largest){
		second_largest = myarray[i];
	}
}
document.write('</br>');
document.write('</br>');
document.write("First largest value is " +first_largest);
document.write('</br>');
document.write('</br>');
document.write("Second largest value is " +second_largest);