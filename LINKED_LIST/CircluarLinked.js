class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

class Circular{
    constructor(){
        this.head=null
        this.tail=null
    }
    
    
    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            this.head.next=this.head
            this.head.prev=this.head
            return
        }
        
        newNode.next=this.head
        newNode.prev=this.tail
        this.tail.next=newNode
        this.head.prev=this.tail
        
        
        this.tail=newNode
        
        
    }
    
  print(count = 20) {
        if (!this.head) return console.log("Empty list");

        let current = this.head;
        let result = '';
        let printed = 0;

        do {
            result += current.data + ' <=> ';
            current = current.next;
            printed++;
        } while (current !== this.head && printed < count);

        console.log(result + '(back to head)');
    }
}

const CL = new Circular();
let arr = [23, 21, 34, 56, 78, 22];

for (let num of arr) {
    CL.append(num);
}

CL.print();  // 23 <=> 21 <=> 34 <=> 56 <=> 78 <=> 22 <=> (back to head)
