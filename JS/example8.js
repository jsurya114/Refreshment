let array=[1,2,3,4,5,6,7,8]

// //without an extra array
// let index=0
// for(let i=0;i<array.length;i++){
//     if(array[i]%2===0){
//         array[index]=array[i]
//         index++
//     }
// }

// for(let i=index;i<array.length;i++){
//     array[i]=0

// }
// console.log(array)

// //using an extra array
// let extra=[]
// for(let i=0;i<array.length;i++){
//     if(array[i]%2===0){
//         extra.push(array[i])
//     }
// }

// let odd=array.length-extra.length
// for(let i=0;i<odd;i++){
//     extra.push(0)
// }
// console.log(extra)




//pushing zero at begining
let neww=[]
for(let i=0;i<array.length;i++){
    if(array[i]%2!==0){
        neww.push(array[i])
    }
}
for(let i=0;i<array.length;i++){
    if(array[i]%2===0){
neww.push(0)
    }
}

console.log(neww)