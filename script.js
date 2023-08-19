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
    gameBoard.forEach((markXO, index) => {
      // markXO is the element of the array that is either "X" or "O" and index is just a number
      boardHTML += `<div id="square-${index}" class="square">${markXO}</div>`;
    });
    document.querySelector('.gameBoard').innerHTML = boardHTML;

    // add event listener for each of the square box
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.addEventListener('click', game.handleClick); //handleclick is part of game, so put in game module
    });
  };
  const update = (divIndex, mark) => {
    gameBoard[divIndex] = mark;
    render();
  };

  // to not change the value that is in the div we need an accessor function that return the gameboard
  const getGameBoard = () => gameBoard;
  return { render, update, getGameBoard };
})();

const createPlayer = (name, mark) => {
  return { name, mark };
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
      createPlayer(data.player2Name, 'O'),
    ];

    currentPlayerIndex = 0;
    gameOver = false;
    // console.log(players);
    // console.log('started');
    gameBoard.render();
    displayController.renderMessage(
      `Player ${players[currentPlayerIndex].name}'s turn`
    );
  };

  const handleClick = (event) => {
    if (gameOver) return; // don't want the players to click if the game is over
    // event.target.id gives the id as square-4, but we only want the number so
    const divIndex = parseInt(event.target.id.split('-')[1]); // divIndex denotes which div to update

    //if the div is not empty meaning some symbol X or O is already there then we don't update, simply return
    if (gameBoard.getGameBoard()[divIndex] !== '') return;

    gameBoard.update(divIndex, players[currentPlayerIndex].mark);

    if (checkForWin(gameBoard.getGameBoard())) {
      // alert(`${players[currentPlayerIndex].name} won`);
      displayController.renderMessage(
        `${players[currentPlayerIndex].name} wins`
      );
      gameOver = true;
      return;
    } else if (checkForTie(gameBoard.getGameBoard())) {
      gameOver = true;
      displayController.renderMessage(`It's a tie`);
      return;
    }

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    displayController.renderMessage(
      `Player ${players[currentPlayerIndex].name}'s turn`
    );
  };
  const reset = () => {
    displayController.renderMessage('');
    gameOver = false;
    // since we cannot directly access the gameBoard, so we have to update each box individually
    for (let i = 0; i < 9; i++) {
      gameBoard.update(i, '');
    }
    gameBoard.render();
  };
  const newGame = () => {
    reset();
    document.querySelector('.modal-wrapper').removeAttribute('hidden');
    document.querySelector('.buttonContainer').classList.add('hide');
    form.reset();
  };
  return { start, handleClick, reset, newGame };
})();

const displayController = (function () {
  const renderMessage = (message) => {
    document.querySelector('.message').innerText = message;
  };
  return { renderMessage };
})();

//check win
function checkForWin(board) {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return true; //board[a]&& to check if board isn't empty
  }
  return false;
}
//check tie
function checkForTie(board) {
  return board.every((elem) => elem !== '');
}
//restart
const restartButton = document.querySelector('.restart-button');
restartButton.addEventListener('click', game.reset);

//newGame
const newGame = document.querySelector('.new-game-button');
newGame.addEventListener('click', game.newGame);
