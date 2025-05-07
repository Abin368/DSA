let s='icecreasw dam'//acecreim //ieea   aeei
//abinmathew ebanmthia   //aiae  eaia 
function prefix(s){
    let vow=['a','e','i','o','u','A','E','I','O','U']  //ieea
    let res=''
    let vo=''
    for(i=0;i<s.length;i++){
        if(vow.includes(s[i])){
            vo+=s[i]
        }
    }
    
    let index=vo.length-1

    for(i=0;i<s.length;i++){
        if(!vow.includes(s[i])){
            res+=s[i]
        }else{
            res+=vo[index]
            index--
        }
    }
    
    return res
}

console.log(prefix(s))  