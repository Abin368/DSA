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


    removeOdd(){
        if(!this.head){
            return
        }
        if(this.head.data %2==1){
            this.head=this.head.next
        }
        let current=this.head

        while(current && current.next){
            if(current.next.data % 2==1){
                current.next=current.next.next
            }else{
                current=current.next
            }
        }
    }

  
}


const list=new LinkdedList()

list.append(3)
list.append(8)
list.append(9)
list.append(9)
list.append(9)
list.append(6)
list.append(8)
list.removeOdd()
list.print()