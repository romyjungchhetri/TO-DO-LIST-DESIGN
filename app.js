// Get the input field and button
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-btn");

// Get the task list
const taskList = document.getElementById("task-list");

// Add a new task to the list
function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() === "") {
    return;
  }

  const newTask = document.createElement("li");
  newTask.innerText = taskText;
  newTask.classList.add("list-group-item");
  taskList.appendChild(newTask);
  newTaskInput.value = "";

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("btn", "btn-danger", "btn-sm", "float-right", "ml-2");
  newTask.appendChild(deleteButton);

  // Add complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.classList.add("btn", "btn-success", "btn-sm", "float-right");
  newTask.appendChild(completeButton);

  // Handle delete button click
  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });

  // Handle complete button click
  completeButton.addEventListener("click", () => {
    newTask.classList.toggle("completed");
  });
}

// Add task when the button // is clicked or Enter is pressed
addTaskButton.addEventListener("click", addTask);
newTaskInput.addEventListener("keypress", (event) => {
if (event.key === "Enter") {
addTask();
}
});
