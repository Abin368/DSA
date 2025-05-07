class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}


class Linked{
    constructor(){
        this.head=null
        return
    }
    append(data){
        const newNode=new Node(data)

        if(!this.head){
            this.head=newNode
            return
        }

        let current=this.head
        while(current && current.next){
            current=current.next
        }

        current.next=newNode
    }

    print(){
        if(!this.head){
            return
        }

        let result=''
        let current=this.head

        while(current){
            result+=current.data+'->'
            current=current.next
        }

        console.log(result)
    }


    insertMiddle(data){
        const newNode=new Node(data)

        if(!this.head){
            this.head=newNode
        }

        let slow=this.head
        let fast=this.head
        let prev=null
        while(fast && fast.next){
            fast=fast.next.next
            prev=slow
            slow=slow.next
        }
        newNode.next=slow
        prev.next=newNode
    }
}

const list=new Linked()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.print()
list.insertMiddle(35)
list.print()