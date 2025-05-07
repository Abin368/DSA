strs = ["flower","flow","flight"]

function prefix(strs){
let prefix=strs[0]
for(i=1;i<strs.length;i++){
    while(strs[i].indexOf(prefix)!==0){
        
        prefix=prefix.slice(0,-1)

        if(!prefix){
            return ''
        }
    }
}
return prefix
}
console.log(prefix(strs))

