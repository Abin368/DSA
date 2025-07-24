class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }
    
    insert(data){
        const newNode=new Node(data)
        if(!this.root){
            this.root=newNode
            return
        }
        
        let current=this.root
        while(true){
            if(data<current.data){
                if(!current.left){
                    current.left=newNode
                    break
                }
                current=current.left
            }else{
                if(!current.right){
                    current.right=newNode
                    break
                }
                current=current.right
            }
        }
    }
  //------------------------------------  
    largest(k){
        let count=0
        let result=null
        
        function inorder(node){
            if(!node || result!=null)return
            
            inorder(node.right)
            count++
            if(count==k){
                result=node.data
                return result
            }
            
             inorder(node.left)
             
        }
        inorder(this.root)
        return result
    }
}
let bst=new BST()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)
bst.insert(5)
bst.insert(7)
bst.insert(8)

console.log(bst.largest(2))