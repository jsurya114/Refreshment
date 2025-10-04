function sortstring(str){
    let arr=str.split('')
    function mergesort(arr){
        if(arr.length<=1) return arr
        let mid = Math.floor(arr.length/2)
        let left=mergesort(arr.slice(0,mid))
        let right=mergesort(arr.slice(mid))
         return merge(left,right)
    }
    function merge(left,right){
        let i=0
        let  j=0
        let result=[]
        while(i<left.length&&j<right.length){
            if(left[i]<right[j]){
                result.push(left[i++])
            }else{
                result.push(right[j++])
            }
        }
        while(i<left.length){
            result.push(left[i++])
        }
        while(j<right.length){
            result.push(right[j++])
        }
        return result
    }
    return mergesort(arr).join('')

}
let str='vbad'
let sorted=sortstring(str)
console.log(sorted)