
//monolothik stack
function nextGreaterElement(arr){
    let stack=[]
    let res=new Array(arr.length).fill(-1)
    
    for(let i=arr.length-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=arr[i]){
            stack.pop()
        }
        
        if(stack.length>0){
            res[i]=stack[stack.length-1]
        }
        
        
        stack.push(arr[i])
    }
    
    return res
   }
   
   let arr=[3,2,4,5,1,6,9,4,7,2]
   console.log(nextGreaterElement(arr))