// to hide the popup form
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  //prevent page refresh
  event.preventDefault();
  document.querySelector('.modal-wrapper').setAttribute('hidden', true);
});
