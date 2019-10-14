/*
WAP to reverse a string*/

var str="Bhagyashri";

document.write("The String is " +str);
document.write('</br>');

   var reversestr="";
   for(var i=str.length-1;i>=0;i--){
   reversestr+=str[i];
   }
document.write("Reverse String is " +reversestr);
document.write('</br>');
