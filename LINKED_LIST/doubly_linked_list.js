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
        newNode.prev=current
        this.tail=newNode
    }


    print(){
        if(!this.head){
            return
        }

        let result=''
        let current=this.head

        while(current){
            result+=current.data+ '<=>'
            current=current.next
        }


        console.log(result)
    }

    reverse(){
        if(!this.head){
            return
        }

        let current=this.tail
        let result=''
        while(current){
            result+=current.data+'<=>'
            current=current.prev
        }

        console.log(result)

    }
}
const list=new Linked()
list.append(10)
list.append(8)
list.append(9)
list.append(9)
list.append(9)
list.print()
list.reverse()