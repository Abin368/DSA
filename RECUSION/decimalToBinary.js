function convert(n,res=''){
    
   if(n==0){
    return ''
   }

   return convert(Math.floor(n/2)) + n%2

}

console.log(convert(3))