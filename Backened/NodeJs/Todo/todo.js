
// import the file system module 

const fs = require("fs");

// console.log(typeof fs) ;
// console.log(fs) ;

const filePath = `./tasks.json`;

const loadTasks = () => {

    // when loading from the file operation can be failed so use try catch syntax to prevent application failiure

    try {

        // we want to wait for the read operation bcz we can't add the task until we have the array 

        const dataBuffer = fs.readFileSync(filePath);
        // data buffer is not a string so we have to convert it so it can act as json data

        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);


    } catch (error) {
        return [];
    }


}

const saveTasks = (tasks) => {

    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);

}

const addTask = (task) => {
    // we need all task array or somthing in which we can do write operation 
    // as the data present in another file we have to read it 

    const tasks = loadTasks();
    tasks.push({ task });
    saveTasks(tasks);

    console.log("tasks added :", task);

}

const listTasks = () => {
    const tasks = loadTasks();

    tasks.forEach(
        (task, index) => {

            console.log(`${index + 1} - ${task.task}`)

        }
    )
}




const command = process.argv[2];
const argument = process.argv[3];





if (command === "add") {
    addTask(argument);
} else if (command === "list") {
    listTasks();
} else if (command === "remove") {
    removeTask(parseInt(argument));
} else {
    console.log("command not found");
}




