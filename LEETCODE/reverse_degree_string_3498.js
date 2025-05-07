let s = "abc"

function prefix(s){
    
    s=s.toLowerCase()
   
   let sum=0
 
   for(i=0;i<s.length;i++){
      let val = s[i].charCodeAt()-96
      val=27-val 
    
      sum+=val*(i+1)
   }
 

return sum
}

console.log(prefix(s))