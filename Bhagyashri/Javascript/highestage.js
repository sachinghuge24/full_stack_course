/*
3 student Ram age is 30 Sham age is 25 Pravin age is 50;
Find the age of student who is having higest age among 3 of them and print the student name.*/

var ramage=30;
var shyamage=25;
var pravinage=50;

if(ramage>shyamage)
 {  
 if(ramage>pravinage)
  {
	 document.write("Ram age is greater");
  }
 else{
	 document.write("Pravin age is greater");
 }
}
else
{
	if(shyamage>pravinage)
	{
	 document.write("Shyam age is greater");	
	}
	else
	{
		document.write("Pravin age is greater");
	}
}