let s='a'
let t='aa'
function prefix(s,t){
   
  let obj={}
  
  for(let i of s){
      if(obj[i]){
          obj[i]++
      }else{
          obj[i]=1
      }
  }
  
  for(let i of t){
      if(obj[i]){
          obj[i]--
      }else{
          return i
      }
  }
    
    
}

console.log(prefix(s,t))