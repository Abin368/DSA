function sum(n){
    if (n==1){
        return n
    }

    return sum(n-1)+ n
}

console.log(sum(11))