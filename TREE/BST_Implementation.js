class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class Tree{
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
    //--------------------------------
    search(data,node=this.root){
        if(!node){
            return
        }
        if(data==node.data){
            return true
        }
        if(data<node.data){
            return this.search(data,node.left)
        }else{
            return this.search(data,node.right)
        }
    }
    
  //--------------------------------  
    delete(data,node=this.root){
        if(!node){
            return null
        }
        
        if(data<node.data){
            node.left=this.delete(data,node.left)
        }else if(data>node.data){
            node.right=this.delete(data,node.right)
                
            }else{
                if(!node.right && !node.left){
                    return null
                }
                if(!node.right)return node.left
                if(!node.left)return node.right
             
                let minRight=this.findMin(node.right)
                node.data=minRight.data
                node.right=this.delete(minRight.data,node.right)
            }
            return node
        }
//--------------------------------        
        findMin(node=this.root){
            while(node.left){
                node=node.left
            }
            return node
        }
  //--------------------------------      
        findMax(node=this.root){
            while(node.right){
                node=node.right
            }
            
            return node
        }
  //--------------------------------      
        inorder(node=this.root){
            if(!node){
                return null
            }
            
             this.inorder(node.left)
            console.log(node.data)
             this.inorder(node.right)
        }
  //--------------------------------      
        preorder(node=this.root){
             if(!node){
                return null
            }
            
            
            console.log(node.data)
             this.preorder(node.left)
             this.preorder(node.right)
        }
//--------------------------------        
        postorder(node=this.root){
             if(!node){
                return null
            }
            
            
          
             this.postorder(node.left)
             this.postorder(node.right)
              console.log(node.data)
        }
   //--------------------------------     
        
        findHeight(node=this.root){
            if(!node){
                return 0
            }
            return 1+Math.max(this.findHeight(node.left),this.findHeight(node.right))
        }
   //--------------------------------     
        findNode(node=this.root){
            if(!node){
                return 0
            }
            return 1+this.findNode(node.left)+this.findNode(node.right)
        }
        
//--------------------------------
        findLeave(node=this.root){
            if(!node){
                return 0
            }
            if(!node.left && !node.right){
                return 1
            }
            
            return this.findLeave(!node.left)+this.findLeave(!node.right)
        }
        
        //--------------------------------
        
        isBalanced(node=this.right){
            if(!node){
                return true
            }
            let lh=this.findHeight(node.left)
              let rh=this.findHeight(node.right)
              
           if (Math.abs(lh - rh) > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
        }

        //-----------------------------
        printLeave(node=this.root){
            if(!node){
                return
            }
            
            if(!node.left && !node.right){
                console.log(node.data)
                return
                
            }
            
            this.printLeave(node.left)
             this.printLeave(node.right)
        }
    
}

const tree=new Tree()

tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(10)
tree.insert(50)
tree.insert(60)
console.log('inorder')
tree.inorder()
console.log('preorder')
tree.preorder()
console.log('postorder')
tree.postorder()
console.log(tree.search(30))
tree.delete(30)
tree.inorder()
console.log('maxvalue')
console.log(tree.findMax().data)
console.log('minvalue')
console.log(tree.findMin().data)
console.log(tree.findHeight())
console.log(tree.findNode())
console.log(tree.findLeave())
console.log(tree.isBalanced())
console.log('print leave')
tree.printLeave()