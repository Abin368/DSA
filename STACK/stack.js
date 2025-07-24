class Stack {
    constructor(size) {
        this.items = [];
        this.maxsize = size;
    }

    push(element) {
        if (this.items.length === this.maxsize) {
            console.log('Stack Overflow');
            return;
        }
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            console.log('Stack Underflow');
            return;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    display() {
        if (this.items.length === 0) {
            console.log('Stack is empty');
            return;
        }
        console.log(this.items);
    }

    //-------------------------
    sort(){
        let temp=[]
        
        while(this.items.length>0){
            
            let top=this.items.pop()
            
            while(temp.length>0 && temp[temp.length-1]<top){
                this.items.push(temp.pop())
            }
            
            temp.push(top)
        }
        
        return temp
    }
}

// Example usage:
const stack = new Stack(10); // Fixed

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.sort())

