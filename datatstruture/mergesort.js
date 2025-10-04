function mergesort(arr){
    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2)
    let left = mergesort(arr.slice(0,mid))
    let right=mergesort(arr.slice(mid))
    return merge(left,right)
}
function merge(left,right){
    let i=0
    let j=0
    let result=[]
    while(i<left.length&&j<right.length){
        if(left[i].age<right[j].age){
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

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];
console.log(mergesort(people))