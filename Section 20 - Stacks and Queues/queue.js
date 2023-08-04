class Node { 
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if(!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;

    }

    dequeue() {
        
        if(!this.size) return null;
        let orldFirst = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = orldFirst.next;
        }

        this.size--;
        return orldFirst.value;

    }
}

const queue = new Queue();
console.log(queue.enqueue('FIRST'));
console.log(queue.enqueue('SECOND'));
console.log(queue.enqueue('THIRD'));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue('Hello'));
console.log(queue.dequeue());
console.log(queue);