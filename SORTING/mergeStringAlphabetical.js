function check(str){
    
    if(str.length<=1){
        return str
    }
    
    let mid=Math.floor(str.length/2)
    let left=check(str.slice(0,mid))
    let right=check(str.slice(mid))
    
    return merge(left,right)
   
   
}

function merge(left,right){
    let res=''
    let i=0,j=0
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res+=left[i++]
        }else{
           res+=right[j++]
        }
    }
    
    while(i<left.length){
        res+=left[i++]
    }
    
    while(j<right.length){
        res+=right[j++]
    }
    
    return res
}
let str='xyza'
console.log(check(str))