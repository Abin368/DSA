class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    
    isEmpty(){
        return this.front==null
    }
    
  enqueue(data){
      const newNode=new Node(data)
      
      if(this.isEmpty()){
          this.rear=this.front=newNode
          newNode.next=newNode
      }else{
          this.rear.next=newNode
          this.rear=newNode
          this.rear.next=this.front
      }
  }
  
  dequeue(){
      if(!this.front){
          console.log('empty')
          return
      }
      
      const value=this.front.data
      
      if(this.front==this.rear){
          this.front=this.rear=null
      }else{
    this.front=this.front.next
      this.rear.next=this.front
          
      }
  }
  
  display(){
      if(this.front==null){
          return
      }
      let res=''
      let temp=this.front
      
     do{
         res+=temp.data+'->'
         temp=temp.next
     }while(temp!==this.front)
     
     console.log(res)
  }
}

const queue=new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.display()
queue.dequeue()
queue.dequeue()
queue.display()