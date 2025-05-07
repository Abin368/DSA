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


    removeLastOcuurance(data){

        if(!this.head){
            return
        }
       let prev=null
       let current=this.head
       let lastOccur=null
       while(current && current.next){
        if(current.data==data){
            lastOccur=current
        }

        prev=current
        current=current.next

       }

       if(!lastOccur){
        console.log('no data')
        return
       }
       

       if(lastOccur==this.head){
        this.head=this.head.next
       }else{
        prev.next=lastOccur.next
       }
}
}


const list=new LinkdedList()

list.append(10)
list.append(8)
list.append(9)
list.append(9)
list.append(8)
list.append(0)
list.append(9)
list.print()
list.removeLastOcuurance(10)
list.print()