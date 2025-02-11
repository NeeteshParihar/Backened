

document.addEventListener("DOMContentLoaded", () => {


    let todoList = document.getElementById("todoList")

    let taskAddButton = document.getElementById("taskAddButton")

    let taskInput = document.getElementById("taskInput");


    let stored = JSON.parse(localStorage.getItem("tasks"))

    let tasks = stored || [];
    console.log(tasks);

    renderTasks();


    taskAddButton.addEventListener("click", addTask)

    taskInput.addEventListener(
        "keydown", (event) => {

            if (event.key === "Enter") {

                addTask();
            }
        }
    )

    let btn = document.getElementById("changeColor")

    btn.addEventListener("click" ,
        function(){
            let red = Math.random()*256 ;
            let green = Math.random()*256 ;
            let blue = Math.random()*256 ;

            document.body.style.backgroundColor = `rgb(${red} , ${green} , ${blue})` ;          



        }      

    )


    function saveTask() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }


    function renderTasks() {


        todoList.innerHTML = "";

        function render(task, index) {


            let item = document.createElement("li");

            item.innerHTML = `
            
        <span> ${index}. ${task.text}</span> 
        <button> delete </button>        
        `

            todoList.appendChild(item);

            item.querySelector("button")
                .addEventListener("click", function () {

                    item.remove();
                    tasks = tasks.filter(
                        (t) => t.id !== task.id
                    )

                    saveTask();
                    renderTasks() ;
                })

        }

        tasks.forEach((task, index) => {
            render(task, index);
        })





    }

    function addTask() {

        if (taskInput.value.trim()) {

            let newTask = {
                id: Date.now(),
                text: taskInput.value,

            }

            tasks.push(newTask);
            taskInput.value = "";

            saveTask();
            renderTasks();

        } else {
            alert("enter something");
        }

    }



})