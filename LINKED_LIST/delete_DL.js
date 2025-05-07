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

    delete(data){
        if(!this.head){
            return
        }

        let current=this.head

        if(this.head.data==data){
            this.head=this.head.next
            return
        }

        
        while(current && current.next.data!=data){
            current=current.next
        }

            if(!current){
                console.log('no data')
                return
            }
        current.next=current.next.next




    }

    
  }
  const list = new Linked();
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  list.print();       // Output: 10<=>20<=>30<=>40<=>
  list.delete(20);
  list.print();       // Output: 10<=>30<=>40<=>
  list.delete(10);
  list.print();       // Output: 30<=>40<=>
  list.delete(40);
  list.print();       // Output: 30<=>
  