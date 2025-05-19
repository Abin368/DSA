class Graph{
    constructor(){
        this.map={}
    }
    
    
    addVertex(vertex){
        if(!this.map[vertex]){
            this.map[vertex]=[]
        }
    }
    
    insert(vertex,edge,isBirectional=false,weighted=1){
        this.addVertex(vertex)
        this.addVertex(edge)
        this.map[vertex].push({node:edge,weighted})
        if(isBirectional){
            this.map[edge].push({node:vertex,weighted})
        }
    }
    
    
    bfs(start){
        let visited=new Set()
        let queue=[start]
        visited.add(start)
        
        while(queue.length){
            let vertex=queue.shift()
            console.log(vertex)
            for(let neighbours of this.map[vertex]){
                if(!visited.has(neighbours.node)){
                    visited.add(neighbours.node)
                    queue.push(neighbours.node)
                }
            }
        }
    }
}

let graph = new Graph();
graph.insert(5, 3, true);
graph.insert(4, 5, true);
graph.insert(6, 4, true);
graph.insert(7, 6, true);
graph.insert(3, 5, true); 


graph.bfs(7);