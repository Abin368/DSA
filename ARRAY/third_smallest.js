let arr=[23,12,45,67,45,32,78,89,56]

function smallest(arr){
    let first=Infinity
    let second=Infinity
    let third=Infinity

    for(let num of arr){
        if(num<first){
            third=second
            second=first
            first=num
            
        }else if(num<second && num>first){
            third=second
            second=num
        }else if(num<third && num>second){
            third=num
        }
    }
    return third
}

console.log(smallest(arr

))