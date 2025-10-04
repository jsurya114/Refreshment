let array=[1,2,3,4,5,6,7,8]

let result=[]
for(let i=0;i<array.length;i++){
  let isPrime=true
  let num = array[i]
  if(num<=1) isPrime =false
for(let j=2;j<num;j++){
  if(num%j===0){
    isPrime=false
    break
  }
}
if(isPrime){
  result.push(array[i])
}

}
console.log(result)