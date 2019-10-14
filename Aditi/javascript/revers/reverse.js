/*wap to reverse a string without using inbuilt function.*/

function reverse1(str){
str=str.trim();
var a="";
for(var i=str.length-1;i>=0;i--){
a+=str[i];
}

return a;
}
var str="hello";
console.log(reverse1(str))
