

function fetchData(){

    return new Promise( 
        (res , rej)=>{

            setTimeout(()=>{    
                
                res({
                    name : "Neetesh" ,
                    email : "neeteshparihar2212@gmail.com"
                })

            } , 4000)

        }
    )

}

// the fetch data  may takes varying and  some time
// use async keyword to run the method so it can we run separatly or asynchronusly 


// await con only we used with asyn 

async function getUserData () {

    try{

        console.log("fetching user data...") ;       

       // it returning the promise  but not the thing we need 
        const userData =  fetchData() ;
       
        console.log(userData) ; // promise 
        
         // await make sure that we waits for this process 

        const userData2 =  await fetchData() ;

        // the below part from await will bot be executed until the fetchData completely resolved or rejected 

        console.log(userData2) ; 


    }catch(error){

       
        console.log("error fetching data" , error ) ;  

    }
    
}
// this method is running asynchronuslly 
getUserData() ;
console.log("hello world") ;





// when our promise get rejected from the in the try block our catch block is executed : it treets it as an error 





function fetchVedio(){

    return new Promise((res , rej)=>{
        
        setTimeout(()=>{
            rej({
                tittle : "welcome to USA" ,
                views : 100000 
            })
        } , 3000) ;
    })

}


async function getVideos(){

    try{

        const videos = await fetchVedio() ;        
        console.log(videos) ;

    }catch(error){

        console.log(`Error fetching videos ${error}`)

    }

}


// asyn also return promises 
let val = getVideos() ;
console.log(`Who are you buddy ${val}` );

















