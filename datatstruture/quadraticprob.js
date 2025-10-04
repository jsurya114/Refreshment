class HashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }
    Hash(key){
        let hash=0
        for(let char of key){
            hash+=char.charCodeAt(0)
        }
        return hash%this.table.length
    }
    set(key,value){
        let index=this.Hash(key)
        console.log(index)
        let i=1
        while(this.table[index]!==undefined&&this.table[index].key!==key){
            index=(index+i*i)%this.size
            i++
        }
        this.table[index]={key,value}
    }
    get(key){
        let index=this.Hash(key)
        let startIndex=index
        let i=1
        while(this.table[index]!==undefined){
            if(this.table[index].key===key){
                return this.table[index].value
            }
            index=(index+i*i)%this.size
            i++
            if(startIndex===index) break
        }
        return undefined
    }
    remove(key){
        let index=this.Hash(key)
        let startIndex=index
        let i=1
        while(this.table[index]!==undefined){
            if(this.table[index].key===key){
                return this.table[index]=undefined
            }
            index=(index+i*i)%this.size
            i++
            if(index===startIndex) break
        }
        return undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
}
let ht=new HashTable(3)
ht.set('ana',12)
ht.set('na',3)
ht.display()