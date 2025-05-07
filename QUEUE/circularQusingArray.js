class Circular{
    constructor(size){
        this.front=0
        this.rear=0
        this.maxsize=size
        this.items=new Array(size)
        this.length=0
    }
    
    
    enqueue(data){
        
        if(this.isFull()){
            console.log('full bro')
            return
        }
        
        this.items[this.rear]=data
        this.rear=(this.rear+1)%this.maxsize
        this.length++
        
    }
    
    isFull(){
        return this.length==this.maxsize
    }
    
    isEmpty(){
        return this.length==0
    }
    
    dequeue(){
        if(this.isEmpty()){
           console.log('empty vro')
           return
        }
        
        let deletedEle=this.items[this.front]
        this.front=(this.front+1)%this.maxsize
        this.length--
        return deletedEle
    }
    
    display(){
        if(this.isEmpty()){
            return
        }
        let res=''
        for(let i=0;i<this.length;i++){
            let index=(this.front+i)%this.maxsize
            res+=this.items[index]+'->'
        }
        console.log(res)
    }
}

const cq=new Circular(5)
console.log(cq.isEmpty())

cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.enqueue(40)
cq.enqueue(50)

console.log(cq.isFull())
cq.dequeue()
cq.enqueue(60)
cq.dequeue()
cq.display()