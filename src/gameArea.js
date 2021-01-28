function gameArea(width, height, canvas) {
  this.canvas = canvas;
  this.canvas.width = width;
  this.canvas.height = height;
  this.context = this.canvas.getContext('2d');

  this.drawRectangularObject = (width, height, colour, x, y) => {
    this.context.fillStyle = colour;
    this.context.fillRect(x, y, width, height);
  }

  this.clearRectangularObject = (x, y) => {
    this.context.clearRect(x, y, this.canvas.width, this.canvas.height);
  }
}

export { gameArea };