 

 // closures are the functions which remembers there environment in which they are created 


 function create(){
    let count = 0 ;

    return ()=> count++ ;
 }

 let increment = create() ;

 console.log( increment() ) ;
 console.log( increment() ) ;
 console.log( increment() ) ;
 console.log( increment() ) ;


