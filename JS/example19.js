let arr = [2, 3, 7, 3, 4, 3, 9];

let mid= Math.floor(arr.length/2)
console.log(mid)

let target = 3;
let  result=[]
let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        result.push(i)
count++
    }
}
console.log(result)
console.log(count)