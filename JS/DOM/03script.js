
// event handling ? 
// whenever some activity happens (event) and we wnat to responsed it , handling is called event handling


let btn = document.getElementById("clickMeButton");
console.log(btn);

// event hadnleer accpets twoarguments first is the event that we have to listen 

btn.addEventListener('click', function () {

    // console.log(this) ;
    console.log("you clicked me!");
    alert("you cliked me ")

})



// event delegation 

document.getElementById("teaList")
    .addEventListener("click", function (event) {
        // we can pass the event the actually happened // see in console
        console.log(event);

        // the place where i cliked in the list , is the target which is clicked so we can do somthing wt=ith target 

        console.log(event.target);


        // to make sure we only want to work with some elements 

        if (event.target && event.target.matches(".teaItem")) {
            console.log(`you  just clicked : ${event.target.textContent}`);

            event.target.style.padding = '10px';
            event.target.style.fontSize = "50px";
        }


    })


// working with form 

document.getElementById("feedbackForm")
    .addEventListener("submit", function (event) {

        // console.log(event) ;
        // alert(event) ;

        event.preventDefault();

        let feedback = document.getElementById("input");
        console.log(feedback.value);

        // how to hold label 

        let tag = document.createElement("p")
            ;
            tag.style.fontSize = "25px" ;
        tag.textContent = `Feedback is ${feedback.value}`;


        this.appendChild(tag) ;

        feedback.value = "" ;
        


    })



// listening when dom fully loaded

document.addEventListener("DOMContentLoaded" ,function(){   

    tag = this.createElement("p") ;
    tag.textContent = "DOM loaded fully" ; 
    tag.style.fontSize = "25px" ;

    console.log(this.body) ;

    this.body.appendChild(tag) ;

    


}
)



document.getElementById("toggleHigh")
.addEventListener("click" , function(){

    let el = document.getElementById("desText") ;

    el.classList.toggle("HighLight") ;

    

} )






