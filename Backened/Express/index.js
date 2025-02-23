// basic server  

import express from "express";
const app = express() ;

const PORT = 3003 ;

app.listen( PORT , ()=>{
    console.log("Server is running  at port " , PORT) ;
})


app.get('/' , ( req , res)=>{
    res.send(" <h1> Hello world </h1>") ; 
})

// nodemon is development dependency : dependcies which are not used by the application itsef but by the developer for make dvelopement easy  


app.get('/game.html' , ( req , res)=>{
    res.send(" <h1> lets games </h1>") ; 
})








