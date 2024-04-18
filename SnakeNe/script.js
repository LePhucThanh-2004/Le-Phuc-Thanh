const gameArea = document.getElementById('gameArea');
const snake = document.getElementById('snake');
const food = document.getElementById('food');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const scoreValue = document.getElementById('scoreValue');

let snakeX = 10;
let snakeY = 10;
let foodX = 0;
let foodY = 0;
let xSpeed = 0;
let ySpeed = 0;
let score = 0;
const blockSize = 20;
const areaSize = 20;
let tail = [];
let tailLength = 5;
let gameInterval;

function createFood() {
  foodX = Math.floor(Math.random() * areaSize) * blockSize;
  foodY = Math.floor(Math.random() * areaSize) * blockSize;
  food.style.left = foodX + 'px';
  food.style.top = foodY + 'px';
}

function startGame() {
  startButton.disabled = true;
  gameInterval = setInterval(gameLoop, 100);
}

function gameLoop() {
  snakeX += xSpeed;
  snakeY += ySpeed;

  if (snakeX >= gameArea.offsetWidth || snakeX < 0 || snakeY >= gameArea.offsetHeight || snakeY < 0) {
    gameOver();
  }

  snake.style.left = snakeX + 'px';
  snake.style.top = snakeY + 'px';

  if (snakeX === foodX && snakeY === foodY) {
    tailLength++;
    score++;
    scoreValue.textContent = score;
    createFood();
  }

  while (tail.length > tailLength) {
    tail.shift();
  }

  tail.forEach(segment => {
    if (segment[0] === snakeX && segment[1] === snakeY) {
      gameOver();
    }
  });

  tail.push([snakeX, snakeY]);

  // Update tail
  for (let i = tail.length - 1; i > 0; i--) {
    tail[i] = [...tail[i - 1]];
  }
  tail[0] = [snakeX, snakeY];
}

function gameOver() {
  clearInterval(gameInterval);
  alert('Game Over! Your score: ' + score);
  resetGame();
}

function resetGame() {
  snakeX = 10;
  snakeY = 10;
  xSpeed = 0;
  ySpeed = 0;
  score = 0;
  tail = [];
  tailLength = 5;
  scoreValue.textContent = score;
  createFood();
  startButton.disabled = false;
}

document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if (ySpeed !== blockSize) {
        xSpeed = 0;
        ySpeed = -blockSize;
      }
      break;
    case 'ArrowDown':
      if (ySpeed !== -blockSize) {
        xSpeed = 0;
        ySpeed = blockSize;
      }
      break;
    case 'ArrowLeft':
      if (xSpeed !== blockSize) {
        xSpeed = -blockSize;
        ySpeed = 0;
      }
      break;
    case 'ArrowRight':
      if (xSpeed !== -blockSize) {
        xSpeed = blockSize;
        ySpeed = 0;
      }
      break;
  }
});

startButton.addEventListener('click', startGame);


createFood();
