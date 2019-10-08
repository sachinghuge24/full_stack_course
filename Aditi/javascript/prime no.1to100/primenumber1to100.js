/*prime no.between 1to100 */
var a,b;
for(a=2;a<=100;a++)
{
var c=true;
for(b=2;b<a;b++)
{
if(a%b==0)
{
c=false;
break;
}
}
if(c)
{
document.write(a+', ');
}
}	 