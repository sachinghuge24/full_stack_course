/*
WAP to to find palindrome string*/

var str="dad";
   document.write("The String is " +str);
   document.write('</br>');
   document.write('</br>');
var reversestr="";
  for(var i=str.length-1;i>=0;i--){
  reversestr+=str[i];
}   
if(str===reversestr){
	  document.write("Given string is palindrome");
      document.write('</br>');
}
else{
	  document.write("Given string is not palindrome");
}

