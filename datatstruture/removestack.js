// function removespecific(stack,target){
//     let temp=[]
//     while(stack.length>0){
//         let top=stack.pop()
//         if(top===target) break
//         temp.push(top)
//     }
//     while(temp.length>0){
//         stack.push(temp.pop())
//     }
//     return stack
// }
function removespecific(stack,target){
    let index=stack.indexOf(target)
    let end=stack.length-1
    let temp=stack[index]
    stack[index]=stack[end]
    stack[end]=temp
    stack.pop()
    return stack

}
console.log(removespecific([1,2,3,4],3))