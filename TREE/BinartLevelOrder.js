class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class Binary{
    constructor(){
        this.root=null
    }
    
    insert(data){
        const newNode=new Node(data)
        if(!this.root){
            this.root=newNode
            return
        }
        
        let queue=[this.root]
        while(queue.length){
            let current=queue.shift()
            if(!current.left){
                current.left=newNode
                break
            }else{
                queue.push(current.left)
            }
            
            if(!current.right){
                current.right=newNode
                break
            }else{
                queue.push(current.right)
            }
            
        }
    }
    
    
    levelOrder(){
        let queue=[this.root]
        while(queue.length){
            let current=queue.shift()
            console.log(current.data)
            if(current.left){
            queue.push(current.left)
        }
        
        if(current.right){
            queue.push(current.right)
        }
        
        }
    }
}
const binary=new Binary()
let arr=[12,32,12,11,45,64,34]
for(let num of arr){
    binary.insert(num)
}

binary.levelOrder()