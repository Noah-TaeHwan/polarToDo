const toDoForm = document.querySelector('.column__toDos');
const toDoInput = document.querySelector('.column__toDos input');

const toDoList = document.querySelector('.column__todo-list');

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
