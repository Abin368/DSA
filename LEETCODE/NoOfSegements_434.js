let s = '   ada asdas dasd'


function prefix(s){
 return s.split(' ').filter(word => word !== '');
}

console.log(prefix(s))