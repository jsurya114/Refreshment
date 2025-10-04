function insert(stack,item){
    if(stack.length===0||stack[stack.length-1]<item){
        stack.push(item)
        return 
    }
    let top=stack.pop()
    insert(stack,item)
    stack.push(top)
}
function reverse(stack){
    if(stack.length===0) return 
    let temp=stack.pop()
    reverse(stack)
    insert(stack,temp)
}
let stack=[5,2,3,4,5]
reverse(stack)
console.log(stack)