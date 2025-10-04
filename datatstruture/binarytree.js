// Node class represents each node in the tree
class Node {
    constructor(value) {
        this.value = value;    // the data value of the node
        this.right = null;     // reference to right child
        this.left = null;      // reference to left child
    }
}

// BinaryTree class for creating and managing a binary tree
class BinaryTree {
    constructor() {
        this.root = null; // initially tree is empty
    }

    // Insert a new node into the binary tree (Level Order Insertion)
    insert(value) {
        const node = new Node(value);

        // If the tree is empty, set new node as root
        if (!this.root) {
            this.root = node;
            return;
        }

        // Use queue for level-order traversal to find first empty spot
        let queue = [this.root];

        while (queue.length) {
            let curr = queue.shift(); // Remove first node from queue

            // Check left child
            if (!curr.left) {
                curr.left = node; // insert here if empty
                return;
            } else {
                queue.push(curr.left); // add left child to queue
            }

            // Check right child
            if (!curr.right) {
                curr.right = node; // insert here if empty
                return;
            } else {
                queue.push(curr.right); // add right child to queue
            }
        }
    }

    // Level Order Traversal (BFS) - visit each level from left to right
    levelOrder(root) {
        let queue = [root]; // start from the root

        while (queue.length) {
            let curr = queue.shift(); // take current node from queue

            console.log(curr.value); // print current node's value

            if (curr.left) queue.push(curr.left);   // add left child to queue
            if (curr.right) queue.push(curr.right); // add right child to queue
        }
    }
}
// Create and test the binary tree
let tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

// Print level order traversal
tree.levelOrder(tree.root);