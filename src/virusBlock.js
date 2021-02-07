function virusBlock(image, x, y, ultraBoolean) {
  this.image = image;
  this.x = x;
  this.y = y;
  this.ultra = ultraBoolean;

  this.drop = (distance) => {
    this.y += distance
  }

  this.render = (gameArea) => {
    gameArea.drawImage(this.image, this.x, this.y)
  }
}

export { virusBlock };
