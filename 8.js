//objects

// let student={
//     "name":"",
//     "phoneNumber":"",
//     email:"",
//     roolnumber:""
// }
// const section="section"
// student["section"]=""      //creation square bracket notation 
// student.section=""         //creation using dot notation
// console.log(student)


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
