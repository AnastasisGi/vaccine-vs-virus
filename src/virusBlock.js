function virusBlock(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;

  this.drop = function(distance) {
    this.y += distance
  }

  this.render = function(gameArea) {
    gameArea.context.fillRect(this.x, this.y, this.width, this.height)
  }
}

export { virusBlock };
