
{

    // constructor function 
    // importance of new and this keyword 
    // accessing the internal proerties of object in function 
    // adding the prototype 
    //  throwing errors in js 
}

{
    // functional constructor 
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    // create an object 

    // object of type Person 
    let Neetesh = new Person("Neetesh", 21);
    console.log(Neetesh);



    function Drink(name, purpose) {
        this.location = "India";
        console.log(this);
        return { name, purpose };
    }

    let Coffee = Drink("coffee", "active");
    console.log(Coffee);


    let tea = new Drink("tea", "active and calm");
    console.log(tea);

    // construct by deafault returns its value but if i overwrti its return it behaves as noraml method 



}


{
    // importance of new keyoword 
    // it creates new object 
    // imporatnce of "this" keyword 
    // this gives the object refrence 


    function Institute(name , location){

        this.name = name ;
        this.location = location ;
        this.describe = function(){
            return `${this.name} is the decent institute in ${this.location}` ;
        }

    }

    let DAVV = new Institute("DAVV"  , "Indore") ;
    console.log(DAVV) ;

    let ietDAVV = Institute("IET DAVV" , "indore") ;
    console.log(ietDAVV) ;

    ietDAVV = new Institute("IEt DAVV" , "Indore") ;

    console.log( DAVV.describe()) ;
    console.log( ietDAVV.describe()) ;

    // both object created with same constructor but are diff objects and "this"  keword helps to refer its properties 

}

{


    function Animal( ){ }

    let dolPhine = new Animal() ;
    console.log(dolPhine) ;

    Animal.prototype.legs =4 ;
    Animal.prototype.giveEyes = function(eyes){
        this.eyes = eyes ;
    }

    let dog = new Animal() ;
    console.log(dog) ;
    dog.giveEyes(2) ;
    // dog.legs = 4 ;
    console.log(dog) ;
    console.log( Object.getPrototypeOf(dog)  ) ;

    /*
    protype : Animal 

     Animal.prototype.legs =4 ;
    Animal.prototype.giveEyes = function(eyes){
        this.eyes = eyes ;
    }

    the above to lines belongs to the prototype not to the object , so any changes in these will be reflected in all the objects prototype values 

    but in the giveEyes function when i added eyes 
    actually "this" keyword have the refrence of the object  , os bascially i added the property 

     */

    Object.getPrototypeOf(dog).legs = 5 ;
    console.log(dog.legs) ;

    let cat = new Animal() ;
    cat.giveEyes(2) ;

    console.log(cat.legs) ;


    

   





}


{

    function Animal(species){
        this.species = species ;
    }

    // every animal have some general treats 

    Animal.prototype.motherPlanet = "Earth" ;
    Animal.prototype.Energy = " Energy" ;
    Animal.prototype.getGenInfo = function(){
        console.log(`${this.species} belongs to ${this.motherPlanet} and needs ${this.Energy} for survival `) ;
        
    }

    Animal.prototype.setEyes = function(eyes){
        this.eyes = eyes ;
        return this ;
    }
    Animal.prototype.setLegs = function(legs){
        this.legs = legs ;
        return this ;

    }

    Animal.prototype.setSound = function(soundType){
        this.soundType = `♪♪♪ ${soundType}`  ;
        return this ;

    }

    Animal.prototype.sound = function(){
        return `${this.species} ${this.soundType}` ;
        return this ;

    }



    let cat = new Animal("cat") ;
    console.log(cat) ;
    cat.getGenInfo() ;

    console.log(cat.legs) ;
    console.log(cat.eyes) ;
    console.log(cat.sound()) ;

    // give it more features for survival 
    cat.setEyes(2).setLegs(4).setSound("Meow Meow") ;

    console.log(cat.legs) ;
    console.log(cat.eyes) ;
    console.log(cat.sound()) ; ;

    console.log(Object.getPrototypeOf(cat)) ;

   // lets make a dog 


   let dog = new Animal("Dog") ;

   dog.setEyes(2).setLegs(4).setSound("Bhounw Bhounw") ;

   dog.getGenInfo() ;
   console.log(dog.legs) ;
   console.log(dog.eyes) ;
   console.log(dog.sound()) ;


}

// if we want to use objects properties in arrow func then pass the object to it  : simple 

