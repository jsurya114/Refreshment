function reverse(str){
    if(str==='') return ''
    return reverse(str.slice(1))+str[0]
}
let str='hello world'
console.log(reverse(str))

//another method
function reverses(strs,index=0){
    if(index===strs.length) return ''
    return reverses(str,index+1)+str[index]
}
let strs='hello world'
console.log(reverses(strs))


function reversess(str){
    let stack=[]
    for(let char of str){
        stack[stack.length]=char
    }
    let rev=""
    for(let i=stack.length-1;i>=0;i--){
        rev+=stack.pop()
    }
    return rev
}
console.log(reversess("hello"))