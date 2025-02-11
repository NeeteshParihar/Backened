
let num1 = 12 ;
// not recommanded 
let num2 = new Number(12) ;

console.log(num1) ;
console.log(num2) ;
console.log(num2.valueOf()) ;

console.log(typeof num1 ) ;
console.log(typeof num2 ) ;


let isPlaced = false ;
let isYouPlaced = new Boolean(false) ;

console.log(isYouPlaced.valueOf()) ;


let Name = "Neetesh" ;
let yourName = new String("Neetesh") ;

console.log(yourName.valueOf()) ;



// null means no value  and undefined means your value is not defined 

let whatYouWant ;
console.log(whatYouWant) ;

whatYouWant =  null  ;
console.log(whatYouWant) ;
console.clear() ;



// strings  templates 

{

    let name = "Neetesh" ;
    let greet = `Hello ${name}` ;
    console.log(greet) ;
    // escape character /

    let firstName = "\"Neetesh Parihar\"" ;
    console.log(firstName) ;

}



// symbol  : unique , each different symbol are unique and cannot be the equal 

let sm1 = Symbol() ;
let sm2 = Symbol("cart") ;
let sm3 = Symbol("cart")
console.log(sm1) ;
console.log(sm2) ;

console.log( sm2 == sm3 ) ;

















