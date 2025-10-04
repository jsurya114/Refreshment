class Double{
    constructor(){
        this.array=[]
    }
    isEmpty(){
        return this.array.length===0
    }
    pushFront(x){
        this.array.unshift(x)
    }
    pushRear(x){
        this.array.push(x)
    }
    popFront(){
      if(this.isEmpty()){
        return 'queue is empty'
      }
      return this.array.shift()
    }
    popRear(){
        if(this.isEmpty()){
            return 'queue is empty'
        }
        return this.array.pop()
    }
    peekFront(){
           if(this.isEmpty()){
            return 'queue is empty'
        }
        return  this.array[0]
    }
    peekRear(){
           if(this.isEmpty()){
            return 'queue is empty'
        }
        return this.array[this.array.length-1]
    }
}
const dq = new Double();

dq.pushRear(10);
dq.pushRear(20);
dq.pushFront(5);
dq.pushFront(1);

console.log(dq.peekFront()); // 1
console.log(dq.peekRear());  // 20

console.log(dq.popFront());  // 1
console.log(dq.popRear());   // 20

console.log(dq.array);        // [5, 10]
