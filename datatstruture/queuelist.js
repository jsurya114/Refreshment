class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.rear=null
        this.front=null
    }
    isEmpty(){
        return this.front===null
    }
    enqueue(value){
        const node = new Node(value)
        if(this.rear===null){
            this.front=this.rear=node
        }else{
    this.rear.next=node
    this.rear=node
        }
    }
    dequeue(){
        if(this.front===null){
            return 'queue is empty'
        }
        let removed=this.front
        this.front=this.front.next
        if(this.front===null){
            this.rear=null
        }
        return removed.value
    }
    peek(){
          if(this.front===null){
            return 'queue is empty'
        }
        return this.front.value
    }
    print(){
        let curr=this.front

        while(curr){
console.log(curr.value)
curr=curr.next
        }
    }
    
}
const queue=new Queue()
queue.enqueue(1)
queue.print()