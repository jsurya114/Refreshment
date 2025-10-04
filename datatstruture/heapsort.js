function heapify(arr,n,index){
    let left=index*2+1
    let right=index*2+2
    let larger=index
    if(left<n&&arr[left]<arr[larger]){
        larger=left
    }
    if(right<n&&arr[right]<arr[larger]){
        larger=right
    }
    if(larger!==index){
        [arr[index],arr[larger]]=[arr[larger],arr[index]]
        heapify(arr,n,larger)
    }
}
function heapsort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
       [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}
console.log(heapsort([5,9,1,4,3,-1]))