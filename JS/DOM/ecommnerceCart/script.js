document.addEventListener(
    "DOMContentLoaded", () => {

        const productContainer =
            document.getElementById("products-container");
        const cartContainer =
            document.getElementById("cart-container");
        const emptyCart =
            document.getElementById("empty-cart-response");
        const checkOutCart =
            document.getElementById("checkout-cart");
        const totalPriceContainer =
            document.getElementById("totalPrice");
        const checkoutBtn =
            document.getElementById("checkout");


        const products = [
            {
                id: 0,
                name: "laptop",
                price: 500
            },

            {
                id: 1,
                name: "vr headset",
                price: 600
            },
            {
                id: 2,
                name: "keyboard",
                price: 200
            },
            {
                id: 3,
                name: "mouse",
                price: 100
            }
        ]

        const cart = [

        ]

        let totalPrice = 0 ;


        displayProducts();



        function displayProducts() {

            products.forEach(
                (product) => {

                    const name = product.name;
                    const price = product.price;

                    const newItem = document.createElement("li");

                    const addBtn = document.createElement("button");
                    addBtn.textContent = "add To cart";

                    const ProductName = document.createElement("p");
                    ProductName.textContent = `${name} $${price}`;

                    newItem.appendChild(ProductName);
                    newItem.appendChild(addBtn);

                    productContainer.appendChild(newItem);

                    addBtn.addEventListener("click"
                        , ()=>{
                            console.log("adding to cart")
                            addToCart(product) ;
                        }
                    )

                }
            )

        }

        function displayCart() {

            cartContainer.innerHTML = "" ;

            if(cart.length == 0 ){

                emptyCart.classList.remove("hidden") ;
                checkOutCart.classList.add("hidden") ;

                return ;

            }

            cart.forEach(
                (product) => {

                    const name = product.name;
                    const price = product.price;
                    const count = product.count ;

                    const newItem = document.createElement("li");

                    const removeBtn = document.createElement("button");
                    removeBtn.textContent = "remove from cart";

                    const ProductName = document.createElement("p");
                    ProductName.textContent = `${name} $${price} , ${count} items`;

                    newItem.appendChild(ProductName);
                    newItem.appendChild(removeBtn);


                    cartContainer.appendChild(newItem);

                    removeBtn.addEventListener(
                        "click", ()=>{
                            
                            // 1. remove from the cart 


                            
                            let isCountBecameZero = -1 ;
                            for( let i = 0 ; i < cart.length ; i++){
                                
                                if(product.id == cart[i].id ){

                                    cart[i].count-- ;
                                    if(cart[i].count == 0){
                                        isCountBecameZero = i ;
                                    }
                                    
                                }

                            }

                            if(isCountBecameZero != -1){

                                cart[isCountBecameZero] = cart[cart.length-1] ;
                                cart.pop() ;

                            }

                            displayCart() ;

                            totalPrice -= product.price ;
                            displayPrice() ;





                        }
                    )

                }
            )

        }


        function addToCart(product){
             
            
            if(cart.length == 0){
                emptyCart.classList.add("hidden") ;
                checkOutCart.classList.remove("hidden") ;
            }


            let isPresent = -1 ;
            for( let i = 0 ; i < cart.length ; i++){

                if(product.id === cart[i].id){
                    isPresent = i ;
                    break ;
                }
            }

            let newITem = product ;
            if( isPresent == -1){
                newITem = {
                    ...product ,
                    count : 1 
                }

                cart.push(newITem) ;

            }else{
                cart[isPresent].count++ ;
            }

            displayCart() ;
            totalPrice+=product.price ;
            displayPrice() ;

        }

        function displayPrice(){

            totalPriceContainer.textContent = `Total price : $${totalPrice}`


        }

        checkoutBtn.addEventListener("click",
           ()=>{
            alert("pruchased") ;
           }
        )











    }
)