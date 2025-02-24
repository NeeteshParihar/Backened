

import express from "express" ;

// create an express server 
const app = express() ;
const port = 5005 ;

// start the server and make it listen to a port 

app.listen(port , ()=>{
    console.log("starting a server at port " , port) ;
})

// define the route so whenever someone visits '/' the callback get invoked
app.get('/' , (req , res)=>{
   const val = res.send("Its an Express Server") ;
})



