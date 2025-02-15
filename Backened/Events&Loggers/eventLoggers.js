const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");

console.log(typeof EventEmitter);

class Logger extends EventEmitter {
    log(message) {
        this.emit("message", { message } );
    }
}



const logger = new Logger();
const logFile = "./eventlog.txt";

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message}\n`;

    fs.appendFile(logFile, logMessage, (err) => {
        if (err) console.error("Failed to write log:", err);
    });
};

// Attach event listener before logging
logger.on("message", logToFile); 
logger.on("error", (err) => console.error("Logger error:", err));

const intervalID = setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Current free memory: ${memoryUsage.toFixed(2)}%`);
}, 3000);

logger.log("Application started");

setTimeout( ()=>{

    clearInterval(intervalID) ;

} , 60000)
