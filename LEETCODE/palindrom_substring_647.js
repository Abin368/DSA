function palindrome(s){
    let count = 0;

    function expand(left,right){
     while(left>=0 && right<s.length && s[left]==s[right]){
         count++
         left--
         right++
     }
    }

    for(i=0;i<s.length;i++){
     expand(i,i)
     expand(i,i+1)
    }
    return count
}

let s='malayalam'
console.log(palindrome(s))