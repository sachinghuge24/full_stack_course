/*wap to find weather string is a pelindrome or not*/
var str="eye";
   document.write("The String is " +str);
   document.write('</br>');
   document.write('</br>');
var reversestr="";
  for(var i=str.length-1;i>=0;i--){
  reversestr+=str[i];
}   
if(str===reversestr){
	  document.write("string is palindrome");
      document.write('</br>');
}
else{
	  document.write("string is not palindrome");
}

