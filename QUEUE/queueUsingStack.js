//queue using stack

class Queue{
    constructor(){
        this.inStack=[]
        this.outStack=[]
    }
    
    enqueue(val){
        this.inStack.push(val)
    }
    
    dequeue(){
        if(this.outStack.length==0){
            while(this.inStack.length>0){
                this.outStack.push(this.inStack.pop())
            }
        }
        return this.outStack.pop()
    }
    
    peek(){
        if(this.outStack.length==0){
            while(this.inStack.length>0){
                this.outStack.push(this.inStack.pop())
            }
        }
        
        return this.outStack[this.outStack.length-1]
    }
    
    isEmpty(){
        return this.instack.length==0 && this.outStack.length==0
    }
    
    display() {
    const temp = [...this.outStack].reverse().concat(this.inStack);
    console.log("Queue:", temp.join(" -> "));
  }
}

let que = new Queue()
que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.enqueue(40)
que.display()
console.log(que.peek())
console.log(que.dequeue())
