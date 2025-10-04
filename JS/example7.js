let array=[1,2,3,4,5,6,7,8]
let e=0
let o=0
for(let i=0;i<array.length;i++){
    if(array[i]%2===0){
        e++
    }else{
        o++
    }
}
console.log(e,o)