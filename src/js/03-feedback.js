import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name= "email"]'),
  textarea: document.querySelector('[name= "message"]'),
};
const LOCAL_KEY = 'feedback-form-state';
refs.form.addEventListener('input', throttle(onInput, 500));
function onInput(event) {
  const data = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? {};
  data[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  console.log(data);
}
refs.textarea.addEventListener('sabmit', onSabmit);
function onSabmit(event) {
  event.preventDefault();
  if (!email.value || !textarea.value) {
    alert('Будь ласка, заповніть усі поля!');
  } else {
    console.log(`email: ${email.value} message:
        ${textarea.value}`);
    localStorage.removeItem(LOCAL_KEY);
    event.currentTarget.reset();
  }
}
window.addEventListener('load', onload);
function onload() {
  const dataOn = JSON.parse(localStorage.getItem(LOCAL_KEY));
  console.log(dataOn);
  if (dataOn) {
    refs.textarea.value = dataOn.message || '';
    refs.email.value = dataOn.email || '';
  }
}
