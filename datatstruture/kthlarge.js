function kthlargest(arr,k){
    for(let i=0;i<k;i++){
        let max = -Infinity
        let index=-1
        for(let j=0;j<arr.length;j++){
            if(arr[j]>max){
                max=arr[j]
                index=j
            }
        }
        arr[index]=-Infinity
        if(i===k-1) return max
    }
}
const arr = [7, 2, 1, 10, 5];
console.log(kthlargest(arr,2))