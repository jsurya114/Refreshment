class Stack{
    constructor(size){
        this.array=[]
        this.size=size
    }
    isEmpty(){
        return this.array===0
    }
    push(data){
        if(this.array.length>=this.size) {
            console.log('stack is full')
            return
        }
        this.array.push(data)
    }
    pop(){
        if(this.isEmpty()) return 'stack is empty'
        return this.array.pop()
    }
    peek(){
        if(this.isEmpty()) return 'stack is empty'
        return this.array[this.array.length-1]
    }
    print(){
        console.log(this.array.join(' '))
    }
}
let stack=new Stack(3)
stack.push(10)
stack.push(10)
stack.push(20)
stack.push(409)
stack.print()