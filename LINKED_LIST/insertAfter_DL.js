  class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
  }

  class Linked{
    constructor(){
        this.head=null
        this.tail=null
    }

    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }

        let current=this.head
        while(current && current.next){
            current=current.next
        }

        current.next=newNode
        this.tail=newNode
        newNode.prev=current
    }



    print(){
        if(!this.head){
            return
        }

        let result=''
        let current=this.head

        while(current){
            result+=current.data+'<=>'
            current=current.next
        }

        console.log(result)
    }

    insert(target,data){
        const newNode=new Node(data)

        if(!this.head){
            return
        }

        let current=this.head

        while(current && current.data!=target){
            current=current.next
        }

        newNode.next=current.next
        current.next.prev=newNode
        current.next=newNode
        newNode.prev=current
    }
  }
const list=new Linked()
list.append(10)
list.append(20)
list.append(30)
list.print()
list.insert(20,25)
list.print()