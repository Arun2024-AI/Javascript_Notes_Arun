// if(a==1){
//     console.log("a is equal to 1");
// } else if(a==2){
//     console.log("a is equal to 2");
// } else if(a==3){
//     console.log("a is equal to 3");
// } else{
//     console.log("a is equal to 1,2 or 3");
// }


//switch case
//this is used when all variable depends upon only 1 variable

let a=2
switch(a){
    case(1):{
        console.log("a is equal to 1");
        break                               //it in important to but break in the end other wise print all the cases given below when the statement will satify
    } 
    case(2):{
        console.log("a is equal to 2");
        break
    } 
    case(3):{
        console.log("a is equal to 3");
        break
    } 
    default:{
        console.log("a is equal to 1,2 or 3");
        break

    }

}

console.log("*****************************************************************")


//while loop
// while (true){
//     console.log("hello")  //infinite loop
// }

let i=0;
while(i<10){
     console.log(i);
     i++;
}

//do-while loop
do{
    console.log("hello");

}while(false)        //in this it will work will happend first atleat one time and then check the continue


console.log("*****************************************************************")


//arr
let arr=[1,"1",true, undefined,null,[1,2]];
console.log(arr.length);     //any length
console.log(arr[3]);        //to excess an element in array

console.log("*****************************************************************")

let ar=new Array();  //to create a new array just another method
console.log(ar)


console.log("*****************************************************************")

// stack (a type of data structure)
let arr1=[];
arr1.push(1,2,3,4,5,6);        //to push element in array
arr1.push(7);
console.log(arr1);
console.log(arr1.pop());      //always last element got removed out
console.log(arr1);


console.log("*****************************************************************")


//
for(let index=0; index<arr1.length;index++){
    console.log(index,arr1[index]);
}

console.log("*****************************************************************")

for (let index in arr1){
    console.log(index);
}

console.log("*****************************************************************")


let arr2=[1,2,3,4,5,6,7];
for (let val of arr2){
    console.log(val);
}


console.log("*****************************************************************")

//object

let obj={
    "fname":"Arun",
    "lname":"Giri",
    "school":"Newton"
};
console.log(obj["fname"]);
console.log(obj.lname);      //to get key

console.log("*****************************************************************")


//loop in object
for (let key in obj){
    console.log(key,obj[key]);                 //to get key and value together 
}



console.log("*****************************************************************")

let h=[1,2,3,4];
let obj1={
    0:1,
    1:2,
    2:3,
}
console.log(typeof h)


console.log("*****************************************************************")


//function

function sum(a,b){
    return a+b
}
console.log(sum(1,2));
console.log(sum(1,2,3));           // it will not throw the error it will just perfrom the operation with which is it used for
console.log(sum("1","2"));
console.log(sum("1","2","3"));


console.log("*****************************************************************")


function sum(a,b,c){
    return a+b+c
}
console.log(sum(1,2));      //print NaN


console.log("*****************************************************************")

function sum(a,b,c=3){
    return a+b+c           //default parameters
}
console.log(sum(1,2));


console.log("*****************************************************************")


const w =function(c,d) {
    return c+d;
}
const q=(c,d) =>{
    return c+d;
}
function print(){
    console.log("hello");
}
function fun(callback){
    callback()
}
fun(print);

console.log("*****************************************************************")



/*output
a is equal to 2
*****************************************************************
0
1
2
3
4
5
6
7
8
9
hello
*****************************************************************
6
undefined
*****************************************************************
[]
*****************************************************************
[
  1, 2, 3, 4,
  5, 6, 7
]
7
[ 1, 2, 3, 4, 5, 6 ]
*****************************************************************
0 1
1 2
2 3
3 4
4 5
5 6
*****************************************************************
0
1
2
3
4
5
*****************************************************************
1
2
3
4
5
6
7
*****************************************************************
Arun
Giri
*****************************************************************
fname Arun
lname Giri
school Newton
*****************************************************************
object
*****************************************************************
6
6
123
123
*****************************************************************
6
*****************************************************************
6
*****************************************************************
hello
*****************************************************************
*/
