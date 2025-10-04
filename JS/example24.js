let num=122
let orginal=num
let reversed=0
while(num>0){
    let digit=num%10
    reversed=reversed*10+digit
    num=Math.floor(num/10)
}
console.log(reversed)

if(reversed===num){
    console.log('3')

}
else{
    console.log('1')
}
// console.log(num)


// console.log(digit)

let n=1234
let sum=0
while(n>0){
    let d=n%10
    sum+=d
n=Math.floor(n/10)
}
console.log(sum)