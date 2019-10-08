var a=200;
var b=500;
var c=50;
var d=110;
var smaller;

if(a<b)
{
	smaller=a;
}
else
{ 
    smaller=b;
}

if(smaller>c)
{
	smaller=c;
}
if(smaller>d)
{
	smaller=d;
}
document.write("smaller number is\t"+smaller);
