let array=[1,2,3,4,5,6,7,8]
let result=array.reduce((acc,curr)=>{
  
    if(curr>acc){
        acc=curr
    }
    return acc
},-Infinity)
console.log(result)