//Printing something in the console
console.log("Hello world");

//Declaring dynamic variables
var a=20;
var b="Chandhu";
console.log(a);
console.log(b);

//if and else if conditional statements
if(a<10)
{
    console.log("a is less than 10");

}
else if(a>10)
{
    console.log("a is greater than 10");
    console.log("Value of a: "+a);
}
else
{
    console.log("a is equal to 10");
}

//Looping statements
//for loop
for(var i=1;i<=3;i++)
{
    console.log(i);
}

//while loop
var s=1;
while(s<=5)
{
 console.log(s); 
 s++;
}

//do while loop
//Unlike other loops, do while executes the loop body atleast once even if the condition is false

var i=10;
do
{
 console.log(i); 
 i++;
}while(i<5)

//functions
function add(x,y)
{
    return x+y;
}

console.log(add(2,3));
console.log(add(5,10));

//Arrays
var arr=["Subbu","loves","Chandhu"];
console.log("Length of the array:"+arr.length);
for(var n=0;n<arr.length;n++)
{
    console.log(arr[n]);
}
console.log("Printing array in reverse order");
index=arr.length-1;
while(index>=0)
{
    console.log(arr[index]);
    index--;
}
var a=new Array();
a[0]=1;
a[1]=2;
a[2]=3;
a[3]=4;
console.log("Length of the array a:"+a.length);

//Strings
//Declaring a string
var str="Subbu"; //This is a string literal
var str1=new String("Chandhu"); //Dynamic declaration
var str2=" Karthick   "

//String functions
console.log(str1.charAt(2));
console.log(str.indexOf('b'));
console.log(str.concat(str2.trim()));
console.log(str1.toUpperCase());
console.log(str2.trim()); //trim() removes spaces in the given string
console.log(str2.slice(1,7));