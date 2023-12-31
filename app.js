const loginInput = document.querySelector('.column__todo input');
const loginbutton = document.querySelector('.column__todo button');

function loginClick() {
  console.log(loginInput.value);
}

loginbutton.addEventListener('click', loginClick);
