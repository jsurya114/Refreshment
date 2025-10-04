let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
let small=null
for(let i=0;i<arr.length;i++){
    let num=arr[i]
    let prime=true
    if(num<=1) prime=false

    for(let j=2;j<num;j++){
        if(num%j===0){
            prime=false
            break
        }
    }
    if(prime){
        result.push(num)
    }
    if(prime){
        if(small===null||small>num){
            small=num
        }
    }
}
console.log(small)
console.log(result)