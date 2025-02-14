
// import the modules 
const http = require("http") ;
const fs = require("fs") ;
const path = require("path") ; 

const port = 3003   ;

const server = http.createServer((req , res)=>{

    const filePath = path.join(__dirname , req.url === "/" ? "index.html" : `${req.url}` ) ;

    console.log( "file path : " ,filePath) ;

    const extName = String(path.extname(filePath)).toLowerCase() ;
  
    console.log( "the file extension :" ,  extName) ;

    // defineing what type of files the server will serve or support 


    const mimeTypes = {

        '.html' : 'text/html' ,
        '.css'  : 'text/css' ,
        '.js'   : 'text/javascript' ,
        '.png'   : 'text/png' ,
    }

     // spplication/octet-stream is a generic binary file 
    const contentType = mimeTypes[extName] || 'application/octet-stream' ;


    // reading and writing 

    fs.readFile(
        filePath  , ( err , content)=>{
            if(err){

                if(err.code === "ENOENT"){

                    res.writeHead(404 , {"Content-Type" : "text/html"}) ;

                    res.end( "404: File Not Found BRoooo") ;

                }

            }else{
                res.writeHead( 200 , {'Content-Type' : contentType}) ;
                res.end(content , 'utf-8') ;
            }
        }
    )



       

    

}) ;

server.listen( port  , ()=>{

    console.log("server is listening on port" , port ) ;

})



