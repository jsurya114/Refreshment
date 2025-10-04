let arr = [1, 2, 3, 2, 4, 5, 1, 6, 4];
function duplicates(arr){
    let count=[]
    let dup=[]
    for(let i=0;i<arr.length;i++){
        let flag=0
        for(let j=0;j<count.length;j++){
            if(count[j]===arr[i]){
                flag=1
                break
            }
        }
        if(flag) continue
        let occur=0
        for(let k=0;k<arr.length;k++){
            if(arr[i]===arr[k]){
                occur++
            }
        }
        if(occur===1){
            dup.push(arr[i])
        }
        count.push(arr[i])
    }
    return dup
}
console.log(duplicates(arr))
