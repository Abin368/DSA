
let arr=[6,7,8,4,5,9]
function target(arr,target){
    for(i=0;i<arr.length;i++){  // O(n)
        for(j=i+1;i<arr.length;j++){  //o(n)
            if(arr[i]+arr[j]==target){
                return [arr[i],arr[j]]
            }
        }
    }
    return -1
}
console.log(target(arr,10))


//time complexity  O(n square)
//space complexity  O(1)
