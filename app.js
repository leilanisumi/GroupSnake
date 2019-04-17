const canvas_border = 'black';
const canvas_background = 'white';
const snake_color = '#ffc7ad';
const snake_border = '#ffc7ad';

let score = 0;

let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150}
];

let dx = 10;
let dy = 0;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = canvas_background; 
ctx.strokeStyle = canvas_border;

ctx.fillRect (0, 0, canvas.width, canvas.height);
ctx.strokeRect (0, 0, canvas.width, canvas.height);


drawSnake();




drawSnake();


function snakeMovement() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  const foodEaten = snake[0].x === foodX && snake [0].y === foodY;
  if (foodEaten) {
    score += 10;
    score += 1;
    document.getElementById('score').innerHTML = score;

    createFood();
  } else {
  snake.pop();
  }
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
  ctx.fillStyle = snake_color;
  ctx.strokeStyle = snake_border;
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event) {
  const left_key = 37;
  const right_key = 39;
  const up_key = 38;
  const down_key = 40;

  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === left_key && !goingRight) {
    dx = -10;
    dy = 0;
  }

  if (keyPressed === up_key && !goingDown) {
    dx = 0;
    dy = -10;
  }
  
  if (keyPressed === right_key && !goingLeft) {
    dx = 10;
    dy = 0;
  }

  if (keyPressed === down_key && !goingDown) {
    dx = 0;
    dy = 10;
  }
}

createFood();
bigBoy();

function bigBoy() {

  if (gameOver()) return;

  setTimeout(function onTick() {
    clearCanvas();
    drawFood();
    snakeMovement();
    drawSnake();
    
    bigBoy();
  }, 100);
  }, 25);
}

function clearCanvas() {
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.fillRect(0,0, canvas.width, canvas.height);
  ctx.strokeRect(0,0, canvas.width, canvas.height);
}

function gameOver() {
  for (let i = 4; i < snake.length; i++) {
    const collision = snake[i].x === snake[0].x &&
      snake[i].y === snake[0].y

    if (collision) return true
  }

  const hitLeftBorder = snake[0].x < 0;
  const hitRightBorder = snake[0].x > canvas.width - 10;
  const hitTopBorder = snake[0].y < 0; 
  const hitBottomBorder = snake[0].y > canvas.height - 10;

  return hitLeftBorder ||
         hitRightBorder ||
         hitTopBorder ||
         hitBottomBorder
}

function drawFood () {
  ctx.fillStyle = '#00ff00';
  ctx.strokeStyle = '#00ff00';
  ctx.fillStyle = '#ffc7ad';
  ctx.strokeStyle = '#ffc7ad';
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}

document.addEventListener("keydown", changeDirection)

function randomTen(min,max) {
  return Math.round((Math.random() * (max-min) + min) /10) * 10;
}

function createFood() {
  foodX = randomTen (0, canvas.width - 10);
  foodY = randomTen (0, canvas.height - 10);

  snake.forEach(function isFoodOnSnake(part) {
    const foodIsOnSnake = part.x == foodX && part.y == foodY
    if (foodIsOnSnake)
      createFood();
  });
}