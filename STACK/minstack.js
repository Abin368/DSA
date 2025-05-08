class Stack{
    constructor(){
        this.stack=[]
        this.minstack=[]
    }
    
    
    push(val){
        this.stack.push(val)
        
        if(this.minstack.length==0 || val<=this.getMin()){
            this.minstack.push(val)
        }
    }
    
    pop(){
        let popped=this.stack.pop()
        
        if(popped==this.getMin()){
            this.minstack.pop()
        }
    }
    
    
    
    getMin(){
        return this.minstack[this.minstack.length-1]
    }
}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(6)
stack.push(78)
stack.push(5)

console.log(stack.getMin())
stack.pop()
console.log(stack.getMin())
