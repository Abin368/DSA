class HashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }
    
    _hash1(key){
        let hash=0
        for(let char of key){
            hash+=char.charCodeAt()
        }
        
        return hash%this.size
    }
    
    
    _hash2(key){
        let hash=0
        
        for(let char of key){
            hash+=char.charCodeAt()
        }
        return 7-(hash % 7)
    }
    
    
    set(key,value){
        let index=this._hash1(key)
        let jump=this._hash2(key)
        let i=0
        while(this.table[index] && this.table[index]!=key){
            i++
            index=(index+jump)%this.size
        }
        this.table[index]=[key,value]
    }
    
    get(key){
         let index=this._hash1(key)
        let jump=this._hash2(key)
        let i=0
        
        while(this.table[index]){
            if(this.table[index][0]==key){
                return this.table[index][1]
            }
            i++
            index=(index+jump)%this.size
        }
        
        return undefined
    }
    
    display(){
        this.table.forEach((item,index)=>{
            console.log(`${index}:${item[0]},${item[1]}`)
        })
    }
}

let ht=new HashTable(10)
ht.set('abin',10)
ht.set('mathew',20)
ht.set('niba',30)
ht.display()