

const {exec} = require("child_process") ;

exec( "pwde"  , ( error , stdout , stderr)=>{
    if(error){
        // if we put wrong info or wrong command then this error occurs
        console.log(`Error occured : ${error.message}`)
    }else if(stderr){
        // if command executed and then after some warning or error recieved this type of error or warning are captured here
        console.log(`Error occured : ${stderr}`) ;
    }else{
        // succeccfully exectuted
        console.log(`executed by script : ${stdout}`) ;
    }
})
















