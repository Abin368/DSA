let arr=[23,12,45,10,67,34,23,67,44]

function sort(arr){

    for(i=1;i<arr.length;i++){

        let j=i-1

        let current=arr[i]

        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            j--
        }

        arr[j+1]=current
    }


    return arr
}

console.log(sort(arr))