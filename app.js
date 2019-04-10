let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150},
];

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'lightblue';

    ctx.strokestyle = 'darkblue';

    ctx.fillRect(150, 150, 10, 10);

    ctx.fillRect(150, 161, 10, 10);

    ctx.fillRect(150, 139, 10, 10);

  }
}
