// Graph class using an adjacency list representation
class Graph {
    constructor() {
        // Initialize an empty adjacency list
        this.adjacentlist = {};
    }

    // Add a new vertex to the graph
    addvertex(vertex) {
        // If the vertex doesn't exist, create a new set for it
        if (!this.adjacentlist[vertex]) {
            this.adjacentlist[vertex] = new Set();
        }
    }

    // Add an edge (connection) between two vertices
    addegdges(vertex1, vertex2) {
        // If vertex1 or vertex2 doesn't exist, add them first
        if (!this.adjacentlist[vertex1]) {
            this.addvertex(vertex1);
        }
        if (!this.adjacentlist[vertex2]) {
            this.addvertex(vertex2);
        }

        // Since this is an undirected graph, add vertex2 to vertex1's set and vice versa
        this.adjacentlist[vertex1].add(vertex2);
        this.adjacentlist[vertex2].add(vertex1);
    }

    // Check if there's an edge between two vertices
    hasedges(vertex1, vertex2) {
        // Both directions must have the connection
        return (
            this.adjacentlist[vertex1].has(vertex2) &&
            this.adjacentlist[vertex2].has(vertex1)
        );
    }

    // Display all vertices and their connections
    display() {
        for (let vertex in this.adjacentlist) {
            console.log(vertex + " => " + [...this.adjacentlist[vertex]].join(", "));
        }
    }

    // Remove an edge between two vertices
    removeedges(vertex1, vertex2) {
        this.adjacentlist[vertex1].delete(vertex2);
        this.adjacentlist[vertex2].delete(vertex1);
    }

    // Remove a vertex and all edges connected to it
    removevertex(vertex) {
        if (!this.adjacentlist[vertex]) return;

        // Remove the edge from all adjacent vertices
        for (let adjacentvertex of this.adjacentlist[vertex]) {
            this.removeedges(vertex, adjacentvertex);
        }

        // Finally, delete the vertex itself
        delete this.adjacentlist[vertex];
    }

    // Breadth-First Search (BFS) - level by level traversal
    bfs(start) {
        let visited = new Set(); // Track visited nodes
        let queue = [start];     // Queue for BFS

        while (queue.length > 0) {
            let node = queue.shift(); // Remove from front of queue

            if (!visited.has(node)) {
                console.log(node);         // Print the node
                visited.add(node);         // Mark as visited

                // Add all unvisited neighbors to the queue
                for (let neighbour of this.adjacentlist[node]) {
                    queue.push(neighbour);
                }
            }
        }
    }

    // Depth-First Search (DFS) - go deep before wide
    dfs(start) {
        let visited = new Set(); // Track visited nodes

        const dfsrecurr = (vertex) => {
            if (!vertex) return;

            console.log(vertex);        // Print the vertex
            visited.add(vertex);        // Mark as visited

            // Recur for all unvisited neighbors
            for (let neighbour of this.adjacentlist[vertex]) {
                if (!visited.has(neighbour)) {  // <-- fixed this line!
                    dfsrecurr(neighbour);
                }
            }
        };

        dfsrecurr(start); // Start DFS from the given node
    }
}
// 👉 Example usage:
const g = new Graph();
g.addvertex("A");
g.addvertex("B");
g.addvertex("C");

g.addegdges("A", "B");
g.addegdges("A", "C");
g.addegdges("B", "C");

console.log("Graph Display:");
g.display();

console.log("BFS Traversal:");
g.bfs("A");

console.log("DFS Traversal:");
g.dfs("A"); 