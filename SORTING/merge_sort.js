let arr = [23, 12, 45, 34, 67, 56, 90, 66, 54, 456, 221, 345, 789, 56, 4];


function mergeSort(arr){

    if(arr.length<=1){
        return arr
    }

    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))

    return merge(left,right)
}


function merge(left,right){

    let i=0,j=0
    let res=[]

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
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


console.log(mergeSort(arr))