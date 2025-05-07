function remove(str,char,index=0,result=''){
    if(index==str.length){
        return result
    }

    if(str[index]!==char){
        result+=str[index]
    }

    return remove(str,char,index+1,result)
}

let str='i am the king in the north'
console.log(remove(str,'h'))