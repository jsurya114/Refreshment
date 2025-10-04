let nested = [1, [2, [3, 4], 5], 6];

function nestedArray(nested){
    let total=0
    for(let i=0;i<nested.length;i++){
        if(typeof nested[i]==='number'){
            total+=nested[i]
        }else if(Array.isArray(nested[i])){
            total+=nestedArray(nested[i])
        }
    }
    return total
}
console.log(nestedArray(nested))
