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

    insertAfter(data,target){
        if(!this.head){
            return
        }
        const newNode=new Node(data)

        let current=this.head

        while(current && current.data!=target){
            current=current.next
        }

        if(!current){
            console.log('no target found')
            return
        }
        newNode.next=current.next
        current.next=newNode

    }
}


const list=new LinkdedList()

list.append(19)
list.append(40)
list.append(67)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.insertAfter(90,60)
list.print()