let arr= [5, 1, 4, 2, 8];
function insertionsort(arr){
for(let i=0;i<arr.length;i++){
  let j=i-1
  let temp=arr[i]
  while(j>=0&&arr[j]>temp){
    arr[j+1]=arr[j]
    j--
  }
  arr[j+1]=temp
}
return arr
}
console.log(insertionsort(arr))