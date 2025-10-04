let str='hello'
let freq={}
let max=0
let most=''
for(let i=0;i<str.length;i++){
    let c=str[i]
    if(freq[c]===undefined){
        freq[c]=1
    }else{
        freq[c]++
    }
}

for(let i in freq){
    if(freq[i]>max){
        max=freq[i]
        most =i
    }
}
console.log(freq)
console.log(max)
console.log(most)