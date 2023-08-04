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

    unshift(value) {
        const node = new Node(value);

        if(!this.length) {
            this.head = node;
            this.tail = node;
        }

        if(this.length) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) return  null;
        let count;
        let current;
        if(index <= this.length/2) {
            count = 0;
            current = this.head;
            while(count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, value) {
        const node = this.get(index);
        
        if(node) {
            node.val = value;
            return true
        }

        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === 0 ) return !!this.unshift(value);

        if(index === this.length) return !!this.push(value);


        const newNode = new Node(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        
        newNode.next = afterNode, afterNode.prev = newNode
        
        this.length++;
        
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;

        if(index === 0) return !!this.shift();

        if(index === this.length - 1) return !!this.pop();

        const toRemoveNode = this.get(index);
        
        const beforeNode = toRemoveNode.prev;
        
        const afterNode = toRemoveNode.next;
        
        beforeNode.next = afterNode;
        
        afterNode.prev = beforeNode;
        
        toRemoveNode.next = null
        
        toRemoveNode.prev = null;
        
        this.length--;
        
        return toRemoveNode;
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push('1');
doublyLinkedList.push('2');
doublyLinkedList.push('3');
doublyLinkedList.remove(1);

console.log(doublyLinkedList);