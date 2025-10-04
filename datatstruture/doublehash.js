class HashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }
    
Hash1(key){
    let hash=0
    for(let char of key){
        hash+=char.charCodeAt(0)
    }
    return hash%this.table.length
}
Hash2(key){
    let hash=0
    for(let char of key){
        hash+=char.charCodeAt(0)
    }
    return 5-(hash%5)||1
}
set(key,value){
    let index1=this.Hash1(key)
    let index2=this.Hash2(key)
    let i=0
    let index=index1
    while(this.table[index]!==undefined&&this.table[index].key!==key){
        i++
        index=(index1+i*index2)%this.size
    }
    this.table[index]={key,value}
    console.log(index)
}
get(key){
     let index1=this.Hash1(key)
    let index2=this.Hash2(key)
    let i=0
    let index=index1
    while(this.table[index]!==undefined){
        if(this.table[index].key===key){
            return this.table[index].value
        }
        i++
        index=(index1+i*index2)%this.size
    }
    return undefined
}
remove(key){
         let index1=this.Hash1(key)
    let index2=this.Hash2(key)
    let i=0
    let index=index1
    while(this.table[index]!==undefined){
        if(this.table[index].key===key){
            this.table[index]=undefined
            return
        }
        i++
        index=(index1+i*index2)%this.size
    }
}
display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
           console.log( this.table[i])
        }
    }
}

}

let ht = new HashTable(5)
ht.set('naan',4)
ht.set('anna',5)
ht.display()