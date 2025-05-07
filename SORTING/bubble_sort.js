let arr=[23,11,45,67,32,11,0,2,1,67,89]

function bubble(arr){

    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr

}

console.log(bubble(arr))