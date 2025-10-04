let arr=[5, 1, 4, 2, 8];
function mergesort(arr,l,r){
    if(l>=r) return
    let mid=Math.floor((l+r)/2)
    mergesort(arr,l,mid)
    mergesort(arr,mid+1,r)
    merge(arr,l,mid,r)
}
function merge(arr,l,mid,r){
let i=l
let j=mid+1
let merged=[]
while(i<=mid&&j<=r){
if(arr[i]<arr[j]){
    merged.push(arr[i++])
}else{
    merged.push(arr[j++])
}
}
while(i<=mid){
    merged.push(arr[i++])
}
while(j<=r){
    merged.push(arr[j++])
}
for(let k=0;k<merged.length;k++){
    arr[l+k]=merged[k]
}
}
mergesort(arr,0,arr.length-1)
console.log(arr)