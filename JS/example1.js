let arr1=[1,2,3,4,5]
let a = Math.floor(arr1.length/2)
console.log(arr1.length/2)
console.log(a)

let count=0
while(arr1[count]!==undefined){
    count++
}
console.log(count)

let end=6
let start=0
arr1[arr1.length]=end

for(let i=arr1.length;i>1;i--){
    arr1[i]=arr1[i-1]
}
arr1[0]=start
console.log(arr1)
