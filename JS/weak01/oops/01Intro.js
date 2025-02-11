

// the object oriented programming is one of the paradigm in the way of writing the code 

// types : object oriented , procedural and prototype , js is prototype programmng language 

// learn what is instance 
// instance is made from the blueprints of something like classes 

// protoype based and class-object based 

// protoype means the variable are with the some extra properties : can be seen in the web console 



let computer = {
    cpu : 12 
}

let lenovo = {
    ram : 4
}

let tomHardware = {} ;

// run this in browser 
console.log( computer.__proto__) ;
// by default the __proto__ is empty means has object with no properties 
// we can overwrite its value by defining our __proto__ value 


{


    let computer = {
        cpuCore : 12 
    }

    let lenovo = {
        cpuThreads : 8 ,
        __proto__ : computer 
    }

    console.log(computer) ;
    console.log(  `lonovo` ,  lenovo) ;
    console.log(`lonovo __proto__ : `  , lenovo.__proto__) ;
    console.log( lenovo.__proto__.cpuCore) ;
    // it only look in the prototype if the property is absent in the object itself 
        console.log(  "cpu core " ,lenovo.cpuCore) ;




}

{


    let genericCar = {
        tyres : 4 ,
        orgin : "i am not from tesla"
    }

    let tesla = {
        driver : "AI" ,
    }

    console.log(tesla) ;
    Object.setPrototypeOf(tesla , genericCar) ;
    console.log(tesla) ;
    console.log( "tesla prototype : " ,tesla.__proto__) ;
    console.log( tesla.__proto__.tyres) ;
    console.log(tesla.tyres) ;
    console.log(`tesla ` , Object. getPrototypeOf(tesla)) ;
    console.log( tesla.hasOwnProperty('tyres')) ;  // these are iheritedd property 
     

}
 































