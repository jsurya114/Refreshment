function levelOrder(root){
    if(!root) return []
    let queue=[root]
    let result=[]
    while(queue.length>0){
        let level=[]
     let size=queue.length
        for(let i=0;i<size;i++){
               let node =queue.shift()
               level.push(node.value)
               if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
        }
    result.push(level)

    }
    return result
}
let root  = [3,9,20,null,null,15,7]
console.log(levelOrder(root))