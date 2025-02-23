
const fs = require('fs') ;
const os = require('os') ;  

const EventEmitter = require("events") ;

class Logger extends  EventEmitter {

    log(message){
        // fire event 
        this.emit('message' , {message}) ;
    }   

}

const logger = new Logger() ;

const filePATH = './eventlog.txt' ;

const logToFile = (event)=>{

    const message = `\n${new Date().toISOString()} - ${event.message}` ;

    fs.appendFile(filePATH
        
         , message , (err)=>{
        if(err)
            console.log("write error in the file") ;
    })

}

// add event listener
logger.on('message' , logToFile ) ; 

const IntervalID = setInterval(()=>{

    const memoryLeftPercentage = ((os.freemem()/os.totalmem())*100).toFixed(2) ;

    logger.log(` freeMemory : ${memoryLeftPercentage}%`) ;

} ,  3000) ;


logger.log("System memory info reading started") ;

setTimeout( ()=>{
    clearInterval(IntervalID) ;  
logger.log("System memory info reading ended") ;

}, 30000)


// the process.exit is called when the nodejs script comes at the end or when we want to termiate the script from running
const HandleExit = ()=>{
    logger.log("Application is ending") ;
    setTimeout(()=>process.exit() , 1000) ;
}


// these are the cases when we can force our program to stop or terminate
process.on("exit" , HandleExit) ;
process.on("SIGINT" , HandleExit) ;
process.on("SIGTERM" , HandleExit) ;

// process is the instance of EventEmitter class which is a global object in nodejs so we can use it directory 
// process object helps us interact with runtime process of nodejs 
// provide  information about and control over the current Node.js process.


