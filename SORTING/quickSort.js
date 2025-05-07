function quick(arr){

   if(arr.length<=1) return arr
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quick(left),pivot,...quick(right)]

}
let arr = [23, 12, 45, 34, 67, 56, 90, 66, 54, 456, 221, 345, 789, 56, 4];
console.log(quick(arr))