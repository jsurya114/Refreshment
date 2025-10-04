let num=12345
let sum=0
let r=0
let count=0
while(num>0){
    let digit=num%10
r=r*10+digit
    sum+=num%10
    num=Math.floor(num/10)
    count++
}
let avg=sum/count
console.log(avg)
console.log(r)
console.log(sum)