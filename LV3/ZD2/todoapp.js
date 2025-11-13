const tasks = [];

document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var taskInput = document.getElementById("todo-input");  // FIXED
    var task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
    }

    taskInput.value = "";
    displayTasks();
});

function displayTasks() {
    var ul = document.getElementById("todo-list"); // FIXED
    ul.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        li.textContent = tasks[i]; // safer than innerHTML
        ul.appendChild(li);
    }
}
