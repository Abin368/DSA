class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

class Linkded{
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

    //reverse

    reverse(){
        if(!this.head){
            return
        }

        let result=''
        let current=this.tail
        while(current){
            result+=current.data+'<=>'
            current=current.prev
        }

        console.log(result)
    }
}


const list=new Linkded()
list.append(10)
list.append(20)
list.append(30)
list.print()
list.reverse()