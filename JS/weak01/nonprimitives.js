

// non primitives data types 

const user = {
    Name : "Neetesh" ,
    email : "neeteshparihar22@gmail.com",   
    "new address" : "IET DAVV" ,
}

console.log(user) ; 
console.log(typeof user ) ; 

// accessing the values of objects or keys 

console.log(user.Name ) ;
console.log(user.email) ;

// accessing using dot for this type of values is not possible so use [] 
console.log(user["new address"])  

console.log( user["Name"]) ;
console.log(user["email"]) ;


// important  we cannot change the const types i.e cannot initialize the other memory for that  
// user = {
//     Name : "Neetesh" 
// }


user.Name = "Nitesh" ;
console.log(user) ;


// inbuilt objects 

let today = new Date() ;
console.log(today) ;
console.log(today.getDate() , today.getDay() )  ;


// array 

console.clear() ;

let arr = ["India"  , "Neetesh" , 21 ] ;
console.log(arr) ;

console.log(arr[0]) ;

for( let i = 0 ; i < arr.length ; i++ ){
    console.log(arr[i]) ;
}



console.clear() ;
// automatic typeconversion or implicit type-conversion 

// operations with string  + concanate every thing 

console.log("Neetesh" + 21) ;
console.log("2" + "1") ;

// operation with -  in this case as this is going to be a mathematical expression  the result is either NaN or a number 

console.log("5" - "5") ;
console.log("5" - 1 ) ;
console.log("Neetesh" - 1 ) ;   // trying to convert "Neetesh " to number result in NaN 


// explicit type conversion 

let num = Number("22") ;
console.log( num ) ;
console.log(typeof num ) ;

console.log( Number("")  , Number(false)  , Number(undefined) , Number(null)) ;
console.log(String(true)  , String(undefined) , String(null) , String(NaN)) ; 
console.log(Boolean(0)  , Boolean(undefined) , Boolean(NaN)  , Boolean(null)) ; 



























