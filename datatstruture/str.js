let str='apple orange grapess watermelon'
let word=''
let words=[]
for(let char of str){
    if(char!==" "){
        word+=char
    }else{
        if(word!==""){
            words.push(word)
            word=""
        }
    }
}
if(word!==""){
    words.push(word)
}
console.log(words)

let longest=""
let second=""
for(let w of words){
    if(w.length>longest.length){
    second=longest
    longest=w
    }else{
        second=w
    }
}
console.log(second,longest)