class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

class DlinkedList{
    constructor(){
        this.head=null;
        this.tail = null; 
    }

    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }

        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
        newNode.prev=current
        this.tail=newNode

    }


    printForward(){
        if(!this.head){
            return
        }

        let current=this.head
        let result=''

        while(current){
            result+=current.data+'<=>'
            current=current.next
        }
        console.log(result)
    }


    printBackward(){
        if(!this.head){
            return
        }
        let resultBack=''
        let current=this.tail

        while(current){
            resultBack+=current.data+'<=>'
            current=current.prev
        }
        console.log(resultBack)
    }

    insertBefore(data,before){
        const newNode= new Node(data)
        if(!this.head){
            return
        }
        let current=this.tail
        while(current && current.data!=before){
            current=current.prev
        }

        if(!current){
            console.log(' no target')
        }
       newNode.prev=current.prev
       newNode.next=current

       if(current.prev){
        current.prev.next=newNode
       }else{
        this.head=newNode
       }
     
       current.prev=newNode


    }


    insertAfter(data,after){
        const newNode=new Node(data)
        if(!this.head){
            return
        }

        let current=this.head
        while(current && current.data!=after){
            current=current.next
        }
        if(!current){
            console.log('no data found')
            return
        }
        newNode.next=current.next
        newNode.prev=current
       
        if(current.next){
            current.next.prev=newNode
        }

        current.next=newNode
        


       

    }

    delete(data){

        if(!this.head){
            return
        }

        let current=this.head

        while(current && current.data!=data){
            current=current.next
        }
        if(!current){
            console.log('no data found')
            return
        }
        if(current==this.head){
            this.head=current.next
            if (this.head) 
                this.head.prev = null;
              else this.tail = null;
        return;
        }
       
        if(!current.next){
            this.tail=current.prev
            return
        }

        current.prev.next=current.next
        current.next.prev=current.prev
        

    }
}

const list = new DlinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.insertBefore(150,50)
list.insertAfter(150,50)
list.delete(10)
list.printForward()
list.printBackward()