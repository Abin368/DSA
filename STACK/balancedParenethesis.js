function parenthesis(s){
    let stack=[]
    let map={
        '}':'{',
        ']':'[',
        ')':'('
    }

    for(let char of s){
        if(char=='[' || char=='{' || char=='('){
            stack.push(char)
        }else if(char==']' ||char=='}' || char== ')'){
            if(stack.length==0 || stack.pop()!==map[char]){
                return false
            }
        }
    }
    return stack.length==0
}

let s="()]{}"
console.log(parenthesis(s))