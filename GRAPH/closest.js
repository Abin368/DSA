class Graph{
    constructor(){
        this.map={}
    }
    
    
    addVertex(vertex){
        if(!this.map[vertex]){
            this.map[vertex]=[]
        }
    }
    
    
    insert(vertex,edge,isBidirectional=false){
        this.addVertex(vertex)
        this.addVertex(edge)
        
        this.map[vertex].push({node:edge})
        if(isBidirectional){
            this.map[edge].push({node:vertex})
        }
    }
    
    closest(start,end){
        let visited=new Set()
        const queue=[[start,0]]
        while(queue.length){
            const [current,distance]= queue.shift()
            if(current==end){
                return distance
            }
            
           if(!visited.has(current)){
               visited.add(current)
           
           for(let neighbours of this.map[current]){
               queue.push([neighbours.node,distance+1])
           }
           }
        }
        return -1
    }
}
let graph = new Graph();
graph.insert(1, 2, true);
graph.insert(2, 3, true);
graph.insert(3, 5, true); 
graph.insert(5, 7, true); 

console.log(graph.closest(3,5));