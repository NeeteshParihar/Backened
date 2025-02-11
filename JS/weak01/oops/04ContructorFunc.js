

{



    // defining the constructor function 
    // it makes easy to create objects copies of same blueprint 


    function person(name, age) {
        this.name = name;
        this.age = age;
    }



    function car(company, model) {
        this.company = company;
        this.model = model;
    }

    // its an object of type car 
    let myCar = new car("Porche", "Porche 911");

    console.log(myCar);
    console.log(typeof myCar);
    console.table(myCar);


    let anotherCar = new car("BMW", "BMW gt");
    console.table(anotherCar);

    console.log(myCar == anotherCar);

}


{


    // what happens when we did not uses new keyword 

    let secondCar = car("bugatti", "bugatti ceron");

    console.log(secondCar);

    let myCar = new car("mercedes", "mersedeese benz");
    console.log(myCar);

    // case .1 constructor func without  new keyword
    // in this case it acts as normal func and the "this" refers to the global object this is risky bcz we can overwrite some gloabl properties 
    // use strict mode 

    // case.2 constructor func with keyword "new" 
    // it creates a new object and keyword "this" refers to the object newly created object 


}

{

    //    reseacher // to refer to internal property we have to use this.propertyname 
    function Tea(type) {
        this.type = type;
        this.describe = function () {
            return `this is a cup of ${this.type}`;
        }
    }

    // it is the object of type Tea
    let myTea = new Tea("lemon tea");

    console.log(myTea);
    console.log(myTea.type);
    console.log(myTea.describe());
    console.table(myTea);


}


{

    function Animal(species) {
        this.species = species;

    }

    // i want to add more properies in the object prototype or blueprint 

    Animal.prototype.sound = function () {
        return `${this.species} makes some special sounds`
    }


    let dog = new Animal("Dog");

    console.log(dog);
    console.log(dog.sound());
    console.log(dog.hasOwnProperty("sound"));
    console.log(dog.hasOwnProperty("species"));
    console.log(Object.getPrototypeOf(dog));
    // sound is the prototype of the dog object 
    console.log(Animal.__proto__);
    console.log(Animal);


    let cat = new Animal("Cat");
    console.log(cat.sound());


}


{
    

    // check if the constructor is called with the new keyword or not 

    function Person(name){

        if( !new.target){
            throw new Error("Person must be called with the keyword new") 
        }

        this.name = name ;
    }

    let Neetesh = Person("Neetesh") ;
        
}
























