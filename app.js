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