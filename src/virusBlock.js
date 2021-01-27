function virusBlock(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;

  this.drop = function(distance) {
    this.y += distance
  }
}

export { virusBlock };
