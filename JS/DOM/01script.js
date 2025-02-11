
// we can manipulate the dom (DOM manipulation)

// 1.get the Element
// 2.event listning

 // example 1

//  document.querySelector('#')

// getting element by id 
 {

// let tag = document.getElementById("changeTextButton" ) ;

// console.log(tag) ;

// tag.addEventListener('click' , 
//     function(){
//         console.log("hello event lister")
//     }
// )


}


{
 
    document.getElementById("changeTextButton").addEventListener( "click" ,
        function(){
            console.log("Hello i am event listener") ;
            console.log(this) ;

            // selecting the paragraph 

          let tag =     document.getElementById("myParagraph")

          console.log(tag) ;
          console.log(tag.textContent)

          tag.textContent = "Neetesh changed the paragraph" ;

        }
     )


}

// example 2 

{

 
    document.getElementById("CityChangeButton")
    .addEventListener("click" ,
        function(){

          let list =   document.getElementById("citiesList") ;

          console.log(list) ;
          console.log(list.firstElementChild) ;

          // access all the classes that it have 
          console.log(list.firstElementChild.classList)
         
          let child = list.firstElementChild ;

          child.classList.add("highlight" ) ;


        }
    )







}

// example 3 


{

    document.getElementById("changeOrder")
    .addEventListener("click" ,
        function(){

        let coffeType =     document.getElementById("coffeeType") ;

        coffeType.textContent = "Espresso" ; 

        coffeType.style.fontStyle = "italic" ;
        coffeType.style.backgroundColor = "brown" ;
        coffeType.style.fontSize = "25px" ;

        

        }
    )


}


{
    document.getElementById("addNewItem")
    .addEventListener("click" , 
        function(){

            let list = document.getElementById("shoppingList") ;

            // create a new element
            let newItem = document.createElement("li") ;

            newItem.textContent = "Coffee" ;
            list.appendChild(newItem) ;


        }
    )
}


{


    document.getElementById("removeLastTask")
    .addEventListener("click" ,
        function(){

            let list = document.getElementById("taskList");

            // list.remove() ;

            // the element we apply remove is got removed 

            let lastElement = list.lastElementChild ;

            lastElement.remove() ;


        }
    )
}

