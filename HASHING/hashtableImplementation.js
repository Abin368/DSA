class HashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }
    
    _hash(key){
        let hash=0
        for(let char of key){
            hash+=char.charCodeAt()
        }
        
        return hash % this.size
    }
    
    set(key,value){
        let index=this._hash(key)
        this.table[index]=[key,value]
    }
    
    get(key){
        let index=this._hash(key)
        if(this.table[index] && this.table[index][0]==key){
            return this.table[index][1]
        }
        return undefined
    }
    
    display(){
        this.table.forEach((item,index)=>{
            if(item){
            console.log(`${index}:[${item[0]}:${item[1]}]`)
            }
        })
    }
}

let ht=new HashTable(10)

ht.set('abfdfsdfin',100)
// ht.display()
ht.set('asdad',200)
ht.display()