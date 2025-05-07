let s='abccccdd'

function prefix(s){
    let obj={}
    let odd=false

for(let i of s){
    if(obj[i]){
        obj[i]++
    }else{
        obj[i]=1
    }
}   
let arr=Object.values(obj)
let count=0
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count+=arr[i]
    }else{
        count+=arr[i]-1
        odd=true
    }
}
if(odd){
    count++
}

return count
 
    
}

console.log(prefix(s))