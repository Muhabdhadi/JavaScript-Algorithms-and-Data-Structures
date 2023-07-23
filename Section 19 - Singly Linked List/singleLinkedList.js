class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    push(value) {
        const newNode = new Node(value);
        
        if (!this.head) {
        
            this.head = newNode;
        
            this.tail = newNode;
        
        } else {
        
            this.tail.next = newNode;
        
            this.tail = newNode;
        }

        this.length+=1;
    }

    pop() {
        
        if(!this.head) return undefined;
        
        let current = this.head;
        
        let newTail = current
        
        while(current.next) {
            newTail = current;
            current = current.next;
        }
 
        this.tail = newTail;
        
        this.tail.next = null;
        
        this.length-=1;

        if(this.length === 0) {
            this.head = null,
            this.tail = null;
        }

        return current;
    }

    shift() {
        if(!this.head) return undefined;

        const toBeDeleted = this.head;
        
        this.head = this.head.next;
        
        this.length--;

        if(this.length === 0) {
            this.tail = null;
        }

        return toBeDeleted;
    }

    unshift(value) {
        const newNode = new Node(value);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this
    }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push('Hello');
singlyLinkedList.push('World');
singlyLinkedList.push('!');
console.log(singlyLinkedList);
console.log(singlyLinkedList.unshift('Mann'));
console.log(singlyLinkedList);
