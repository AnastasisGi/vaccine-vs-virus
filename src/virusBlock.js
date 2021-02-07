function virusBlock(image, x, y) {
  this.image = image;
  this.x = x;
  this.y = y;


  this.drop = (distance) => {
    this.y += distance
  }

  this.render = (gameArea) => {
    gameArea.drawImage(this.image, this.x, this.y)
  }
}

export { virusBlock };
