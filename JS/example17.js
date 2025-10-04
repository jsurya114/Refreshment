let arr = [1, 2, 3, 4, 5];
let element =1

for(let i=0;i<arr.length;i++){
    arr[i]=arr[i+1]
}
arr[arr.length-1]=element
console.log(arr)


let array=[1, 2, 3, 4, 5];
let last =array[array.length-1]
for(let i=array.length-1;i>0;i--){
    array[i]=array[i-1]
}
array[0]=last
console.log(array)