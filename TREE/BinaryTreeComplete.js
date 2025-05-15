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
        return
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
                return
                
            }else{
                queue.push(current.left)
            }
            
            if(!current.right){
                current.right=newNode
                return
            }else{
                queue.push(current.right)
            }
        }
    }
    
    //inorder
    inorder(node =this.root){
        if(!node)return
         this.inorder(node.left)
        console.log(node.data)
         this.inorder(node.right)
    }
    
    //preorder
    
    preorder(node=this.root){
        if(!node)return
        console.log(node.data)
         this.preorder(node.left)
         this.preorder(node.right)
    }
    
    //postorder
    postorder(node=this.root){
        
        if(!node)return
         this.postorder(node.left)
         this.postorder(node.right)
        console.log(node.data)
        
    }
    
    levelorder(){
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
    
    
    search(value){
        if(!this.root){
            return
        }
        
        let queue=[this.root]
        
        while(queue.length){
            let current=queue.shift()
            if(current.data===value)return true
            
             if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        
        return false
    }
    
    
    delete(value){
        if(!this.root){
            return
        }
        
        if(this.root.data==value && !this.root.left &&!this.root.right){
            this.root=null
        }
        
        let queue=[this.root]
        let parentoflastnode=null
        let nodetodelete=null
        let lastnode=null
        while(queue.length){
            let current=queue.shift()
            if(current.data==value){
                nodetodelete=current
            }
            
            if(current.left){
                queue.push(current.left)
                parentoflastnode=current
            }
             if(current.right){
                queue.push(current.right)
                parentoflastnode=current
            }
            
            lastnode=current
        }
        
        if(nodetodelete && lastnode){
            nodetodelete.data=lastnode.data
        }
        if(parentoflastnode.left==lastnode){
            parentoflastnode.left=null
        }
        if(parentoflastnode.right==lastnode){
            parentoflastnode.right=null
        }
    }
    
    height(node=this.root){
        if(!node){
            return 0
        }
        
       return 1+Math.max(this.height(node.left),this.height(node.right))
    }
    
    countNode(node=this.root){
        if(!node){
            return 0
        }
        
        return 1+(this.countNode(node.left)+this.countNode(node.right))
    }
    
    countLeaf(node=this.root){
        if(!node){
            return 0
        }
        if(!node.left && !node.right){
            return 1
        }
        
        return this.countLeaf(node.left)+this.countLeaf(node.right)
    }
    
   isBalanced(node = this.root) {
        if (!node) return true;
        const lh = this.height(node.left);
        const rh = this.height(node.right);

        if (Math.abs(lh - rh) > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
}

const tree=new Tree()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)
tree.insert(60)
console.log('inorder:')
tree.inorder()
console.log('preorder:')
tree.preorder()
console.log('postorder:')
tree.postorder()
console.log('levelorder:')
tree.levelorder()
console.log(tree.search(200))
tree.delete(20)
tree.levelorder()
console.log('-------------------')
console.log(tree.height())
console.log('-------------------')
console.log(tree.countNode())
console.log('-------------------')
console.log(tree.countLeaf())
console.log("Is Balanced:", tree.isBalanced());