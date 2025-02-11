

{

    //Encapsulation
    // it is used to restrict direct access to object data
    // its purpose is to wrap the data and method in one entity called object 

    console.clear() ;
    

    class Bank{

        name ;
        constructor(name){
            this.name = name ;
        }
    }

    let myBank = new Bank( "SBI") ;
    console.log(myBank) ;
    
    
    // suppose we donot want that no one can use a variable directly maybe to protect write operation or read etc 

    class BankAccount {
        // use # to avoid acces 
        #balance = 0 ;  
        // balance = 40 ;

        deposit(amount){
            this.#balance += amount ;
            return this.#balance ;
        }

        getBalance(){
            return `$${this.#balance}` ;
        }

    }

    let myAccount = new BankAccount() ;
    //accessing private filed gives undefined 
    // console.log(myAccount.balance) ; 
    console.log(myAccount.deposit(50)) ;
    console.log(myAccount.deposit(50)) ;
    console.log(myAccount.getBalance()) ;



}

{
    // abstraction  : complex implementation hiding 
    // like we dont care what complex operation machine do to make a coffee we just want to use it to make a coffee
    // implementation of stack  and other data structures 


    class CoffeeMachine{

        #amount ;

        constructor(amount){
            this.#amount = amount ;
        }

        start(){
            return `starting the coffee Machine` ;
        }

        brewCoffee(){
            return `Brewing the coffee` ;
        }

        pressStartButton(){
            return this.start() + "," + this.brewCoffee() ;
        }

        payBill(){
            return `please pay $${this.#amount} `
        }
        
    }

    let myMachine = new CoffeeMachine(10) ;
    // console.log(myMachine.start()) ;
    // console.log(myMachine.brewCoffee()) ;
    console.log(myMachine.pressStartButton() ) ;
    console.log(myMachine.payBill()) ;


}

{

    // polymorphism 

    class Bird{

        fly(){
            return `Flying` ;
        }

    }

    class Penguin extends Bird{
        fly(){
            return `Penguin can't fly` ;
        }
    }

    let bird = new Bird() ;
    let pengn = new Penguin() ;
    console.log(bird.fly()) ;
    console.log(pengn.fly()) ;

    // when we are calling the method from Bird rather than Penguin it shows different forms 


}


{
  

    // static methods which can only be  called by class 

    class Calculator{

        static add(a , b ){
            return a + b ;
        }

    }

    console.log(Calculator.add(5 ,6 ) ) ;

    let calc = new Calculator() ;
    // console.log(calc.add(2 ,3 )) ;  cannot access the static memeber 

    // getter and setter 

    class Employee{

        constructor(name , salary ){
            this.name = name ;
            // inderScore has the special convention  for getter
            this._salary = salary ;
        }
        


        get salary(){
            console.log("hello") ;
            return `your salary is ${this._salary}` ;
        }

        set salary(amount){
            if( amount < 0 ){
                console.log("error") ;

            }else{
                this._salary = amount ;
            }
        }

    }

    let monu = new Employee("Monu" , 50) ;
    // console.log(monu.salary())  research 
    console.log(monu._salary) ;
    console.log(monu.salary) ;
    // console.log(monu.salary()) ;

    monu.salary = 100 ;
    console.log(monu.salary) ;


    

}













