

document.addEventListener("DOMContentLoaded"
    , ()=>{

        const expenseName = document.getElementById("expenseName") ;
        const expensePrice = document.getElementById("expensePrice") ;
        const addButton =  document.getElementById("addButton") ;
        const expenseList = document.getElementById("expense-list") ;
        const TotalExpense = document.getElementById("totalExpense");

        let TotalPrice = 0 ;

        document.querySelector("form")
        .addEventListener("submit" , function(event){

            event.preventDefault() ;

            const itemName = expenseName.value.trim() ;
            const itemPrice = Number(expensePrice.value);
            
            console.log(itemPrice) ;
            
            if(!itemName) {
                return ;
            }

            const newItem = document.createElement("div") ;
            newItem.innerHTML = `<p>${itemName} $${itemPrice} </p>
            <button>delete</button>` ;

            const delBtn = newItem.querySelector("button") ;

            expenseList.appendChild(newItem) ;


            TotalPrice +=itemPrice ;
            displayPrice() ;

            expenseName.value = "" ;
            expensePrice.value = "" ;

            delBtn.addEventListener("click"
                , function(){

                    newItem.remove() ;
                    TotalPrice -=itemPrice ;
                    displayPrice() ;                   

                    
                }
            ) 
            


        })

        function displayPrice(){

            TotalExpense.textContent = "" ;

            TotalExpense.textContent = `$${TotalPrice}` ;

        }


        document.getElementById("toggle")
        .addEventListener(
            "click" , function(){

                let red = 1+ Math.random()*255 ;
                let green = 1+ Math.random()*255 ;
                let blue = 1+ Math.random()*255 ;

                let color = `rgb(${red},${green} ,${blue})` ;

                document.body.style.backgroundColor = color ;

            }
        )



















    }
)