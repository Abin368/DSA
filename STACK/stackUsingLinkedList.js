class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
    }


    push(data){
        const newNode=new Node(data)
        newNode.next=this.top
        this.top=newNode

    }

    pop(){
        if(!this.top){
            return
        }
        const poppedData=this.top.data
        this.top=this.top.next
        return poppedData
    }


    peek(){
        if(!this.top){
            return
        }

        return this.top.data
    }


    display(){
        if(!this.top){
            return
        }

        let res=''
        let current=this.top
        while(current){
            res+=current.data+'->'

            current=current.next
        }

        console.log(res)
    }

}

const stack=new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.display()
stack.pop()
stack.display()
console.log(stack.peek())