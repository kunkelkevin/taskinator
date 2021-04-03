var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
  var listItemEL = document.createElement("li");
  listItemEL.textContent = prompt("Enter your new task");
  listItemEL.className = "task-item";
  tasksToDoEl.appendChild(listItemEL);
};
buttonEl.addEventListener("click", createTaskHandler);
