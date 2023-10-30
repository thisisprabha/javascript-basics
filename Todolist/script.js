`USE STRICT`;

// declaration
const newTodo = document.querySelector('.todo-list');
const addedTodo = document.querySelector('.added-todo');
const addBtn = document.querySelector('.add-todo');
const savedTxt = document.querySelector('.saved');
const showBtn = document.querySelector('.showList');
let todolist = document.getElementById('todoList');
let allList = [];

const addingList = function () {
  console.log('running');
  for (i = 0; i < allList.length; i++) {
    let li = document.createElement('li');
    li.innerText = `${i}. ${allList[i]}`;
    todolist.appendChild(li);
  }
};
//Adding new toto
addBtn.addEventListener('click', function () {
  newTodo.value;
  allList.push(newTodo.value);
  savedTxt.classList.remove('hidden');
  newTodo.value = '';
});

//show added list
showBtn.addEventListener('click', addingList);

//Removing todo list
