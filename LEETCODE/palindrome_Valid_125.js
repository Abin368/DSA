let s = "A man, a plan, a canal: Panama"
function prefix(s){
    s=s.toLowerCase()
   let string=''
   for(i=0;i<s.length;i++){
       if(s[i]>='a' && s[i]<='z' || s[i]>='0' && s[i]<='9'){
           string+=s[i]
       }
   }
   
   let check=''
   for(j=string.length-1;j>=0;j--){
       check+=string[j]
   }
   if(string==check){
       return true
   }
   return false
}

console.log(prefix(s))