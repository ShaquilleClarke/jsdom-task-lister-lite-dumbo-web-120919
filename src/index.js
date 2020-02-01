document.addEventListener("DOMContentLoaded", () => { //everything will be rendered here first

  //get the form and input fields by id
  const newTaskForm = document.querySelector("#create-task-form"); //the Head id
  const newTaskDescription = document.querySelector("#new-task-description"); //the input bar
  const newTaskPriority = document.querySelector("#new-task-priority");

  //get ul for task by id
  const newTaskUl = document.querySelector("#tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
  // newTaskForm is the Head
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit

  const newTaskDescription = document.querySelector("#new-task-description") //grab the input bar
  const newTask = document.createElement("li") //create a list
  newTask.innerText = newTaskDescription.value; //insert the value of the input into the list

  document.querySelector("#tasks").appendChild(newTask); //insert the li into the #tasks ul

  event.target.reset();
}

// const appendNewTask = task => {
//   document.querySelector("#tasks").appendChild(task);
// };