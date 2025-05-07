let s = "my name is rahul  askjdkasdiud jasbd asdasgudyad"

function prefix(s){

let words=s.split(' ')
let first=-Infinity
let second=-Infinity
let firstWord=''
let secondWord=''


for(let word of words){
    let num=word.length
    if(num>first){
        second=first
        secondWord=firstWord
        first=num
        firstWord=word
    }else if(word.length<first && word.length>second){
        second=num
        secondWord=word
    }
}


return secondWord

}
console.log(prefix(s))