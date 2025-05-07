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
        this.length=0
    }

    enqueue(data){
        const newNode=new Node(data)
        if(this.front==null){
            this.front=this.rear=newNode
            return
        }
        this.rear.next=newNode
        this.rear=newNode
        this.length++

    }

    dequeue(){
        if(this.front==null){
            return
        }

        this.front=this.front.next

    }

    print(){
        let result=''

        let current=this.front

        while(current){
            result+=current.data+'->'
            current=current.next
        }
        console.log(result)
    }


}

const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()
queue.dequeue()
queue.print()