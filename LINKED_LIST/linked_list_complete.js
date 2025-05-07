class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }
    
    append(data){
        const newNode=new Node(data)
        
        if(!this.head){
            this.head=newNode
            return
        }
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
    }
    
    print(){
        let result=''
        
        let current=this.head
        if(!this.head){
            return
        }
        
        while(current){
            result+=current.data+'->'
            current=current.next
        }
        console.log(result)
    }
    
    insertFront(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode
            return
        }
        newNode.next=this.head
        this.head=newNode
        
    }
    
    insertAfter(data,target){
       const newNode=new Node(data)
       if(!this.head){
           this.head=newNode
           return
       }
       let current=this.head
       while(current && current.data!=target){
           current=current.next
       }
       if(!current){
           console.log('no data')
           return
       }
       newNode.next=current.next
       current.next=newNode
       
    }
    
    insertMiddle(data){
      const newNode=new Node(data)
      if(!this.head){
          this.head=newNode
          return
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
    
    deleteMiddle(){
        if(!this.head){
            return
        }
        let slow=this.head
        let fast=this.head
        let prev=null
        
        while(fast && fast.next){
            fast=fast.next.next
            prev=slow
            slow=slow.next
        }
        prev.next=slow.next
    }
    
    delete(data){
        if(!this.head){
            return
        }
       
        
        let current=this.head
        while(current.next && current.next.data!=data){
            current=current.next
        }
        if(!current.next){
            console.log('no data')
            return
        }
        
        current.next=current.next.next
        
    }
    
    
    reverse(){
        if(!this.head){
            return
        }
        let current=this.head
        let prev=null
        let next=null
        while(current){
            next=current.next
            current.next=prev
            prev=current
            current=next
        }
        this.head=prev
    }
    
    
    removeOdd(){
        if(!this.head){
            return
        }
        while(this.head.data%2==0){
            this.head=this.head.next
            
        }
        let current=this.head
        while(current && current.next){
            if(current.next.data%2==0){
                current.next=current.next.next
            }else{
                current=current.next
            }
        }
    }
    
    
    lastOccur(target){
        if(!this.head){
            return
        }
        
        let prev=null
        let current=this.head
        let lastoccur=null
        
        while(current){
            if(current.data==target){
                lastoccur=prev
            }
            prev=current
            current=current.next
        }
        
        if(!lastoccur){
            console.log('no data')
            return
        }
        
        lastoccur.next=lastoccur.next.next
        
    }
    
    duplicate(){
        if(!this.head){
            return
        }
        let current=this.head
        while(current && current.next){
            if(current.data==current.next.data){
                current.next=current.next.next
            }else{
                current=current.next
            }
        }
    }
}
const list=new LinkedList()
list.append(2)
list.append(11)
list.append(2)
list.append(13)
list.append(13)
list.append(15)
list.append(17)
list.append(17)
list.append(2)
list.append(30)
list.append(40)
list.delete(20)
list.insertFront(50)
list.insertAfter(60,20)
list.insertMiddle(100)
list.print()
list.deleteMiddle()
list.print()
list.reverse()
list.print()
list.lastOccur(2)
// list.removeOdd()
list.duplicate()
list.print()
