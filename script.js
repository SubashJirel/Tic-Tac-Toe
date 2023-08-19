// to hide the popup form
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  //prevent page refresh
  event.preventDefault();
  const formInformation = new FormData(form);
  const data = Object.fromEntries(formInformation);
  document.querySelector('.modal-wrapper').setAttribute('hidden', true);
  document.querySelector('.buttonContainer.hide').classList.remove('hide');

  // initializeGame(data);
  game.start(data);
});

const gameBoard = (function () {
  let gameBoard = ['', '', '', '', '', '', '', '', ''];

  const render = () => {
    let boardHTML = '';
    gameBoard.forEach((square, index) => {
      // square is the element of the array that is either "X" or "O" and index is just a number
      boardHTML += `<div id=square-${index} class="square">${square}</div>`;
    });
    document.querySelector('.gameBoard').innerHTML = boardHTML;
  };
  return { render };
})();

const createPlayer = (naam, mark) => {
  return { naam, mark };
};
const game = (function () {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = (data) => {
    players = [
      // createPlayer(document.querySelector('#form1').value, 'X'),
      // createPlayer(document.querySelector('#form1').value, 'O'),
      //getting players name from the data collected from form
      createPlayer(data.player1Name, 'X'),
      createPlayer(data.player2Name, 'X'),
    ];

    currentPlayerIndex = 0;
    gameOver = false;
    console.log(players);
    // console.log('started');
    gameBoard.render();
  };
  return { start };
})();

// const initializeVaraibles = (data) => {
//   //change the string choice from form to number
//   data.choice = +data.choice;
//   data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//   data.player1 = 'X';
//   data.player2 = 'O';
//   data.round = 0;
//   data.currentPlayer = 'X';
//   data.gameOver = false;
// };

// const initializeGame = (data) => {
//   initializeVaraibles(data);
//   console.log(data);
// };
