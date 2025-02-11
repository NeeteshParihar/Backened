

// this and the context 

class car{
    constructor(model){
        this.model = model ;       
    }

    greet(){
        console.log(`super ${this.model}`) ;
    }
}


let porche = new car("porche") ;
porche.greet() ;

let greet = porche.greet.bind(porche) ;
greet() ;



const person = {
    name : "Neetesh" ,

    greet (){
        console.log(`Hi ${this.name}`) ;
    }
}


let greet2 =  person.greet ;

greet2() ;

let greet3 = person.greet.bind(person) ;

greet3() ;


