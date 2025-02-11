

// object oriented programming 
//study its purpose 


let car = {

    company: "porche",
    model: "gt 911",
    year: 2018,

    start: function () {
        return `${this.company} started selling this  cars in ${this.year}`;
    },

}

console.log(car.start());
// in order to create multiple copyies for certain blueprint with some identifier we can either use functional constructor or object oriented programming 


function Person(name, age) {

    if (!new.target) {
        throw new Error("please use with new keyword");
    }
    this.name = name;
    this.age = age;
}


let Neetesh = new Person("Neetesh", 21);
console.log(Neetesh);

{
    // prototype and prototypal chain 

    function Animal(species) {
        this.species = species;
    }

    Animal.prototype.speak = function () {
        return `${this.species} can speak `;
    }

    Animal.prototype.eat = function () {
        return `${this.species} is vegeterian`;
    }

    Animal.prototype.Neetesh = function () {
        return `call by the object ${this}`
    }

    let arr = [1, 2, 3];

    let dog = new Animal("Dog");
    console.log(dog.Neetesh());
    // console.log(arr.Neetesh()) ;
    // console.log(arr.hitesh()) ;


}

{
    // injecting the properties in the array 

    Array.prototype.Who = function () {
        return `${this} is an array`;
    }

    let arr = [1, 2, 3];
    console.log(arr.Who());

    // protoype is like the classes who are bluePrints for objects 
    // research // prototype chain is way to link the objects in a chain to use their property using prototype 


}

{
    // research 
    class Vehicle {

        // research // its name is only const..
        constructor(company, model) {
            this.company = company;
            this.model = model;
        }

        // it doesnot need function keyword 
        startCar() {
            return `${this.model} of ${this.company} runnnig at the speed of ${300} km/h `
        }

        break = () => {
            return `${this.model} running slowly because of cops`;
        }


    }


    let porche = new Vehicle("Porche", "911");
    console.log(porche);
    console.log(Object.getPrototypeOf(porche));
    console.log(porche.startCar());
    console.log(`break is the property of itsSelf : `, porche.hasOwnProperty("break"));
    console.log(porche.hasOwnProperty("startCar"));
    console.log(porche.break());





}

{

    console.clear() ;


    // inheritence 
    class Vehicle{

        constructor(company , model){
            this.company = company ;
            this.model = model ;
        }

        getModel(){
            return `${this.model} is super fast` ;
        } 

    }
    
    

    class Car extends Vehicle{

        // if not declaring constructor then it borrors from parent class
        drive(){
            return `${this.model} is inherited` ;
        }

        startCar() {
            return `${this.model} of ${this.company} runnnig at the speed of ${300} km/h `
        }



    }


    let myCar = new Car("Porche" ,  "911") ;
    console.log(myCar.company) ;
    console.log(myCar.model) ;
    console.log(myCar.startCar()) ;
    console.log(myCar.drive()) ;

    console.log(myCar) ;
    console.log(Object.getPrototypeOf(myCar)) ;


    // let BMW = Car("BMW" , "gt") ;  observe 

}







































