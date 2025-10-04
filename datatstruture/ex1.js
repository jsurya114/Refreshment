class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Linkedlist{
    constructor(){
        this.head=null
    }
    prepend(value){
        const node = new Node(value)
        node.next=this.head
        this.head=node
    }
    insert(index,value){
           const node = new Node(value)
         if(index===0){
            node.next=this.head
            this.head=node
            return
         }
         let i=0
         let curr=this.head
         let prev=null
         while(curr!==null&&i<index){
            prev=curr
            curr=curr.next
            i++
         }
         if(prev!==null){
            prev.next=node
            node.next=curr
         }
        }
         append(value){
      const node = new Node(value)
             if(this.head===null){
                this.head=node
                return
             }
             let curr=this.head
             while(curr.next!==null){
                curr=curr.next
             }
             curr.next=node
         }
         remove(index){
            if(this.head===null) return 
            if(index===0){
                this.head=this.head.next
                return
            }
            let i=0
            let curr=this.head
            let prev=null
            while(curr!==null&&i<index){
                prev=curr
                curr=curr.next
                i++
            }
            if(prev!==null&&curr!==null){
                prev.next=curr.next
            }
         }
        
    removeM(){
        if(this.head===null) return null
        let count=0
        let curr=this.head
        while(curr!==null){
            curr=curr.next
            count++
        }
        let mid=Math.floor(count/2)
        let i=0
        let prev=null
        curr=this.head
        while(curr!==null&&i<mid){
            prev=curr
            curr=curr.next
            i++
        }
        if(prev!==null&&curr!==null){
            prev.next=curr.next
        }
    }
    reverse(){
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr=curr.next
        }
    }
}
const list = new Linkedlist()
list.prepend(10)
list.insert(1,20)
list.insert(2,30)
list.append(40)
list.print()
console.log('removing')
list.remove(1)

list.print()
console.log('removing')
list.removeM()
list.print()