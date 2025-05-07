let str='abcabaccabccabcd'

function longest(str){
    let long=0
    let left=0
    let set=new Set()

    for(let right=0;right<str.length;right++){
        while(set.has(str[right])){
            set.delete(str[left])
            left++
        }

        set.add(str[right]);
        long=Math.max(long,right-left+1)
    }
    return long
}

console.log(longest(str))