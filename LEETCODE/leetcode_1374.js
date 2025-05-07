let n=6

//25
function prefix(n){

 
 let res=''
 
 for(i=0;i<n;i++){
     if(n%2==1){
         res+='a'
     }else{
         if (i < n - 1) {
                res += 'a';
            } else {
                res += 'b';
            }
     }
 }
 return res
}

console.log(prefix(n))