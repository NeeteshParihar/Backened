

const http = require("http") ; 

const PORT = 5006 ;
const hostname = "0.0.0.0" ;


const server = http.createServer((req , res)=>{

    res.statusCode = 200 ;
    res.setHeader("Content-Type" , "text/plain")
    res.end("<h1> Hello world </h1>") ;

}) ;


server.listen(PORT , hostname , ()=>{
    console.log(`server is listening at : http://${hostname}:${PORT}`) ;
})