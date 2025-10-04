function binarySearchRecursion(arr,target,left=0,right=arr.length-1){
if(left>right) return -1
let  mid=Math.floor((left+right)/2)
if(arr[mid]===target){
    return mid
}else if(arr[mid]<target){
    return binarySearchRecursion(arr,target,mid+1,right)
}else{
    return binarySearchRecursion(arr,target,left,mid-1)
}
return -1
}
let arr=[1,3,5,8,9]
console.log(binarySearchRecursion(arr,8))