
            class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove element from queue
    dequeue() {
        if (this.isEmpty()) return "Queue Underflow";
        return this.items.shift();
    }

    // Get front element
    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get queue size
    size() {
        return this.items.length;
    }

    // Print queue elements
    printQueue() {
        console.log(this.items.join(" "));
    }
}

// 🔹 Example usage:
const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

queue.printQueue(); // A B C
console.log(queue.dequeue()); // A
queue.printQueue(); // B C
console.log(queue.front());   // B
     