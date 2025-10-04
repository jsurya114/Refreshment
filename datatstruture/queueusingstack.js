class QueueUsingStack{
    constructor(){
        this.s1=[]
        this.s2=[]

    }
    isEmpty(){
        return this.s1.length===0&&this.s2.length===0
    }
    enqueue(x){
        this.s1.push(x)
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('queue is empty')
        }
        if(this.s2.length===0){
            while(this.s1.length>0){
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2.pop()
    }

    peek(){
         if(this.isEmpty()){
            console.log('queue is empty')
        }
        if(this.s2.length===0){
            while(this.s1.length>0){
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2[this.s2.length-1]
    }
    print(){
        console.log([...this.s2].reverse().concat(this.s1).join('<-'))
    }
}
const q = new QueueUsingStack();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print(); // 10 <- 20 <- 30

console.log(q.dequeue()); // 10
console.log(q.peek());    // 20
q.print()