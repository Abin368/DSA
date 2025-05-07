let arr=[10,6,3,4,6,4,5,6,6,4,5,6,7,8,9,67,89,6,0]
function target(arr,tar){
    let res=[]
    let count=0
    for(let i of arr){
        if(i!=tar){
            res.push(i)
        }else{
            count++
        }
    }

    while(count>0){
        res.push(tar)
        count--
    }
    return res
}

console.log(target(arr,6))