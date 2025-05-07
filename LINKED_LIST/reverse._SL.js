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


    reverse(){
        if(!this.head){
            return
        }
        let prev=null
       
        let current=this.head
        while(current){
            
         let next=current.next
          current.next=prev
          prev=current
          current=next

        }
this.head=prev
    }
}

const list = new Linked()
list.append(10)
list.append(20)
list.append(30)
list.print()
list.reverse()
list.print()