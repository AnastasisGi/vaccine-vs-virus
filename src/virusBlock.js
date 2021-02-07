function virusBlock(image, x, y) {
  this.image = image;
  this.x = x;
  this.y = y;
  this.ultra = false;

  this.makeUltra = () => {
    this.ultra = true;
  }

  this.drop = (distance) => {
    this.y += distance
  }

  this.render = (gameArea) => {
    gameArea.drawImage(this.image, this.x, this.y)
  }
}

export { virusBlock };
