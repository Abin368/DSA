let arr=[1,2,1,3,4,5,3,4,3,5,6,7,8,9,4,5,6,3,4,5,2,3,4]

 function freq(arr){
    let obj={}

    for(let i of arr){
        if(obj[i]){
            obj[i]++
        }else{
            obj[i]=1
        }
    }
    return obj
 }

 console.log(freq(arr))