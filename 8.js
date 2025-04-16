//objects

let student={
    "name":"",
    "phoneNumber":"",
    email:"",
    roolnumber:""
}
const section="section"
student["section"]=""      //creation square bracket notation 
student.section=""         //creation using dot notation
console.log(student)


console.log("********************************************************************************************************************")

student["name"]="Arun"
section.email="atulgiri649@gmail.com"
student.phoneNumber=9696500410
student.roolnumber=2401010099
student.section="C"
console.log(student.name+" is in section " +student["section"])



console.log("********************************************************************************************************************")


delete student.section
console.log(student)

console.log("********************************************************************************************************************")

let a=2;
let b=a;               //two data
console.log(a,b);

console.log("********************************************************************************************************************")

// let obj2=obj1;


const student1={
    "name":"newton",
    "mark":{
        "eng":10,
        "math":20,
        "science":30,
        printTotalMark: function(){
            console.log(student1.mark.eng + student1.mark.math + student1.mark.science)
        }
    },
    "printsNa":function() {
            console.log(`my name is ${student1.name}`)
        }
}
student1.printsNa()



/*Output

{ name: '', phoneNumber: '', email: '', roolnumber: '', section: '' }
********************************************************************************************************************
Arun is in section C
********************************************************************************************************************
{
  name: 'Arun',
  phoneNumber: 9696500410,
  email: '',
  roolnumber: 2401010099
}
********************************************************************************************************************
2 2
********************************************************************************************************************
my name is newton
*/


console.log("Arun")







let char1="abc"// char1->"abc"->removed from here
let char2="def"// char 2 ->"def"
let char3=char2// char 3 ->"def"
char1=char3// char 4 ->"def"


let arr1=[1,2,3];
let arr2=arr1;
arr2[2]=4;
console.log(arr2)
//arr1->[1,2,3]<- arr2
//301->[1,2,3];
//arr->301,arr2->301
//arr1->[1,2,3]






let hello1="hello1";
let hello2="hello2";

console.log(hello1)
for(let i=0; i<100000000; i++){

}

//Problem With this code is that its taking time 
console.log(hello2)