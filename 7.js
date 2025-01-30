function print(num){
    console.log(num+1)
    return num
}
let arr=[1,2,3,4,5];
for (let val of arr){
    print(val);
}


console.log("**************************************************************")

let arr1=[1,2,3,4,5];
arr1.forEach(function(val){                  //forEach not breaking the arr
    console.log(val+1)                       //but loop are breaking
    return val
})

console.log("**************************************************************")


let arr2=[1,2,3,4,5];
arr2.forEach(function(val,index,array){
    console.log(val,index,array)
})


console.log("**************************************************************")


let arr3=[1,2,3,4]
newArr=[]
arr3.forEach((val) => {
    newArr.push(val+2)
    console.log(newArr)

})


console.log("**************************************************************")


let arr4=[1,2,3,4]
console.log(
    arr4.map(function(val){                               //map method apply its bussiness logic to every foer loop
        return val+2;
    })
)

console.log("**************************************************************")

let arr5=[1,2,3,4,5];
let newarr1=[];
for(let val of arr5){
    if (val%2==0){
        newarr1.push(val)
        console.log(newarr1)
    }
}

console.log("**************************************************************")

let arr6=[1,2,3,4,5];
console.log(
    arr6.filter(function(val){
        return val%2==0
    })
)

console.log("**************************************************************")


let arr7=[1,2,3,4]
console.log(arr7.reduce(function(iv,cv){
    return iv+cv
}))
console.log(arr7.reduce((iv,cv) => iv+cv,0))

console.log("**************************************************************")


// console.log(arr7.reduce(iv,cv)=>{
//     console.log(iv,cv)
//     return iv+cv
// })


/*Output

2
3
4
5
6
**************************************************************
2
3
4
5
6
**************************************************************
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
**************************************************************
[ 3 ]
[ 3, 4 ]
[ 3, 4, 5 ]
[ 3, 4, 5, 6 ]
**************************************************************
[ 3, 4, 5, 6 ]
**************************************************************
[ 2 ]
[ 2, 4 ]
**************************************************************
[ 2, 4 ]
**************************************************************
10
10
**************************************************************
*/