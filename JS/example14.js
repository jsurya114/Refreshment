let str='hi this is jayasurya'
let vowels='aeiou'
let st=''
for(let i of str){
    if(vowels.includes(i)) continue
    st+=i
}
console.log(st)

// for(let i of str){
// let v=false
// for(let j=0;j<vowels.length;j++){
//     if(vowels[j]===i)
//     {
//         v=true
//         break
//     }
// }
// if(!v){
//     st+=i
// }
// }
// console.log(st)