class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        
        return ++this.size;
    }

    pop() {
        if(!this.size) return null;
        
        const currentFirst = this.first;

        if(this.size === 1) {
            
            this.first = null;
            
            this.last = null;

        } else {
            this.first = currentFirst.next;
        }

        this.size--;

        return currentFirst.value;
    }
}

const stack = new Stack();
stack.push('1');
stack.push('2');
stack.push('3');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


console.log(stack);