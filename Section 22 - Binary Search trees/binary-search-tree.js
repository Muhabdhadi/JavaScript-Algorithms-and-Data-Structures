class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    
    constructor() {
        this.root = null;
    }

    insert(value) {
        debugger;
        let newNode = new Node(value);

        if(!this.root) {
            this.root = newNode
            return this;
        }

        let treeNode = this.root;
        let selectedNode = null;
        while(treeNode) {
            switch (treeNode.value != null) {
                case newNode.value > treeNode.value:
                    selectedNode = treeNode
                    treeNode = treeNode.right;
                break;

                case newNode.value < treeNode.value:
                    selectedNode = treeNode
                     treeNode = treeNode.left
                    break;
                case newNode.value === treeNode.value:
                    return undefined;
            }
        }
        
        if (newNode.value > selectedNode.value) {
        
            selectedNode.right = newNode
        
        } else  {
        
            selectedNode.left = newNode
        
        }
        
        return this;
    }

    insert2(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if(value > current.right) {
                    if(current.right === null) {
                        current.right = newNode;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    
    find(value) {
        if(!this.root) {
            return false;
        }

        let current = this.root;
        while(true) {
            if(value === current.value) {
                return current;
            } 

            if(value > current.value && current.right !== null) {
                current = current.right;
            } else if (value < current.value && current.left !== null) {
                current = current.left;
            } else {
                return undefined
            }
        }
    }

    find2(value) {
        if(!this.root) return false;
        let current = this.root;
        let found = false;

        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }

            return current;
        }
    }

}

const binarySearchTree = new BinarySearchTree();
console.log(binarySearchTree.insert(10));
console.log(binarySearchTree.insert(5));
console.log(binarySearchTree.insert(13));
console.log(binarySearchTree.insert(11));
console.log(binarySearchTree.insert(2));
console.log(binarySearchTree.insert(16));
console.log(binarySearchTree.insert(7));
console.log(binarySearchTree.insert(3));
console.log(binarySearchTree.insert(1));
console.log(binarySearchTree.find(100));



// console.log(binarySearchTree);