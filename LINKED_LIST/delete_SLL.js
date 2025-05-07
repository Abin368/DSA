class Node{
    constructor(data) {
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        return
    }

    append(data){
        const newNode= new Node(data)

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


    delete(data){
        if(!this.head){
            return
        }

        let current=this.head

        if(this.head.data==data){
            this.head=this.head.next
            return
        }

        while(current.next && current.next.data!=data){
            current=current.next
        }

        if(!current.next){
            console.log('no data found')
            return
        }
        current.next=current.next.next
    }
}



const list= new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.delete(50)
list.print()