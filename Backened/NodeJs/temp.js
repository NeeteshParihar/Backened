


const fs = require("fs") ;

const filePath = `./tasks.json` ;

const command = process.argv[2]  ;
const argument = process.argv[3] ;


const loadTasks = ()=>{

    try{

        const dataBuffer = fs.readFileSync(filePath) ;
        const dataJSON = dataBuffer.toString() ;
        return JSON.parse(dataJSON) ;
    }catch(error){
        return [] ;
    }
    
    
}

if(command === "add"){
    addTask(argument) ;

}






















