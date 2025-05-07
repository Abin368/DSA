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
        
        let current=this.head
        let res=''
        
        while(current){
            res+=current.data+'->'
            current=current.next
        }
        console.log(res)
    }
    
    
    palindrome(){
        if(!this.head){
            return
            
        }
        
        let slow=this.head
        let fast=this.head
        
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        
        let current=slow
        let prev=null
       
        while(current){
            let nextNode=current.next
            current.next=prev
            prev=current
            current=nextNode
        }
        
        let left=this.head
        let right=prev
        
        while(right){
            if(left.data!=right.data)return false
            
            left=left.next
            right=right.next
        }
        return true
    }
}
const list=new Linked()

let arr=[1,2,3,1]
for(let num of arr){
    list.append(num)
}
list.print()
console.log(list.palindrome()); // Output: true




