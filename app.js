let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150},
];

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
}

function growingSnake() {
  const head = {x: snake (0).x + dx, y: y + dy};
  snake.unshift(head);
  snake.pop();
}

function drawApples() {
  
  ctx.fillStyle('red');
  ctx.strokestyle('darkred');
  ctx.fillRect(foodX, foodY, 10, 10);

}