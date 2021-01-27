function virusBlock(width, height, colour, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.colour = colour

  this.drop = function(distance) {
    this.y += distance
  }

  this.render = function(gameArea) {
    gameArea.drawRectangularObject(this.width, this.height, this.colour, this.x, this.y)
  }
}

export {virusBlock};
