

const obj = [1 ,2,3]


console.log(   obj.toString() == JSON.stringify(obj)) ;


const data = obj.toString() ;
console.log( typeof data) 

// console.log(JSON.parse(data)) ;

const JsString =JSON.stringify(obj) ;

console.log(JSON.parse(JsString)) ;



