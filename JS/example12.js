let array=[1,2,3,4,5,6,7,8]
let result=array.reduce((acc,curr)=>{
    let {l,s}=acc
   if(curr%2!==0) {
        if(curr>l){
        acc.s=acc.l
        acc.l=curr
    }else if(curr>s&&curr!==acc.l){
        acc.s=curr
    }
}
    return acc
},{l:-Infinity,s:-Infinity})
console.log(result.l)