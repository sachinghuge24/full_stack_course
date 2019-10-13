/*WAP to find prime number between 1 to 100*/

for(var j=1;j<=100;j++){
boolean temp=true; 
for(var i=2;i<j-1;i++){
if(j%i==0){ 
boolean temp=false; 
break;
}
else{
temp=true;
}
}
document.write("Prime number"+j);
}

