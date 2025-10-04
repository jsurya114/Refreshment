// Node class represents each node in the BST
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;  // left child
        this.right = null; // right child
    }
}

// Binary Search Tree implementation
class BinarySearchTree {
    constructor() {
        this.root = null; // initially, tree is empty
    }

    // Check if the tree is empty
    isEmpty() {
        return this.root === null;
    }

    // Insert a new value into the BST
    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node; // if tree is empty, set new node as root
        } else {
            this.insertNode(this.root, node); // otherwise, insert recursively
        }
    }

    // Helper function to insert a node recursively
    insertNode(root, node) {
        if (root.value > node.value) {
            if (root.left === null) {
                root.left = node; // insert to left
            } else {
                this.insertNode(root.left, node); // go left
            }
        } else {
            if (root.right === null) {
                root.right = node; // insert to right
            } else {
                this.insertNode(root.right, node); // go right
            }
        }
    }

    // Search for a value in the BST
    search(root, value) {
        if (!root) {
            return false; // not found
        } else {
            if (root.value === value) {
                return true; // value found
            } else if (root.value > value) {
                return this.search(root.left, value); // go left
            } else {
                return this.search(root.right, value); // go right
            }
        }
    }

    // DFS - Inorder traversal (Left → Root → Right)
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    // DFS - Preorder traversal (Root → Left → Right)
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // DFS - Postorder traversal (Left → Right → Root)
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    // BFS - Level order traversal using queue
    levelOrder(root) {
        let queue = [];
        queue.push(root); // start from root

        while (queue.length) {
            let curr = queue.shift(); // dequeue
            console.log(curr.value); // print current node

            if (curr.left) queue.push(curr.left); // enqueue left
            if (curr.right) queue.push(curr.right); // enqueue right
        }
    }

    // Find minimum value in BST (leftmost node)
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    // Find maximum value in BST (rightmost node)
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    // Public method to delete a node
    delete(value) {
        this.root = this.deleteNode(this.root, value); // update root after deletion
    }

    // Helper method to delete a node recursively
    deleteNode(root, value) {
        if (root === null) return null; // base case

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value); // go left
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value); // go right
        } else {
            // Node to delete is found

            // Case 1: No children (leaf node)
            if (!root.left && !root.right) return null;

            // Case 2: One child
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            // Case 3: Two children
            // Replace with inorder successor (smallest in right subtree)
            root.value = this.min(root.right);
            // Delete that inorder successor node from right subtree
            root.right = this.deleteNode(root.right, root.value);
        }

        return root;
    }
    closestValue(root,target){
        let closest=root
        let diff = target>=root.value ? target-root.value : root.value-target
        let mindiff=diff
        while(root!==null){
            diff=target>=root.value ? target-root.value : root.value-target
            if(mindiff>diff){
                closest=root
                mindiff=diff
            }
            if(target>root.value){
                root=root.left
            }else if(target<root.value){
                root=root.value
            }else{
                return root.value
            }
        }
        return closest.value
    }
     isValidbst(root,min=-Infinity,max=Infinity){
        if(root===null) return true
        if(root.value<=min||root.value>=max){
            return false
        }
        return ((this.isValidbst(root.left,min,root.value))&&(this.isValidbst(root.right,root.value,max)))
        
    }
    secondLargest(root){
        if(root===null||(root.left===null&&root.right===null)){
            return null
        }
        let curr = root
        let parent = null
        while(curr.right!==null){
             parent=curr
             curr=curr.right
        }
        if(curr.left!==null){
            let temp=curr.left
            while(temp.right!==null){
                temp=temp.right
            }
            return temp.value
        }
        return parent.value
    }
  height(root){
    if(!root) return -1
    let leftHeight=this.height(root.left)
    let rightHeight=this.height(root.right)
    return Math.max(leftHeight,rightHeight)+1
  }
  numberofLeftNode(root){
    if(root===null) return null
    let count=0
    if(root.left){
        count++
        count+=this.numberofLeftNode(root.left)
    }
    count+=this.numberofLeftNode(root.right)
    return count
  }
  kthlargest(k){
    let count=0
    let result=null
    function reverseorder(node){
        if(!node||count===k) return 

        reverseorder(node.right)
        count++
        if(count===k){
            result=node.value
            return
        }
        reverseorder(node.left)
    }
    reverseorder(this.root)
    return result
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(9)
tree.insert(7)

console.log("Height",tree.height(tree.root))
console.log("count",tree.numberofLeftNode(tree.root))
console.log('kth largest',tree.kthlargest(2))
console.log("InOrder Traversal:")
tree.inOrder(tree.root)

console.log("PreOrder Traversal:")
tree.preOrder(tree.root)

console.log("PostOrder Traversal:")
tree.postOrder(tree.root)

console.log("Level Order Traversal:")
tree.levelOrder(tree.root)


console.log("Min value:", tree.min(tree.root))
console.log("Max value:", tree.max(tree.root))

console.log("Search 7:", tree.search(tree.root, 7))  // true
console.log("Search 100:", tree.search(tree.root, 100))  // false


console.log("Delete 5:")
tree.delete(5)
tree.inOrder(tree.root)


console.log("Level Order Traversal:")
tree.levelOrder(tree.root)
console.log("closest value",tree.closestValue(tree.root,12))

console.log(tree.isValidbst(tree.root))
console.log(tree.secondLargest(tree.root))
console.log("Height",tree.height(tree.root))