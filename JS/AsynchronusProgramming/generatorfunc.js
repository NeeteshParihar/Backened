
function * numberGenerator(){

    yield 1 ;
    yield 2 ;
    yield 3 ;

}


console.log(numberGenerator().next().value) ;
console.log(numberGenerator().next().value) ;
console.log(numberGenerator().next()) ;

let gen = numberGenerator() ;
console.log("hello world") ;
console.log( gen.next().value) ;
console.log(   gen.next().value) ;
console.log( gen.next().value) ;

console.log(gen.next()) ;


let gen2 = numberGenerator() ;

console.log(gen2.next()) ;
console.log(gen2.next()) ;
console.log(gen2.next()) ;






