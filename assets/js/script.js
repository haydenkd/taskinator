var buttonE1 = document.querySelector(".btn");
var taskList = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.textContent = "Hello";
    taskList.appendChild(taskItem);
}

buttonE1.addEventListener("click", createTaskHandler);