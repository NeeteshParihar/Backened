

// promises are the values that represents the availibity of the response in the future 
 
function fetchData(){

    return  new Promise(

        (resolve , rejected)=>{

           setTimeout( ()=>{
            let success = true ;

            if( success){
                resolve("Data fetched successfully") ;

            }else{
                rejected("Error fetching data" ) ;
            }
           } , 4000) 

        }
    )

}


let response = fetchData() ;

console.log(response) ;

// whenever response is available the code executes : asynchrnuslly 
{
response
    .then(
        (dataWhenStateisFullfilled)=>{
            console.log(dataWhenStateisFullfilled) ;
        }
    )
    .catch(
        (error)=>{
            console.log(error) ;
        }
    )

  }  

console.log(typeof response)

setTimeout(()=>console.log(response) , 4000 ) ;



// promise chaining 





function fileRead(){

    return new Promise(
        (res , rej )=>{

            setTimeout(()=>{

                res("file reading complete")               

            }, 3000)


        }
    )
}


fileRead()
    .then((message)=>{
        console.log(message) ;
        return "hello neetesh" ;
    }
    )
    .then((m)=>{
        console.log(m) ;
        return new Promise((r1 , r2)=>{

            r2("this is how to give the eror") ;

        })
    })
    .catch((e)=>{
        
        console.log(e) ;

    })

    // the chaining like then also returns the promise 



    
 