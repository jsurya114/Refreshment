class StackUsingQueue{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    isEmpty(){
        return this.q1.length===0
    }
    push(x){
        this.q1.push(x)
    }
    pop(){
        if(this.isEmpty()){
            console.log('stack is empty')
        }
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        let pop=this.q1.shift()
        [this.q1,this.q2]=[this.q2,this.q1]
        return pop
    }
    peek(){
         if(this.isEmpty()){
            console.log('stack is empty')
            return
        }
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        let  top=this.q1.shift()
        this.q2.push(top)
        let temp=this.q1
        this.q1=this.q2
        this.q2=temp
          return top
    }
    print(){
        console.log([...this.q1].reverse().join(' '))
    }
}
const stack=new StackUsingQueue()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek())
stack.print()