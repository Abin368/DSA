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
        if(!this.table[index]){
            this.table[index]=[]
        }
        
        for(let chain of this.table[index]){
            if(chain[0]==key){
                return pair[1]=value
            }
        }
        
        this.table[index].push([key,value])
    }
    
    get(key){
        let index=this._hash(key)
        let chain=this.table[index]
        
       if(chain){
           for(let pair of chain){
               if(pair[0]==key){
                   return pair[1]
               }
           }
       }
       return undefined
    }
    
    display(){
        this.table.forEach((chain,index)=>{
            if(chain){
                const items=chain.map(pair=>`[${pair[0]}:${pair[1]}]`)
                
                console.log(`${index}:${items}`)
            }
        })
    }
}

let ht= new HashTable(10)
ht.set('abin',100)
ht.set('mathew',200)
ht.set('niba',300)
ht.display()