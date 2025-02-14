

const fs = require("fs");

const filePath = `./tasks.json`;

const command = process.argv[2];
const argument = process.argv[3];



const loadTasks = () => {

    try {
        const bufferObject = fs.readFileSync(filePath);

        const JSONStr = bufferObject.toString();

        return JSON.parse(JSONStr);

    } catch (error) {

        return [];
    }



}

const saveTasks = (tasks) => {

    const dataJSON = JSON.stringify(tasks);

    fs.writeFileSync(filePath, dataJSON);


}

const addTask = (task) => {

    const Tasks = loadTasks();
    Tasks.push({ task });
    saveTasks(Tasks);

    console.log("task added :", task);

}


const listTasks = () => {

    const Tasks = loadTasks();

    Tasks.forEach(
        (task, index) => {

            console.log(`${index + 1} - ${task.task}`)

        }
    )


}

const DeleteTask = (argument)=>{

    let index = Number(argument) -1 ;

    if(Number.isNaN(index)  || index < 0){
        console.log("index error") ;
        return ;
    }
    const Tasks = loadTasks() ;

    if(Tasks.length <= index ){
        console.log("Deletion failed : enter within the range of index")  ;
        return ;
    }

    const newTasks = Tasks.slice(0,index).concat(Tasks.slice(index+1)) ;

    saveTasks(newTasks) ;

    console.log("deleted task :",  Tasks[index]) ;
}

if (command === "add") {
    addTask(argument);
} else if (command === "list") {
    listTasks();
} else if (command === "delete") {
    
    DeleteTask(argument) ;

   
} else {
    console.log("command not found");
}



















