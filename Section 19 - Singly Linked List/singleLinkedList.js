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

    get(index) {
        
        if(index < 0 || index >= this.length) return null;
        
        let counter = 0;
        
        let current = this.head;
        
        while(counter !== index) {
        
            current = current.next;
        
            counter++;
        }
        
        return current;
    }

    set(index, value) {
        
        const foundNode = this.get(index);

        if(!foundNode) {
            
            return false;

        } else {
            
            foundNode.value = value;
            
            return true;
        }
    }

    insert(index, value) {
        debugger;
        
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value); 
        if(index === 0) return !!this.unshift(value);
        
        const newNode = new Node(value);
        
        const previousFoundNode = this.get(index - 1);
        
        const temp = previousFoundNode.next;

        newNode.next = temp;
        
        previousFoundNode.next = newNode;
        
        this.length++;
        
        return true;
        
    }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push('Hello');
singlyLinkedList.push('World');
singlyLinkedList.push('!');
singlyLinkedList.push('s');

// console.log(singlyLinkedList);
// console.log(singlyLinkedList.unshift('Mann'));
// console.log(singlyLinkedList);
console.log(singlyLinkedList.insert(0, 'BB'));;
console.log(singlyLinkedList);
