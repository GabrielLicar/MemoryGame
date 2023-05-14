const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");
const dark = document.querySelector('.button');
const darkmode = document.querySelector('body');

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("player", input.value);
  window.location = 'pages/game.html'
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
dark.addEventListener('click', () => { 

  if (darkmode.classList.value == '') {
    localStorage.setItem('tema', 'dark');
    document.body.classList.add('dark');
  }else {
    localStorage.setItem('tema', 'light');
    document.body.classList.remove('dark');
  }
})

window.addEventListener('load', () => {
  
  if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark');
  }else if (localStorage.getItem('tema') === 'light') {
    document.body.classList.remove('dark');
  }
})