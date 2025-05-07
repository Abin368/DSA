let str='abin'
function manipulation(str,num){
   let res=''
   num=num%26
   let temp

   for(let i of str){
    if(i>='a' && i<='z'){
        temp=i.charCodeAt()+num
        if(temp>126){
            temp=96+num%126
        }
        res+=String.fromCharCode(temp)
    }else{
        res+=i
    }
   }
   return res
}

console.log(manipulation(str,3))