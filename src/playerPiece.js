function playerPiece(image) {
  this.image = image;
  this.x = 0;
  this.maximumX = 0;
  this.y = 0;

  this.setStartPosition = function (gameArea) {
    this.x = (gameArea.canvas.width / 2) - (this.image.width / 2)
    this.y = (gameArea.canvas.height - (gameArea.canvas.height / 4));
    this.maximumX = (gameArea.canvas.width - this.image.width);
  };

  this.moveLeft = function (distance) {
    if (this.x - distance < 0) {
      this.x = 0;
    } else {
      this.x -= distance;
    }
  };

  this.moveRight = function (distance) {
    if (this.x + distance > this.maximumX) {
      this.x = this.maximumX;
    } else {
      this.x += distance;
    }
  }

  this.isCollidingWith = function (virusBlock){
    // syringe is too far left for collision
    if (this.collisionPoint() < virusBlock.x) {
      return false
    // syringe is too far right for collision
    } else if (this.collisionPoint() > virusBlock.x + virusBlock.width) {
      return false
    // syringe is too far down for collision
    } else if (this.y > virusBlock.y + virusBlock.height) {
      return false
    // syringe is too far up for collision
    } else if (this.y < virusBlock.y) {
      return false
    } else {
      return true
    }
  }

  this.collisionPoint = () => {
    return this.x + (this.image.width / 2)
  }

  this.render = (gameArea) => {
    gameArea.drawImage(this.image, this.x, this.y)
  }
}

export { playerPiece };
