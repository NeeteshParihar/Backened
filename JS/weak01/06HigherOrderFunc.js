

// make a func taking a number and a method which process the number


const result = (func , num )=>{
    const ans = func(num ) ;
    return ans ;

}


console.log(result( (val)=>val*val , 5 )) ;  

console.log( result( (val)=>!val%2  , 5 ) ) ; 

//  make a func called processList which takes processing method and an array 

const processArray = (func , arr )=>{  
    arr.forEach( func ) ;

}

const arr = [1 ,2 ,3 ,4,5 ,6 ,7 ,8 ,9 ,10 ] ;
processArray( (val)=>console.log(val) , arr   )   ;


const arrOperation = ( func , callBackFunc , arr ) =>{
    const res =  func(arr , callBackFunc)  ;
    return  (res !== undefined) ?  res : undefined  ;  
}


console.log(   arrOperation(  (arr, func )=>arr.filter(func) , ( num)=> ( num % 2 == 0 )  , arr  )    ) ;



// closures  can access the environment from which it is returned 



const prepareFunc = ( count )=>{

    const fn = (num)=>{        
        if( count == 0 ) return 1 ;
        count-- ;
        return num * fn(num) ;
    }

    return fn ;    
   
}


console.clear() ;

const square = prepareFunc(2) ;
console.log( square(10)) ;

console.log(square(5)  , "the environment from which the square is returned have count and it is overwritten to 0 from prev call") ;

const cube = prepareFunc(3) ;
console.log(cube(5) ) ;

console.log(prepareFunc(2)(5)) ;  // the prepareFunc returning a closure and we are using a closure thats it 

console.log(prepareFunc(100)(10)) ;









