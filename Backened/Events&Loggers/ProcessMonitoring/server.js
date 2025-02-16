

const http = require("http" ) ;
const fs = require("fs") ;
const path = require("path") ;

const PORT = 5078 ;
const server = http.createServer((  req , res)=>{

    const filePath = path.join(__dirname , req.url === '/' ? "activity_log.json" : req.url) ;  

    const fileExtName = path.extname(filePath) ;
    
    const miniTypes = {
        '.html' : 'text/html' ,
        '.json' : 'text/json' ,
        '.css' : 'text/css' ,
        '.js' : 'text/javascript' ,
        '.text' : 'text' ,
    }

    const contentType =  miniTypes[fileExtName] || "application octet-stream" ;

    fs.readFile(filePath , ( error , fileContent)=>{

        if(error){

            res.writeHead(400 , {"content-type" : contentType}) ;
            res.end( "<h1> Internal server Error </h1>") ;


        }else{

            res.writeHead(202 , {"content-type" : contentType}) ;
            res.end( fileContent , 'utf-8') ;

        }

    })



}) ;


server.listen(PORT , ()=>{
    console.log("server listening at port : " , PORT) ;

})


