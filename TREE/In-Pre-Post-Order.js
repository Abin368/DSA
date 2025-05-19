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
//------------------------------------------
    inOrder(node=this.root){
        if(!node){
            return
        }
        
        this.inOrder(node.left)
        console.log(node.data)
        this.inOrder(node.right)
    }
//--------------------------------------------
preOrder(node=this.root){
    if(!node){
            return
        }
          console.log(node.data)
        this.preOrder(node.left)
      
        this.preOrder(node.right)
}
 
 //--------------------------------------------
postOrder(node=this.root){
    if(!node){
            return
        }
         
        this.postOrder(node.left)
      
        this.postOrder(node.right)
         console.log(node.data)
}
    
}
const binary=new Binary()
let arr=[12,32,12,11,45,64,34]
for(let num of arr){
    binary.insert(num)
}

binary.inOrder()
console.log('------------------------')
binary.preOrder()
console.log('------------------------')
binary.postOrder()