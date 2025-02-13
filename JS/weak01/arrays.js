
// arrays in the javaScript 

let teaFlavors = [ "greentea" , "black tea" , "oolong tea"] ;

// second way 

let teaTypes = new Array("greentea" , "black tea" , "oolong tea") ;

console.log(teaFlavors) ;
console.log(teaTypes)   ; 

console.log( typeof teaFlavors) ;
console.log(typeof teaTypes) ;

let firstValueFl = teaFlavors[0] ;
console.log(firstValueFl) ;
let firstValueTy = teaTypes[1]  ;
console.log(firstValueTy) ;



const cities = ["mumbai" , "London" , "vietnam" , "tokyo"] ;
let thirdCity = cities[2] ;
console.log(thirdCity) ;

cities.push("shangai") ;
console.log(cities)    ;

// another way  to add
cities[cities.length] = "lastCity" ;
console.log(cities) ;


// removing the last element using the pop method 

const teaOrders = ["chai" , "iced tea" , "matcha" , "earl"] ;
console.log(teaOrders) ;
let removedValue = teaOrders.pop() ;
console.log(removedValue) ;
console.log(teaOrders) ;



let teaHot = [ "black tea" , "milked tea" , "masala tea"] ;
let softTea = teaHot ; // its taking refrence of the arr memory block , and start refrencing them independtly  


console.log(teaHot) ;
console.log(softTea) ;
teaHot[0] = "olong tea" ;
console.log(teaHot)  ;
console.log(softTea) ;

softTea.pop() ;
console.log(teaHot)  ;  


let emptyArr = [] ;
console.log(emptyArr.pop());



// hardcopy of the array 


let topCities = ["Berlin" , "newYork" , "Tokyo"] ;
let hardcopy = [...topCities] ;   // spread operator
console.log(topCities) ;
topCities.pop() ; 
console.log(hardcopy) ;  

let hardCities = hardcopy.slice() ; 
console.log(hardCities) ;

// merging two arrays   

let europianCities = ["Paris" , "Rome"] ;
let asianCities = ["Tokyo" , "Bangkok"] ;

let worldCities  = europianCities + asianCities ;  // not the good way 
console.log(worldCities) ;
console.log(typeof worldCities) ; // its string not array 

worldCities = europianCities.concat(asianCities) ;
console.log(typeof worldCities) ;  // its an array 
console.log(worldCities) ;


// getting the length of the array 

let len = worldCities.length ; // length is the property of the arr 
console.log(len , worldCities)  ;


// checking the presence of the value in the array 

let cityBucketList = ["Tokyo" , "London" , "Cape Town" , "Vancouver" ] ;

let isLondonINList = cityBucketList.includes("London") ;
console.log(isLondonINList) ;

// learn and explore the array in mdn docs 


let arr = [1 ,2 ,3 , 4 ] ;
arr.reverse() ;
console.log(arr) ;


let arr2 = arr ; 

console.log(arr == arr2 ) ;
console.log(arr === arr2 ) ;
arr2[0] = "5" ;
console.log(arr === arr2 ) ; 


// shallow copy in-depth 

let List1 = [ "Mumbai" , "Tokyo" , "NY" , "cape Town"] ;
let List2 = List1.slice(1 , 3)

console.log(List1 ) ;
console.log(List2) ;

List2[0] = "Delhi" ;
console.log(List2 ) ;
console.log(List1) ;



// comparsion of primitives 

let num1 = 5 ;
let num2 = "5" ;

console.log(num1 == num2 ) ; // compared by the value 
console.log(num1 === num2 ) ; // checks if both types are same 


// as in case of non-primites : objects 
// from both the operators == and === comapared by properties , value and the refrence as the type is same 

let obj1 = {
    Name : "Neetesh" ,
    age : 21 
}

let obj2 =  {
    Name : "Neetesh" ,
    age : 21 
}

let obj3 = obj1 ;  

console.log("comparing the objects ") ;
// == and === are same for object 
console.log(obj1 === obj2 ) ; 
console.log(obj1 == obj2 )  ;

console.log(obj1 === obj3 ) ;
console.log( obj1 == obj3 ) ;



console.log( obj1 !== obj3 ) ;




 
  







