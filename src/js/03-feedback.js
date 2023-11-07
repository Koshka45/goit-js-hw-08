import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name= "email"]'),
  textarea: document.querySelector('[name= "message"]'),
};
const LOCAL_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

let data = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

function onInput(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

function onSubmit(event) {
  event.preventDefault();
  if (!refs.email.value || !refs.textarea.value) {
    alert('Будь ласка, заповніть усі поля!');
  } else {
    localStorage.removeItem(LOCAL_KEY);
    event.currentTarget.reset();
    console.log(data);
    data = {};
  }
}
window.addEventListener('load', onload);
function onload() {
  const dataOn = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (dataOn) {
    refs.textarea.value = dataOn.message || '';
    refs.email.value = dataOn.email || '';
  }
}
