
// prototype inheritence basics  
// it is the way to use the properties of predefined object 
// prototype chaining : when tries to access property the access order is :  check object itself -> check prototype => check protype's prototype ans so on until reaches null 



{
    
    const animal = {
        eat: function () {
            console.log("eating...");
        }
    };

    // inherit the animal object properties 
    const dog = Object.create(animal);
    dog.eat();
    console.log(Object.getPrototypeOf(dog));
    console.log(Object.getPrototypeOf(dog).eat());

    dog.eat();
    dog.bark = function () {
        console.log("bark...")
    }
    dog.bark();

    if (Object.getPrototypeOf(dog) === animal) {
        console.log("reached protype");
    }

}

{

    console.clear();

    // make the blueprint for the instance 
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.eat = function () {
        console.log(`${this.name} is eating`);
    }

    // finsh making blueprint

    const dog1 = new Animal("seru");
    console.log(dog1);
    console.log(Object.getPrototypeOf(dog1));

    const cow = new Animal("indian cow");
    cow.eat();
    // when we initialize the object then the "this"
    // keyword points to the created object or inherited object 

}


{

    // prototype chaining 

    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.eat = function () {
        console.log(`${this.name} is eating.`);
    };

    function Dog(name, bread) {
        Animal.call(this, name);
        this.breed = bread     ;    
    }

     // create the blueprint from Animal blueprint
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.contructor = Dog ;

    Dog.prototype.bark = function(){
        console.log(`${this.name} is barking`) ;
    }

    const dog = new Dog( "Buddy" , "Golden Retiever") ;
    console.log(dog) ;

    console.log( Object.getPrototypeOf(dog) ) ;


}