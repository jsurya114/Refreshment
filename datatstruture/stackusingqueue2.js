class StackUsingQueue{
    constructor(){
        this.q=[]
    }
    isEmpty(){
        return this.q.length===0
    }
    push(x){
        this.q.push(x)
        let size=this.q.length
        for(let i=0;i<size-1;i++){
            this.q.push(this.q.shift())
        }
    }
    pop(){
        if(this.isEmpty()){
            console.log('stack is empty')
            return
        }
        return this.q.shift()
    }
    peek(){
        if(this.isEmpty()){
            console.log('stack is empty')
            return
        }
        return this.q[0]
    }
    print(){
        console.log([...this.q].reverse().join(' '))
    }
}
const stack=new StackUsingQueue()
stack.push(2)
stack.push(3)
console.log(stack.peek())
stack.print()