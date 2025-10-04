let arr= [5, 1, 4, 2, 8];
function selectionsort(arr){
let n=arr.length
for(let i=0;i<n-1;i++){
    let min=i
    for(let j=i+1;j<n;j++){
        if(arr[min]>arr[j]){
            min=j
        }
    }
    if(min!==i){
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
}
return arr
}
console.log(selectionsort(arr))
