`USE STRICT`;

// declaration
const newTodo = document.querySelector('.todo-list');
const addedTodo = document.querySelector('.added-todo');

//Adding new toto
document.querySelector('.add-todo').addEventListener('click', function () {
  newTodo.value;
  addedTodo.textContent = newTodo.value;
  //todoDB.push(addedTodo.textContent);
});

//Removing todo list
