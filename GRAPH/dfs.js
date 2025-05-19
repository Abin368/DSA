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
    
    
    dfs(start){
        let visited=new Set()
        
       let dfsHelper=(vertex)=>{
          if(!vertex) return
          visited.add(vertex)
          console.log(vertex)
          
          for(let neighbours of this.map[vertex]){
              if(!visited.has(neighbours.node)){
                  dfsHelper(neighbours.node)
              }
          }
       }
       
       dfsHelper(start)
    }
}
let graph = new Graph();
graph.insert(1, 2, true);
graph.insert(2, 3, true);
graph.insert(3, 5, true); 
graph.insert(5, 7, true); 

graph.dfs(7);