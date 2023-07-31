class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if(!this.length) {
            this.head = node;
            this.tail = node;
            this.length++;
            return this
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
        return this
    }

    pop() {
        let removed;
        if (!this.length) return undefined;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        if (this.length > 1) {
            removed = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed;
    }

    shift() {
        if (!this.head) return undefined;
        
        let toBeDeleted = this.head;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        if (this.length > 1) {
            this.head = this.head.next;
            this.head.prev = null;
            toBeDeleted.next = null;
        }

        this.length--;
        return toBeDeleted;
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push('Harry');
doublyLinkedList.push('Ron');
doublyLinkedList.push('Hermione');
console.log(doublyLinkedList.shift());
console.log(doublyLinkedList.shift());
console.log(doublyLinkedList.shift());
console.log(doublyLinkedList.shift());

console.log(doublyLinkedList);