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
}

// Example usage:
const stack = new Stack(3); // Fixed

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40); // Will trigger overflow
stack.display(); // 10 -> 20 -> 30
stack.pop();
stack.display(); // 10 -> 20
console.log(stack.peek()); // 20
