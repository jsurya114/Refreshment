let array = [1,2,4,4,5,5,5]
let obj={}
let most 
let count=0
for(let i of array){
    if(obj[i]===undefined){
obj[i]=1
    }else{
        obj[i]++
    }

    
}
let keys=[]
for(let key in obj){
if(obj[key]===1){
     keys.push(Number(key))
} 
}
console.log(keys)

console.log(obj)






















// let sum=0
// for(let i of array){
//     sum+=i
// }
// console.log(sum)