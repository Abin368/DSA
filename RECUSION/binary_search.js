function binary(arr,target,start=0,end=arr.length-1){
let mid=Math.floor((start+end)/2)
    if(target==arr[mid]){
        return mid
    }else if(target>arr[mid]){
        return binary(arr,target,mid+1,end)
    }else{
        return binary(arr,target,start,mid-1)
    }
}

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(binary(arr,3))