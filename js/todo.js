const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
const MAX_TODOS = 3;

let ToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  ToDos = ToDos.filter((ToDo) => ToDo.id !== parseInt(li.id));
  saveToDos();
  checkToDoLimit();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
  checkToDoLimit();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  if (ToDos.length >= MAX_TODOS) {
    return;
  }
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  ToDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function checkToDoLimit() {
  if (ToDos.length >= MAX_TODOS) {
    toDoForm.style.display = 'none';
  } else {
    toDoForm.style.display = 'block';
  }
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

checkToDoLimit();
