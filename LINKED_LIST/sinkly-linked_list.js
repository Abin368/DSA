class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkdedList{
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

        let current=this.head
        let result=''
        while(current){
            result+=current.data+'->'
            current=current.next
        }

        console.log(result)
    }
}


const list=new LinkdedList()

list.append(1)
list.append(2)
list.append(1)
list.print()