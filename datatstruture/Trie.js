// Class representing each node in the Trie
class TrieNode {
    constructor() {
        this.child = {}      // Object to store child nodes for each character
        this.isend = false   // Boolean to mark if a word ends at this node
    }
}

// Trie class
class Trie {
    constructor() {
        this.root = new TrieNode() // Root node of the trie
    }

    // Method to insert a word into the trie
    insert(word) {
        let node = this.root
        for (let char of word) {
            // If character not in current node's children, create new TrieNode
            if (!node.child[char]) {
                node.child[char] = new TrieNode()
            }
            // Move to the next node
            node = node.child[char]
        }
        // Mark the last node as the end of a word
        return node.isend = true
    }

    // Method to search a word in the trie
    search(word) {
        let node = this.root
        for (let char of word) {
            // If character is not found in children, word doesn't exist
            if (!node.child[char]) return false
            node = node.child[char]
        }
        // Return true only if the last node marks the end of a word
        return node.isend
    }

    // Method to check if a prefix exists in the trie
    startsWith(prefix) {
        let node = this.root
        for (let char of prefix) {
            // If prefix character not found, return false
            if (!node.child[char]) return false
            node = node.child[char]
        }
        return true  // All prefix characters matched
    }

    // Method to get all words that start with a given prefix
    autoComplete(prefix) {
        let node = this.root
        let word = []

        // Traverse to the end of prefix
        for (let char of prefix) {
            if (!node.child[char]) return [] // Prefix doesn't exist
            node = node.child[char]
        }

        // From the last prefix node, collect all possible complete words
        this.collectWords(prefix, node, word)
        return word
    }

    // Helper function to collect all words from a given node
    collectWords(prefix, node, word) {
        // If current node marks end of word, push the prefix
        if (node.isend) {
            word.push(prefix)
        }
        // Recursively explore all child nodes
        for (let key in node.child) {
            this.collectWords(prefix + key, node.child[key], word)
        }
    }

    // Method to delete a word from the trie
    delete(word) {
        this.deletewords(this.root, word, 0)
    }

    // Helper recursive function to delete a word
    deletewords(node, word, index) {
        // Base case: reached end of word
        if (index === word.length) {
            if (!node.isend) return false // Word doesn't exist
            node.isend = false  // Unmark end of word

            // If no children left, node can be deleted
            return Object.keys(node.child).length === 0
        }

        let char = word[index]
        let childnode = node.child[char]
        if (!childnode) return false  // Word doesn't exist

        // Recursively delete next characters
        let deletecurrentnode = this.deletewords(childnode, word, index + 1)

        // If child node can be deleted
        if (deletecurrentnode) {
            delete node.child[char]  // Remove reference to child
            return Object.keys(node.child).length === 0 && !node.isend
        }
        return false
    }
}

// Usage
const trie = new Trie()

// Insert words
trie.insert('car')
trie.insert('cart')
trie.insert('cat')
trie.insert('gym')

// Search for word 'car'
console.log(trie.search("car")) // true

// Delete the word 'cat'
trie.delete('cat')

// Search for deleted word
console.log(trie.search('cat')) // false

// Get all words starting with 'g'
console.log(trie.autoComplete("g")) // ['gym']
