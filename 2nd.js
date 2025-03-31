// //Data type in JS
// /* There are two type of data types
// 1.premetive(imutable))
// 2.non premetive(mutable)*/
// // only "object" is the data type 



let a=2;
let b=3;
console.log(typeof a);   //javas Know itself the type of variable we can find it by (typeof)
console.log (2+3);
console.log(a+b);

//number is premetive
//symbol is premetive
console.log("***************************************************************************************")

console.log(2+3-4*6/7);   //if follow the BODMAS rule
console.log("***************************************************************************************")
console.log(2+3-4*6/7%2);  // if same the modulus same as python

console.log("***************************************************************************************")
let str="abcd";  //everything in between "" is sttring
let string="";   //empty string

console.log("***************************************************************************************")
console.log(str[0]); //finding index
console.log(str[4]); //if not a present undified
console.log(typeof str);     //datatype finding
//string is imutable
//trivercing is possible in strings


//floor
//non-decimal value is floor
//example:4.999=4
//in case of negative it is totally opposite


//cell
//non-decimal value is floor
//example:4.999=5
//in case of negative it is totally opposite
//going to the bigger value


//round value
//logic of normal maths rounding off the value
//example:4.4=4, 4.6=5
//in case of negative it is totally opposite
//going to bigger ND Smaller value according to condition


console.log(Math.max(1,2,3,4,5,6,7,8,9))       //time complexity of same 
console.log(Math.min(1,2,3,4,5,6,7,8,9))       //just to easy code
console.log("***************************************************************************************")
console.log("abcd".includes("c")); //checking true or false while present or not 
console.log("abcd".indexOf("c"));  //indexOF sortcut to find directly
console.log("***************************************************************************************")

console.log("abc"+"def")
console.log("***************************************************************************************")
let w="abc";
console.log(w+"def")

console.log("***************************************************************************************")
let name="Arun";
let rolno=99;
console.log("My name is "+ name + ".\nmy rollno is"+rolno + ".");   //proper way to add using +
console.log(`My name is ${name}. My rollno is ${rolno}.`);   // use ${} to reduse time it is basically used as f string in python 
console.log("***************************************************************************************")

let k=true;
let l=false;
console.log(typeof k);  //to express boolean Type  
console.log("***************************************************************************************")
let g;
console.log(typeof g);  //type exists as undified
console.log("***************************************************************************************")
let j=null;
console.log(typeof j);   // sep
console.log("***************************************************************************************")

/* premetive datatype
number
bigint
boolean
undefined
symbol
null*/

console.log("***************************************************************************************")


//if and else
//AND &&
//OR ||
if (a%2==0){
    console.log("True")
}
else
{
    console.log("False")
}

console.log("***************************************************************************************")
z="ram"
y="singh"
console.log(z+" "+y)


/*output
number
5
5
***************************************************************************************
1.5714285714285716
***************************************************************************************
3.5714285714285716
***************************************************************************************
***************************************************************************************
a
undefined
string
9
1
***************************************************************************************
true
2
***************************************************************************************
abcdef
***************************************************************************************
abcdef
***************************************************************************************
My name is Arun.
my rollno is99.
My name is Arun. My rollno is 99.
***************************************************************************************
boolean
***************************************************************************************
undefined
***************************************************************************************
object
***************************************************************************************
***************************************************************************************
True
***************************************************************************************
ram singh*/


