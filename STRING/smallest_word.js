let str='aleena is da beauiful and she got nice hair s'

function smallest(str){
 let arr=str.split(' ')
 let small=arr[0]
 for(let i of arr){
    if(i.length<small.length){
        small=i
    }
 }

 return small
}

console.log(smallest(str))