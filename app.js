let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150},
];

let dx = 10;
let dy = 0;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function moveSnake () {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        snake.pop();
}

function drawSnake () {
  snake.forEach(drawSnakePart);
}

function drawSnakePart (snakePart) {
  ctx.fillStyle = "#ffc7ad";
  ctx.strokestyle = "#ffc7ad";
}

ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);

function drawSnake() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle('lightgreen');

    ctx.strokestyle('darkgreen');

    ctx.fillRect(150, 150, 10, 10);

    ctx.fillRect(150, 161, 10, 10);

    ctx.fillRect(150, 139, 10, 10);

  }

function drawApples() {
  
  ctx.fillStyle('red');
  ctx.strokestyle('darkred');
  ctx.fillRect(foodX, foodY, 10, 10);

}