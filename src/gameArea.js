function gameArea(width, height, canvas) {
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');

  this.drawRectangularObject = (width, height, colour, x, y) => {
    this.context.fillStyle = colour;
  }
}

export {gameArea};