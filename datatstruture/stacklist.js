class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top=null
    }
    isEmpty(){
        return this.top===null
    }
    push(value){
        const node = new Node(value)
        node.next=this.top
        this.top=node
    }
    pop(){
        if(this.isEmpty()){
            console.log('stack is empty')
return null
        }
        let removed=this.top
        this.top=this.top.next
        return removed.value
    }
    peek(){
        if(this.isEmpty()){
            console.log('stack is empty')


        }
        return this.top.value
    }
    print(){
        let curr=this.top
        while(curr){
            console.log(curr.value)
            curr=curr.next
        }
    }
}
let stack=new Stack()
stack.push(10)
stack.push(20)
stack.pop()
stack.print()
