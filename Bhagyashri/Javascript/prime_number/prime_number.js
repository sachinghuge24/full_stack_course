/*WAP to find given number is prime number or not*/

prime(6)

function prime(num){
for(var i=2;i<num;i++){
if(num%i==0){  
document.write("Given Number is not prime number");
return false;
}
}
document.write("Given Number is prime number");
return true;
}
