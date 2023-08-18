// to hide the popup form
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  //prevent page refresh
  event.preventDefault();
  const formInformation = new FormData(form);
  const data = Object.fromEntries(formInformation);
  // console.log(data);
  document.querySelector('.modal-wrapper').setAttribute('hidden', true);
  document.querySelector('.buttonContainer.hide').classList.remove('hide');
  initializeGame(data);
});

const initializeVaraibles = (data) => {
  //change the string choice from form to number
  data.choice = +data.choice;
  data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  data.player1 = 'X';
  data.player2 = 'O';
  data.round = 0;
  data.currentPlayer = 'X';
  data.gameOver = false;
};

const initializeGame = (data) => {
  initializeVaraibles(data);
  console.log(data);
};
