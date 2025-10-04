class HashTable{
    constructor(size){
        this.table=new Array(size)
    }
    Hash(key){
        let hash=0
        for(let char of key){
            hash+=char.charCodeAt(0)
        }
        return hash%this.table.length
    }

    set(key ,value){
        let index=this.Hash(key)
      console.log(`Index for key "${key}" is ${index}`);

        while(!this.table[index]){
            this.table[index]=[]
        }
        this.table[index].push([key,value])
    }

    delete(key){
        const index=this.Hash(key)
         const bucket=this.table[index]
if(bucket){
for(let i=0;i<bucket.length;i++){
    let [k,v]=bucket[i]
    if(k===key){
        bucket.splice(i,1)
        return
    }
}
}

    }
    get(key){
        const index=this.Hash(key)
        const bucket=this.table[index]
        if(bucket){
            for(let [k,v] of bucket){
            if(k===key) return v
            }
        }
        return undefined
    }
}
const ht = new HashTable(5);
ht.set("name", 5);
ht.set("eman", 4);

// ht.delete("name");


console.log(ht.get("name")); // ➝ undefined (it's deleted)
console.log(ht.get("eman")); 