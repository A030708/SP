
            class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to stack
    push(element) {
        this.items.push(element);
    }

    // Remove element from stack
    pop() {
        if (this.isEmpty()) return "Stack Underflow";
        return this.items.pop();
    }

    // Get top element without removing
    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get stack size
    size() {
        return this.items.length;
    }

    // Print stack elements
    printStack() {
        console.log(this.items.join(" "));
    }
}

// 🔹 Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack(); // 10 20 30
console.log(stack.pop());  
stack.printStack(); 
console.log(stack.peek());  
stack.printStack(); 
    