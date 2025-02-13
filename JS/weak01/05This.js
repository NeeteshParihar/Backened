

// "use strict" in strict mode we cannot use this in normal methods 
// using function as a constructor for the object 


function user(name){ 

    this.name = name  ;    
    console.log(this) ;
    console.log(name) ;

}




// when  the function is called  with new keyword it creates a new empty object {}  and adds a property using this keyword 
const user1 = new user("Neetesh") ;

console.log(user1) ;
console.log(typeof user1 ) ;

// when the function is called normally it uses the global object and can overwrite its property , so we can use strict mode to avoid that 

user("Neetesh") ;



const Nums = {
    size : 20 ,
    arr : [1 , 2 ,3 ,4 ,5 ] ,

    printOddNums(){

        this.arr.forEach(
            (num)=>{
                if(num%2){
                    console.log(num , this.size) ;
                }
            }
        )
    },

    prinEvenNums(){

        // call back func are not the part of  so they this keyword behaves differently

        this.arr.forEach(
            function(num){
                if(num%2 == 0 )
                    console.log(this) ;
                    console.log(num , this.size) ;
            }

        )
    }

    ,

    printPrimes(){


        const isPrime = (num)=>{

            for( let i = 2 ; i < num ; i++){
                if( num % i == 0 ) return false ;
            }

            return true ;


        }


        
        this.arr.forEach(
            function(num){
                if(isPrime(num) ){
                    console.log(num , this.size) ;
                }
            }
            ,
            this 

        )
    }

 }


 const doNothing1 =()=>{
    console.log(this) ;
 }


 Nums.printOddNums() ;
 Nums.prinEvenNums() ;

 console.clear() ;

 Nums.printPrimes() ;

 doNothing1() ;

 


