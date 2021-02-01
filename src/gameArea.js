function gameArea(width, height, canvas) {
  this.canvas = canvas;
  this.canvas.width = width;
  this.canvas.height = height;
  this.context = this.canvas.getContext('2d');

  var image = new Image();
  image.onload = function () {
    ctx.drawImage(image, 0, 0);
  }
  image.src = "./assets/syringe.png";
}

this.clearCanvas = () => {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

this.updateDisplay = (updateGameArea, time) => {
  setInterval(updateGameArea, time);
}

export { gameArea };