

// this tracks the memory used by nodejs in every 3 secs

const intervalID = setInterval(() => {
    console.log("\nMemory Usage:", process.memoryUsage());
}, 3000);

 
setTimeout(()=>{
    clearInterval(intervalID) ;

} , 20000) ;



