
// we can customise existing behaviour




setTimeout( ()=>{

    process.on('exit' , ()=>{
        process.stdout.write(`nodejs is about to end exection \n`) ;
    })

}  ,30000) ; 


process.on("SIGINT" , ()=>{
    console.log("\nprocess is interuptedd by :" , "ctrl + C") ;

    process.exit() ;
})
