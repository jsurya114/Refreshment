class MaxHeap {
    constructor() {
        this.heap = [] // Create an empty array to represent the heap
    }

    // Get the parent index of a given node
    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    // Get the left child index of a given node
    leftChild(i) {
        return i * 2 + 1
    }

    // Get the right child index of a given node
    rightChild(i) {
        return i * 2 + 2
    }

    // Swap values at index i and j in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    // Insert a new value into the heap
    insert(value) {
        this.heap.push(value)                    // Add the new value to the end
        this.heapifyUp(this.heap.length - 1)     // Fix the heap upwards
    }

    // Move a value up the heap if it's greater than its parent
    heapifyUp(index) {
        let parentindex = this.parent(index)
        while (index > 0 && this.heap[index] > this.heap[parentindex]) {
            this.swap(index, parentindex)         // Swap if child > parent
            index = parentindex                   // Move up
            parentindex = this.parent(index)      // Update parent
        }
    }

    // Move a value down the heap if it's smaller than its children
    heapifyDown(index) {
        let left = this.leftChild(index)
        let right = this.rightChild(index)
        let larger = index

        // Compare left child
        if (left < this.heap.length && this.heap[left] > this.heap[larger]) {
            larger = left
        }

        // Compare right child
        if (right < this.heap.length && this.heap[right] > this.heap[larger]) {
            larger = right
        }

        // If either child is larger, swap and continue down
        if (larger !== index) {
            this.swap(index, larger)
            this.heapifyDown(larger)
        }
    }

    // Remove and return the maximum element (the root)
    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

        let root = this.heap[0]                 // Max value is at index 0
        this.heap[0] = this.heap.pop()          // Replace root with last
        this.heapifyDown(0)                     // Fix heap downwards
        return root
    }

    // Heap sort: convert array into max heap, remove max repeatedly
    heapsort(arr) {
        let result = []
        let mh = new MaxHeap()

        // Step 1: Insert all values into the heap
        for (let value of arr) {
            mh.insert(value)
        }

        // Step 2: Continuously remove the max (in sorted order)
        while (mh.heap.length > 0) {
            result.push(mh.remove()) // Largest values come out first
        }

        return result // This will be in descending order
    }

    // Print current heap
    print() {
        console.log(this.heap)
    }
}
const maxh = new MaxHeap()

maxh.insert(8)     // heap: [8]
maxh.insert(10)    // heap: [10, 8]
maxh.insert(8)     // heap: [10, 8, 8]
maxh.insert(10)    // heap: [10, 10, 8, 8]

maxh.print()       // Output: [10, 10, 8, 8]
console.log(maxh.heapsort([3,1,4,2,8,7]))
