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
 