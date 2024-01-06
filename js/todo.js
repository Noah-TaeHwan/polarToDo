const toDoForm = document.querySelector('.column__toDos');
const toDoInput = document.querySelector('.column__toDos input');

const toDoList = document.querySelector('.column__toDo-list');

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  console.log(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
