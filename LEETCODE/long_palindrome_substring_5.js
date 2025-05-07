let s = "abcmalayalam"

function prefix(s) {
  
  if(s.length==1) return s
  let start=0
  let end=0
  function expand(left,right){
      while(left>=0 && right<s.length && s[left]==s[right]){
          if(right-left>end-start){
              start=left
              end=right
          }
          
          left--
          right++
      }
  }

for(i=0;i<s.length;i++){
    expand(i,i)
    expand(i,i+1)
}

return s.substring(start,end+1)
}
console.log(prefix(s))
