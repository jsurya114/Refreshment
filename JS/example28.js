let array = [5, 2, 9, 1, 3, 2, 5];

let result=[]
for(let i=0;i<array.length;i++){
    let c=true
    for(let j=0;j<array.length;j++){
        if(i!==j&&array[i]===array[j]){
            c=false
            break
        }
    }

    if(c){
        result.push(array[i])
    }
}
console.log(result)