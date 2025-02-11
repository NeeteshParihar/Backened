
// understanding the paradigms in the programming languages 

// types : oops , procedural , prototype etc 

let google = {
    mail : "gmail" 
}

let  instagram = {
    social : "social media" 
}

// instgram wants to access the mail feature of the google 

{
 
    //method one  : give the prototype of google to the instagram in the object body  : it takes navigation to object 
    let google = {
        mail : "gmail" ,
    }

    // use the prototype of googel to use its properties ( product without creting or duplicating them
    let instagram = {
        social :  "social media" ,
        __proto__ : google ,
    }
  
    console.log(instagram.mail) ;
    console.log(instagram.__proto__) ;
    console.log(Object.getPrototypeOf(instagram)) ;  

}


{

    // now instagram want to access it without navigating to its object 

    let google = {
        mail : "gmail" ,
    };

    let instagram = {
        social : "social media" ,
    };

    // read as set the prototype of instagram as google 
    Object.setPrototypeOf(instagram , google) ;

    console.log( instagram.mail ) ;
    console.log(instagram.__proto__.mail) ;
    console.log(Object.getPrototypeOf(instagram)) ;
    console.log(Object.getPrototypeOf(instagram).mail) ;
    console.log(instagram.hasOwnProperty('mail')) ;

}



{
  

    let  Twitter = {
        Twitter :   "twitter" ,
        audience : "gen professionals"
    }

    let thread = {
         thread : "twitter clone" ,
        audience : "gen non professionals"

    }
    

    Object.setPrototypeOf(thread , Twitter) ;
    // now we can use the prototype of twitter 

    console.log(thread.thread)  ;
    console.log(thread.audience) ; // it has its own property so it dont try to access the prototype property 

    console.log(Object.getPrototypeOf(thread).audience ) ;

    // chnaging the property value in the protype 

    Object.getPrototypeOf(thread).audience = "its twitter audience " ;

    // affects the original objects property 
        console.log(Object.getPrototypeOf(thread).audience ) ;
    console.log(Twitter) ;


}


{

    let google = {
        mail : "gmail" ,
        browser : "chrome",
    };

    let instagram = {
        social : "social media" ,
    }

    let thread = {
        audience : "influencers"
    }

    Object.setPrototypeOf(thread , instagram) ;
    Object.setPrototypeOf( instagram , google ) ;

    console.log(thread.mail) ;
    console.log(instagram.mail) ;
    console.log(google.mail) ;


}


{


    let google = {
        mail : "gmail" ,
        browser : "chrome" ,

    };


  

    let  instgram = {
        social : "social media" ,
    } ;

    let facebook = {
        audience : "youngsters"   ,
    };


    Object.setPrototypeOf(instagram , google) ;
    Object.setPrototypeOf(facebook , google) ;


    let WhatsApp = {
        purpose : "communication" ,
    } ;


    // Object















}








