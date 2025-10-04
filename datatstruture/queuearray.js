class Queue{
    constructor(){
        this.items=[]
    }

    isEmpty(){
        return this.items.length===0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.items.shift()
    }
    peek(){
         if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.items[0]  
    }
    print(){
        console.log(this.items.join('<-'))
    }
}
const queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
// queue.dequeue()
queue.print()
console.log(queue.peek())