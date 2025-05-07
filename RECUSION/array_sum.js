function sum(arr,index=0){
if(index>=arr.length){
    return 0
}

return arr[index]+sum(arr,index+1)
}
let arr=[2,3,4,5,6]
console.log(sum(arr))