class Graph{
    constructor(){
        this.adjacentList ={}
    }
//---------------------------------
    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex]=[]
        }
    }

//--------------------------------
    addEdge(v1,v2){
        if(!this.adjacentList[v1])this.addVertex(v1)
        if(!this.adjacentList[v2])this.addVertex(v2)

            this.adjacentList[v1].push(v2)
            this.adjacentList[v2].push(v1)
    }
//------------------------------------
    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex,'->',this.adjacentList[vertex])
        }
    }

//------------------------------------
    bfs(start){
        let result=[]
        let visited={}
        let queue=[start]
        visited[start]=true

        while(queue.length){
            let vertex=queue.shift()
            result.push(vertex)

            this.adjacentList[vertex].forEach(element => {
                if(!visited[element]){
                    visited[element]=true
                    queue.push(element)
                }
            });
        }

        return result
    }
//-----------------------------

dfsRecursive(start){
    let result=[]
    let visited={}
    let adjacentList=this.adjacentList

    function dfs(vertex){
        if(!vertex) return

        visited[vertex]=true
        result.push(vertex)

        adjacentList[vertex].forEach((neigbour)=>{
            if(!visited[neigbour]){
                dfs(neigbour)
            }
        })
    }


    dfs(start)
    return result
}
//----------------------------------
dfsIterative(start){
    let result=[]
    let visited={}
    let stack=[start]
    visited[start]=true

    while(stack.length){
        let vertex=stack.pop()
        result.push(vertex)

        this.adjacentList[vertex].forEach((neigbour)=>{
            if(!visited[neigbour]){
                visited[neigbour]=true
                stack.push(neigbour)
            }
        })
    }

    return result
}


//-------------------------
hasCycle() {
    const visited = {};

    const dfs = (vertex, parent) => {
        visited[vertex] = true;

        for (let neighbour of this.adjacentList[vertex]) {
            if (!visited[neighbour]) {
                if (dfs(neighbour, vertex)) return true;
            } else if (neighbour !== parent) {
                return true;
            }
        }
        return false;
    };

    for (let vertex in this.adjacentList) {
        if (!visited[vertex]) {
            if (dfs(vertex, null)) return true;
        }
    }
    return false;
}

//------------------------
countCycles() {
    const visited = {};
    const cycles = new Set();

    const dfs = (vertex, parent, path) => {
        visited[vertex] = true;
        path.push(vertex);

        for (let neighbour of this.adjacentList[vertex]) {
            if (!visited[neighbour]) {
                dfs(neighbour, vertex, path);
            } else if (neighbour !== parent) {
                // Found a cycle
                let cyclePath = [...path];
                let cycleStartIndex = cyclePath.indexOf(neighbour);
                if (cycleStartIndex !== -1) {
                    let cycle = cyclePath.slice(cycleStartIndex);
                    cycle.sort(); // sort to avoid duplicates
                    cycles.add(cycle.join('-')); 
                }
            }
        }
        path.pop();
    };

    for (let vertex in this.adjacentList) {
        if (!visited[vertex]) {
            dfs(vertex, null, []);
        }
    }

    return cycles.size;
}




}



const g1=new Graph()

g1.addVertex('A')
g1.addVertex('B')
g1.addVertex('C')
g1.addVertex('D')
g1.addEdge('A','B')
g1.addEdge('A','C')
g1.addEdge('B','C')
g1.addEdge('C','D')
g1.display()

console.log(g1.bfs('A'))
console.log(g1.dfsRecursive('A'))
console.log(g1.dfsIterative('A'))
console.log(g1.hasCycle())
console.log(g1.countCycles())