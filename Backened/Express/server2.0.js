
import express from "express";
import http from "http" ;


// create a server 
const app = express() ;
const port1 = 5005 ;
const port2 = 5006 ;

// the http method wraps the express server to raw http server 
const server1 = http.createServer(app) ;
const server2 = http.createServer(app) ;

server1.listen(port1 , ()=>{
    console.log("server started at " , port1) ;
})

server2.listen(port2 , ()=>{
    console.log(`server started at port ${port2}`);
}) ;


app.get("/" , (req , res)=>{

    // this method implicityl converts object to json response 
    res.send({name : "Neetesh"} ) ;

})

