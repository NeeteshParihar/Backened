

// it is good idea to grab the elements after dom is fully loaded 

document.addEventListener("DOMContentLoaded",
    () => {


        let todoInput = document.getElementById("todo-input");
        let addTaskButton = document.getElementById("add-task-btn");

        let todoList = document.getElementById("todo-List");


        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        tasks.forEach((task) => {
            renderTask(task);
        });


        addTaskButton.addEventListener("click",

            () => {

                if (todoInput.value.trim()) {

                    const newTask = {

                        id: Date.now(),
                        text: todoInput.value,
                        completed: false
                    }

                    tasks.push(newTask);
                    saveTasks();
                    todoInput.value = "";
                    // console.log(tasks) ;

                    todoList.innerHTML = "";

                    tasks.forEach((task) => {
                        renderTask(task);
                    });






                } else {
                    alert("enter task first");
                }


            }

        )

        function saveTasks() {

            // using local storage 
            // takes key and a value ( both are string)
            localStorage.setItem("tasks", JSON.stringify(tasks));

        }

        function clearTasks() {
            localStorage.clear();
        }

        function renderTask(task) {



            let li = document.createElement("li")

            li.setAttribute("data-id", task.id);

            if (task.completed) {
                li.classList.add("completed");
            }

            li.innerHTML = `             
              <span> ${task.text} </span>
              <button> delete </delete>            
            `

            li.addEventListener(
                "click", (e) => {

                    if (e.target.tagName = "BUTTON") 
                        return ;

                    task.completed = !task.completed ;

                    li.classList.toggle("completed") ;

                    saveTasks() ;

                }
            )

            li.querySelector("button")
            .addEventListener("click" 
                , (e)=>{
                    // because we are also listening for li click we donot have to propagate this effect further
                    e.stopPropagation() ;

                    tasks = tasks.filter( t => t.id != task.id) ;
                    li.remove() ;
                    saveTasks() ;

                }
            )

            // event bubbling 

            todoList.appendChild(li);






        }





    }
)