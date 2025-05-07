let arr=[1,3,4,5,6,7,8,8,12,23,35,56,78,89,90]

function search(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
    
}

console.log(search(arr,12))