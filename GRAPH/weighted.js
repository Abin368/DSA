class Graph{
    constructor(){
        this.adjacentList={}
    }


    addVertex(vertex){
        if(!this.adjacentList[vertex]) this.adjacentList[vertex]=[]
    }


    addEdge(v1,v2,weight){
        if(!this.adjacentList[v1]) this.addVertex(v1)
        if(!this.adjacentList[v2]) this.addVertex(v2)

            this.adjacentList[v1].push({node:v2,weight})
            this.adjacentList[v2].push({node:v1,weight})
    }
//--------------------------
    display(){
       for(let vertex in this.adjacentList){
        let edges = this.adjacentList[vertex].map((edge)=>`${edge.node} ,(${edge.weight})`).join(', ')
        console.log(vertex,'->',edges)
       }
    }

//---------------------

     dijkstra(start, end) {
        const distances = {};
        const previous = {};
        const pq = new Set(Object.keys(this.adjacentList)); 

      
        for (let vertex in this.adjacentList) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
        }
        distances[start] = 0;

        while (pq.size) {
          
            let current = null;
            for (let node of pq) {
                if (current === null || distances[node] < distances[current]) {
                    current = node;
                }
            }

            if (current === end) break;
            pq.delete(current);

    
            for (let neighbor of this.adjacentList[current]) {
                let alt = distances[current] + neighbor.weight;
                if (alt < distances[neighbor.node]) {
                    distances[neighbor.node] = alt;
                    previous[neighbor.node] = current;
                }
            }
        }

        const path = [];
        let temp = end;
        while (temp) {
            path.unshift(temp);
            temp = previous[temp];
        }

        return { distance: distances[end], path };
    }
}

const wg = new Graph();
wg.addEdge('A', 'B', 5);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'D', 3);
wg.addEdge('C', 'D', 1);
wg.display();
console.log("Shortest Path A -> D:", wg.dijkstra('A', 'D'));