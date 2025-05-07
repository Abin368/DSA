let str='hello world'

function reverse(Str){
let final=''
let arr=str.split(' ')
for(i=0;i<arr.length;i++){
    let res=''
    let word=arr[i]
    for(j=word.length-1;j>=0;j--){
        res+=word[j]
    } 

    final+=res
    if(i!==arr.length-1){
        final+=' '
    }
}

return final
}
console.log(reverse(str))