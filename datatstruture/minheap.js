class minHeap {
    constructor() {
        this.heap = [] // Initialize empty array to represent the heap
    }

    // Get parent index of a node
    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    // Get left child index of a node
    leftChild(i) {
        return i * 2 + 1
    }

    // Get right child index of a node
    rightChild(i) {
        return i * 2 + 2
    }

    // Swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    // Insert a new value into the heap
    insert(value) {
        this.heap.push(value)                    // Add value to end
        this.heapifyUp(this.heap.length - 1)     // Fix heap upwards
    }

    // Move the value at index upward to its correct position
    heapifyUp(index) {
        let parentindex = this.parent(index)
        while (index > 0 && this.heap[index] < this.heap[parentindex]) {
            this.swap(index, parentindex)        // Swap with parent if smaller
            index = parentindex                  // Move up the tree
            parentindex = this.parent(index)     // Update parent index
        }
    }

    // Move the value at index downward to its correct position
    heapifyDown(index) {
        let left = this.leftChild(index)
        let right = this.rightChild(index)
        let smaller = index

        // Check if left child is smaller than current
        if (left < this.heap.length && this.heap[left] < this.heap[smaller]) {
            smaller = left
        }

        // Check if right child is smaller than the smallest so far
        if (right < this.heap.length && this.heap[right] < this.heap[smaller]) {
            smaller = right
        }

        // If either child is smaller, swap and continue
        if (smaller !== index) {
            this.swap(index, smaller)
            this.heapifyDown(smaller) // Recursively fix down the tree
        }
    }

    // Remove and return the root (minimum element)
    remove() {
        if (this.heap.length === 0) return null         // If empty, return null
        if (this.heap.length === 1) return this.heap.pop() // If only one, just pop it

        let root = this.heap[0]               // Store root value to return later
        this.heap[0] = this.heap.pop()        // Replace root with last element
        this.heapifyDown(0)                   // Fix heap from top down
        return root                           // Return the removed root
    }

    // Delete a specific value from the heap
    delete(value) {
        let index = this.heap.indexOf(value)   // Find the index of the value
        if (index === -1) return false         // If not found, return false

        let lastIndex = this.heap.length - 1
        this.swap(index, lastIndex)            // Swap with the last element
        this.heap.pop()                        // Remove it from the heap

        // Try to fix the heap in both directions (safe approach)
        this.heapifyUp(index)
        this.heapifyDown(index)
    }

    // Print the current state of the heap
    print() {
        console.log(this.heap)
    }

    // Perform heap sort on an input array and return sorted array
    heapsort(arr) {
        let mh = new minHeap()
        let result = []

        // Insert all array elements into the heap
        for (let items of arr) {
            mh.insert(items)
        }

        // Remove from heap (will come out sorted for MinHeap)
        while (mh.heap.length > 0) {
            result.push(mh.remove())
        }

        return result // Sorted array
    }
}
const mh = new minHeap()

mh.insert(9)   // [9]
mh.insert(6)   // [6, 9] → 6 bubbles up
mh.insert(3)   // [3, 9, 6] → 3 bubbles up to top
mh.insert(12)  // [3, 9, 6, 12] → stays at end (no need to bubble)

mh.print()     // Output: [3, 9, 6, 12]

mh.delete(3)   // Delete the root (3), swap with last (12), heap becomes [12, 9, 6]
               // Then 12 moves down → [6, 9, 12]

mh.print()     // Output: [6, 9, 12]
