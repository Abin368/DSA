function anagram(s,t){
    let obj={}
    
    if(s.length!==t.length){
        return false
    }
    for(let i of s){
        if(obj[i]){
            obj[i]++
        }else{
            obj[i]=1
        }
    }
    
   for(let i of t){
       if(!obj[i]){
           return false
       }else{
           obj[i]--
           
       }
   }
   return true
}
let s = "anagram" 
let t = "nagaram"
console.log(anagram(s,t))