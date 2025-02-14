
// import the modules 
const http = require("http") ;
const fs = require("fs") ;
const path = require("path") ;

const port = 3003 ;

const server = http.createServer() ;

server.listen( port  , ()=>{

    console.log("server is listening") ;

})



