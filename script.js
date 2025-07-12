let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();  

    if (taskText === '') {
        alert("Please Enter a valid Task!!");
        return;
    }
    tasks.push(taskText);
    input.value = "";
    renderTasks();
}

function renderTasks() {  
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <div class="task-actions">
                <button onclick="editTask(${index})">edit</button>
                <button onclick="deleteTask(${index})">delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function editTask(index) {
    const newTask = prompt("Edit the Task:", tasks[index]);
    if (newTask != null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}


function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
