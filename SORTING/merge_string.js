let arr=['abin','man','of','mathew','ashbin','sheeba','a']

function merge(arr){
    
    if(arr.length<=1){
        return arr
    }
    
    let mid=Math.floor(arr.length/2)
    let left=merge(arr.slice(0,mid))
    let right=merge(arr.slice(mid))
    
    return mergeSort(left,right)
}


function mergeSort(left,right){
    let res=[]
    let i=0,j=0;
    
    while(i<left.length && j<right.length){
        if(left[i].length<right[j].length){
            res.push(left[i++])
        }else{
            res.push(right[j++])
        }
    }
    
    while(i<left.length){
        res.push(left[i++])
    }
    
    while(j<right.length){
        res.push(right[j++])
    }
    
    return res
}

console.log(merge(arr))