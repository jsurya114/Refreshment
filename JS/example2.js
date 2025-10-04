let arr1=[ 1, 2, 3, 4, 5, 6 ]

//remove from end
arr1.length=arr1.length-1
console.log(arr1)


//remove from front
for(let i=0;i<arr1.length;i++){
    arr1[i]=arr1[i+1]
}
arr1.length=arr1.length-1
console.log(arr1)


//reverse array
let result=[]
for(let i=arr1.length-1;i>=0;i--){
result[result.length]=arr1[i]
}
console.log(result)

//reverse an array to same array
let n=arr1.length
for(let i=0;i<Math.floor(n/2);i++){
let temp=arr1[i]
arr1[i]=arr1[n-1-i]
arr1[n-1-i]=temp

}
console.log(arr1)