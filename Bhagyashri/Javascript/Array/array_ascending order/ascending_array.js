/*
WAP to find second largest number in an array */

var myarray=[10,500,2000,200,1000];
document.write('</br>');
document.write( "Origional Array " + myarray );
	for( var j=0; j < myarray.length-1 ; j++ ){	
	for(var i=0;i < myarray.length-1;i++) {
		if(myarray[i] > myarray[i+1]) {
		var temp=myarray[i];
		myarray[i]=myarray[i+1];
		myarray[i+1]=temp;
	}									
}
}
document.write('</br>');
document.write("Array in Ascending order " + myarray);


