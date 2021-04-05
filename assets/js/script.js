var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the taskform!");
    return false;
  }
  formEl.reset();
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  var taskActionsEl =  createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  tasksToDoEl.appendChild(listItemEl);
  taskIdCounter++;
};

var createTaskActions = function(taskId){
  var actionContainerEL = document.createElement("div");
  actionContainerEL.className = "task-actions";

  // Create edit button
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id",taskId);
   
  actionContainerEL.appendChild(editButtonEl);

  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id",taskId);

  actionContainerEL.appendChild(deleteButtonEl);

  var statusSelectEl = document.createElement("select");
  statusSelectEl.className = "select-status";
  statusSelectEl.setAttribute("name", "status-change");
  statusSelectEl.setAttribute("data-task-id",taskId);

  var statusChoices = ["To Do","In Progress","Completed"];
  for (var i=0; i<statusChoices.length; i++){
     var statusOptionEl = document.createElement("option");
     statusOptionEl.textContent = statusChoices[i];
     statusOptionEl.setAttribute("value",statusChoices[i]);

     statusSelectEl.appendChild(statusOptionEl);
  }

  actionContainerEL.appendChild(statusSelectEl);

  return actionContainerEL;
}

formEl.addEventListener("submit", taskFormHandler);
