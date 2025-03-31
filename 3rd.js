// function of == and ===
console.log(1=="1");     //value wise same
console.log(1==="1");     //false because the data type 
console.log(null==undefined);    // value wise same 
console.log(null===undefined);    //false become data type
console.log(true=="true");    //false because the data type
console.log(1!="1");      //value wise same
console.log(1!=="1");     //false because the data type


// console.log("****************************************************")

// Post operator
let a=2;
console.log(a++);     //The ++ operator here is a post-increment operator
console.log(a);

// pre operator
let b=3;
console.log(++b)
console.log(b)


console.log("****************************************************")


let c=2;
c+=2;
console.log(c);
c-=2;
console.log(c);
c*=2;
console.log(c);
c/=2;
console.log(c);


console.log("****************************************************")


if (1=="1"){
    console.log("one is equal to 1 ");
} else{
    console.log("one is not equal to 1 ");
}

//condition ? statement1 : statement2
1=="1" ? console.log("one is equal to 1") : console.log("one is not equal to 1");      //turnery operator 


if (1=="1"){
    console.log("one is equal to 1 in term of value");
} else if(1==="1") {
    console.log("one is equal to 1 in term of value and data type ");
} else {
    console.log("one is not equal to 1 ");
}


console.log("****************************************************")

//condition ? statement1 : statement2
1=="1" ? console.log("one is equal to 1 in term of value"):
1==="1" ? console.log("one is equal to 1 in term of value and data type "):
console.log("one is not equal to 1 ");


console.log("****************************************************")

//loop
let str="a";
for(let i=0; i < str.length; i++){
    console.log(i, str[i])
}

console.log("****************************************************")


let i=0;     //intialization 
i<1;     //condition check
console.log(i, str[i]);      //0 a //code execution
i++; i=1; 
i<1;       //condition check



console.log("****************************************************")


for(let i=0; i<10; i++){
    if (i%2===0){
        continue; 
    }
    console.log(i);   //i=0 ,i=2
}

console.log("****************************************************")

for(let i=0; i<10; i++){
    if (i%2===0){
        break; 
    }
    console.log(i);   //i=0 ,i=2
}


console.log("****************************************************")




let isAdmin = false, doorCode = "1234";
let canEnter = isAdmin || doorCode === 1234;
console.log(canEnter);

console.log("****************************************************")



let score = 75;
let grade = score > 90? "A" : score > 80? "B" : score > 70? "C" : "F";
console.log(grade);


console.log("****************************************************")



console.log(typeof NaN) //Special Case

console.log(isNaN(Infinity))
console.log(typeof null) //Special Case

console.log(3>2>1) //Special Case


//switch
// weekday = "sunday"
// switch(weekday){
//     case monday
// }


/*output
true
false
true
false
false
false
true
****************************************************
2
3
4
4
****************************************************
4
2
4
2
****************************************************
one is equal to 1 
one is equal to 1
one is equal to 1 in term of value
****************************************************
one is equal to 1 in term of value
****************************************************
0 a
****************************************************
0 a
****************************************************
1
3
5
7
9
****************************************************
****************************************************
false
****************************************************
C
****************************************************
number
false
object
false*/
