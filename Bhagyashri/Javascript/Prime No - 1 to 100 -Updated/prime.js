/*WAP to find prime number between 1 to 100*/

for(var number=2;number<=100;number++){
	
var isprimeno=true; 

 for(var i=2;i<number;i++){
	 
  if(number%i===0){ 
  
  isprimeno=false; 
  break;
}
 }
if(isprimeno){
	document.write("</br>");
	document.write("This is Prime number "+ number);
} 
else{
	document.write("</br>");
document.write("This is not Prime number "+ number);
}
}