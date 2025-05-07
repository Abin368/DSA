let arr=[100,1,400,2,3,45,67,4,5,78]

function longest(arr){
    let set=new Set(arr)
    let longest=0

    for(let num of set){
        if(!set.has(num-1)){
        let newNum=num
        let count=1

        while(set.has(newNum+1)){
            newNum++
            count++
        }

        longest=Math.max(longest,count)
        }
    }
    return longest
}
console.log(longest(arr))