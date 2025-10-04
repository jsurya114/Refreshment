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
    console.log(key,index)
    while(this.table[index]!==undefined&&this.table[index].key!==key){
        index=(index+1)%this.size
    }
    this.table[index]={key,value}
}
get(key){
    let index=this.Hash(key)
    
    let startIndex=index
    while(this.table[index]!==undefined){
        if(this.table[index].key===key){
            return this.table[index].value
        }
        index=(index+1)%this.size
        if(index===startIndex) break
    }
    return undefined
}
delete(key){
    let index=this.Hash(key)
    let startIndex=index
    while(this.table[index]!==undefined){
        if(this.table[index].key===key){
          return   this.table[index]=undefined
        }
        index=(index+1)%this.size
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
ht.set('na',10)
ht.set('an',3)

ht.display()