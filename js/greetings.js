const loginForm = document.querySelector('.column__logIn');
const loginForm2 = document.querySelector('.login-form');
const loginBtn = document.querySelector('.login-btn');
const loginInput = document.querySelector('.column__logIn input');
const greeting = document.querySelector('#greeting');
const todos = document.querySelector('.todos');
const fixedToDos = document.querySelector('.column__toDos');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function loginClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm2.classList.add(HIDDEN_CLASSNAME);
  loginBtn.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
  location.reload();
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}! ✋`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', loginClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm2.classList.remove(HIDDEN_CLASSNAME);
  todos.classList.add(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
  loginForm2.classList.add(HIDDEN_CLASSNAME);
  loginBtn.classList.add(HIDDEN_CLASSNAME);
  todos.classList.remove(HIDDEN_CLASSNAME);
}
