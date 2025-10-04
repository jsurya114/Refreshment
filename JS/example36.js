let arr = [1, [2, 3], [4, [5, 6]], 7,[3]];
function NestedArray(arr){
    let sum =0
    for(let i of arr){
        if(Array.isArray(i)){
            sum+=NestedArray(i)
        }else{
            sum+=i
        }
    }
    return sum
}
let array=NestedArray(arr)
console.log(array)