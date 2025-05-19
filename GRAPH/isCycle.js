class Graph {
    constructor() {
      this.map = {}; // Adjacency list
    }
  
    addVertex(vertex) {
      if (!this.map[vertex]) {
        this.map[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
  
     
      this.map[vertex1].push(vertex2);
      this.map[vertex2].push(vertex1);
    }
  
    display() {
      for (let vertex in this.map) {
        console.log(`${vertex} => ${this.map[vertex].join(', ')}`);
      }
    }
  
    hasCycle() {
      const visited = new Set();
  
      const dfs = (vertex, parent) => {
        visited.add(vertex);
  
        for (let neighbor of this.map[vertex]) {
          if (!visited.has(neighbor)) {
            if (dfs(neighbor, vertex)) return true;
          } else if (neighbor !== parent) {
            return true; 
          }
        }
  
        return false;
      };
  
      for (let vertex in this.map) {
        if (!visited.has(vertex)) {
          if (dfs(vertex, null)) return true;
        }
      }
  
      return false;
    }
  }
  

  const graph = new Graph();
  graph.addEdge("1", "2");
  graph.addEdge("2", "3");
  graph.addEdge("3", "1");
  
  
  graph.display();
  console.log("Has cycle:", graph.hasCycle());
  