let str='mathew'

function reverse(str){
    let stack=[]
    let res=''
    for(let char of str){
        stack.push(char)
    }

    while(stack.length>0){
        res+=stack.pop()
    }

    return res
}

console.log(reverse(str))