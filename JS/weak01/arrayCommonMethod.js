

// forEach : do not return any thing usecases : update , logging and for sideEffects 
// it runs callback function on every value 

let arr = [ 1 ,2 ,3 ,4 ,5 ] ;

// arr is the array itselft 
const callBack = ( value , index , arr)=>{

    console.log(value ) ;
    arr[index] += 1 ;   // update
}

arr.forEach(  callBack  ) ;
console.log(arr) ;

console.log("use compact way ") ;

arr.forEach( ( value ) =>{console.log(value)} ) ;

arr.forEach( ( val , index )=>{
    if( val % 2 == 0){
        arr[index] = 5 ;
    }
})

console.log(arr) ;
// map  created  a new arr by applying callback function to each elements 



let res =  arr.map( (val , i , arr)=> val*val )
console.log(arr) ;
console.log(res) ;


// filter : creates a new array of elements those passes the condition 


let numbers = [  1 ,2 ,3 ,4, 5,6 ] ;
res = numbers.filter(( val , i , arr)=>{
    if( val %2 != 0 ) return true ;
    else false ;
})



console.log( res) ;





// reduce : used to create a single value 
// accumulator : stores  the result it can be given a initial value otherwise the atarting val is given to accumulator 

{

    console.log("resduce method ") ;


    let arr1 = [ 1 ,2 ,3 ,4, 5 ] ;
    let initalVal = 0 ;

    let res = arr1.reduce( ( accum , value , index , arr )=>{
        return accum += value ;
    }, initalVal )


    // the return value is again given back to accumulator 
    console.log(res) ;

    // iteration starts from 1st index 
    res = arr1.reduce( ( accum , val )=> accum+val) ;
    console.log(res) ;

    let arr = [] ;

    // res = arr.reduce( ( res , val)=> res +val ) ; gives error 
    res = arr.reduce( ( res , val  )=>res+ val  , 0 ) ;
    console.log(res) ;
 

}


{


    // flatting the array 

    let twoDimArr = [ [1 ,2 ] , [3 ,4 ]] ;

    let res = twoDimArr.reduce( ( res , val )=> res.concat(val) , []) ;
    console.log(res) ;
    console.log( typeof res ) ;


}


