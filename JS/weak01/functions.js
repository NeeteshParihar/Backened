

// functions 


function MakeSoftware(softWareName) {
    return `Making ${softWareName}` ;
}

let getSoft = MakeSoftware("chatApplication") ;
console.log(getSoft) ;




// child helper function of a function 


function fact(n){

    // child method for the help of parent method 
    function calcFact(n){
        if( n == 0 ) return 1 ;
        return n * calcFact(n-1) ;
    }

    var ans = calcFact(n) ;

    return ans ;
}

console.log(fact) ;
console.log(typeof fact ) ;

console.log(fact(5) ) ;

// console.log( ans ) ;  we can not access 
// console.log(calcFact(5)) ;  


if( typeof fact === "function" ) 
    console.log("yes its a function") ;
else 
    console.log("its nota function") ;



const fibonacci = (n)=>{

    if(n <= 1 ) return n ;
    else  return fibonacci(n-1) + fibonacci(n-2) ; 

}    


let val = fibonacci(10);
console.log(val ) ;


const palindrome = function(text){

    let start = 0 , end = text.length -1 ;  

    const check =  function ( text  ){

        if( start > end ) return true ;
        let ans = text[start++] == text[end--] && check(text) ;
        start-- , end++ ;
        return ans ;
    }

    let isPalindrome = check( text ) ;
    console.log(start , end ) ;

    return isPalindrome ;

}


console.log(palindrome("naman")) ;
console.log(palindrome("Neetesh")) ;



console.clear() ;


// this in javascript 


function nothing(){
    console.log(this) ;
    console.log(typeof this ) ;
    return this ;
}
console.clear() ;

let v = nothing() ;

let v2 = this ;


console.log(v) ;


console.log(v2 , "v2") ; 



const person = {

    Name : "Neetesh" ,
    greet : function(){
        console.log(`hello ${this.Name}` )
        console.log(this)
        return this ;
    },

    getName : ()=>{
        console.clear() ;
        console.log(this.Name) ;
        console.log(this) ;

        // the "this" value is not refrencing the object 
    },

}

person.greet().getName() ;

person.setName = (name)=>{
    this.Name = name ;
}

person.setName("Nitesh") ;

console.log(person.Name) ;

person.setName = function(name){
    this.Name = name ;
}


person.setName("Nitesh") ;
console.log(person.Name) ;

// in summary in order to get the object refrence use the  claassic funtion or instead write this  keyword less code 






