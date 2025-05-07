let arr=[4,2,3,5,7,6]
function targetVAlue(arr,target){
let set = new Set()

for(let i of arr){
    val=target-i
    if(set.has(val)){
        return [val,i]
    }else{
        set.add(i)
    }
}

return -1
}

console.log(targetVAlue(arr,10))