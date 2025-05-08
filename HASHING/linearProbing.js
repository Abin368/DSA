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
        
        return hash%this.size
    }
    
    set(key,value){
        let index=this._hash(key)
        
        while(this.table[index]!==undefined){
            if(this.table[index][0]==key){
                this.table[index][1]=value
                return
            }
            
            index=(index+1)%this.size
        }
        
        this.table[index]=[key,value]
        
    }
    
    get(key){
        let index=this._hash(key)
        
        while(this.table[index]!=undefined){
            if(this.table[index]==key){
                return this.table[index][1]
            }
             index=(index+1)%this.size
        }
        
       return undefined
    }
    
    display(){
        this.table.forEach((item,index)=>{
            if(item!=undefined){
                console.log(`${index}:${item[0]},${item[1]}`)
            }
        })
    }
}

let ht=new HashTable(10)

ht.set('abin',100)
ht.set('mathew',200)
ht.set('niba',300)
ht.display()