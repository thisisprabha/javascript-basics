`USE STRICT`;

// declaration
const newTodo = document.querySelector('.todo-list');
const addedTodo = document.querySelector('.added-todo');
let todoDB = [];
let listLi = document.createElement('h1');
listLi.innerHTML = 'Hello';
document.body.appendChild(listLi);

//Adding new toto
document.querySelector('.add-todo').addEventListener('click', function () {
  newTodo.value;
  addedTodo.textContent = newTodo.value;
  todoDB.push(addedTodo.textContent);
  todoDBf();
});

function todoDBf() {
  for (let i = 0; i < todoDB.length; i++) {
    listLi.innerHTML = todoDB[i];
    console.log(todoDB.length);
  }
}

//Removing todo list
