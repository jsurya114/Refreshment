class QueueUsingStack{
    constructor(){
        this.s1=[]
        this.s2=[]
    }
     isEmpty(){
        return this.s1.length===0
    }
    enqueue(x){
        while(this.s1.length>0){
            this.s2.push(this.s1.pop())
        }
        this.s1.push(x)
        while(this.s2.length>0){
            this.s1.push(this.s2.pop())
        }
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('queue is empty')
        }
        return this.s1.pop()
    }
    peek(){
         if(this.isEmpty()){
            console.log('queue is empty')
        }
        return this.s1[this.s1.length-1]
    }
    print(){
        console.log([...this.s1].reverse().join('<-'))
    }
}

const q = new QueueUsingStack();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.dequeue()
console.log(q.peek())
q.print()
