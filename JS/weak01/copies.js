


// primites  : are copied by value hence creates deep copy  
// changing one would not affect other 

const { json } = require("express");

let num1 = 5 ;
let num2 = num1 ;
num1 = 10 ;
console.log(num1 ) ;
console.log(num2) ;

console.clear() ;


// objects 

let obj1 = {
    Name : "Neetesh" ,
    age : 21 , 
    education : [
        "iet davv",
        "global"
    ]
}

let obj2 = obj1 ;       // we are not creating   any object we are just refrencing to the shame memory

console.log(obj2 === obj1  ); // compared by refrence 
console.log(obj1 == obj2  ) ;  



// shallow copy 

let obj3 = {...obj1} ;

// the top level properties are duplcated  if they are primitvies in new obj but the nested are shame 

console.log(   `obj1 and obj2 are equal : ${obj3 == obj1  }`) ;    
console.log(  `obj1 and obj2 nested equal : ${obj3.education == obj1.education}` ) ;


{

    let obj1 = {
        arr :[
             1 ,2 ,3 
        ]
    }

    // its not a shallow copy 
    let obj2 = obj1 ;  // refrence assignment
    // when all the properties are compared their refrence is the same memory 
    console.log(obj1 == obj2  ) ;        
}


// creating a deep copy 

{


    let obj1 = {
        Name : "Neetesh" ,
        age : 21 , 
        education : [
            "iet davv",
            "global"
        ]
    };


    // this way we can create a deep copy i.e duplicated all the nested levels 

    let obj2 = JSON.parse(JSON.stringify(obj1)) ;

    console.log(obj2.education == obj1.education) ; 

    
}



// copies in array  is also an object

let arr1 = [ 1 ,2, [1 ,2,3 ]] ;

let arr2 = arr1 ;

console.log(arr1 == arr2) ;    // its not a copy 


// shallow copy 

arr2 = [...arr1] ;
console.log(arr2 == arr1 ) ;
console.log( arr1[2] == arr2[2]) ; // refrencing the same memory address 


// deep copy 

{



    let arr1 = [ 1 ,2, [1 ,2,3 ]] ;

    let arr2 = JSON.parse(JSON.stringify(arr1)) ;
    console.log( arr1[2] == arr2[2]) ;
}





























































