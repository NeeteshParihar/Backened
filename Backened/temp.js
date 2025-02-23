
const fs = require("fs") ;
const os = require("os") ;
const EventEmitter = require("events") ;



const logger = new EventEmitter() ;


const logToFile = (event)=>{

    const message = event.message ;

    fs.appendFile('./temp.txt' , message , (err)=>{
        if(err){
            console.log("error appending in file")
        }
    }) ;   


    
}

logger.on('message' , logToFile) ;


setInterval(()=>{

    logger.emit("message" , {message : "hello world"}) ;

} , 3000) ;














