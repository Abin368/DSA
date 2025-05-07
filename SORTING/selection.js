
//selection
function check(arr){
    let n=arr.length
    
    for(i=0;i<n;i++){
        
        let minindex=i
        
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[minindex]){
                minindex=j
            }
        }
        
        if(minindex!=i){
            let temp=arr[i]
            arr[i]=arr[minindex]
            arr[minindex]=temp
        }
    }
    
    return arr
  
}
let arr=[23,12,45,34,2,5,1,67,54,89]

console.log(check(arr))