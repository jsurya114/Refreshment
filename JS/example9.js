let array = [1, 2, 3, 2, 4, 5, 1, 6];
let extra=[]
for(let i=0;i<array.length;i++){
    let count=0
    for(let j=0;j<array.length;j++){
        if(array[i]===array[j]){
            count++
        }
    }

    if(count===1){
        extra.push(array[i])
    }
}
console.log(extra)


let result=[]
for(let i=0;i<array.length;i++){
    let freq=false

    for(let j=0;j<result.length;j++){
        if(array[i]===result[j]){
            freq=true
            break
        }
    }
if(!freq){
    result.push(array[i])
}

}
console.log(result)