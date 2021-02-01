function playerPiece(image) {
  this.image = image;
  this.x = 0;
  this.maximumX = 0;
  this.y = 0;
  this.update = function (gameArea) {
    let ctx = gameArea.context;
    ctx.fillStyle = colour;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  this.setStartPosition = function (gameArea) {
    this.x = (gameArea.canvas.width / 2) - (this.image.width / 2);
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

  // this.render = (gameArea) => {
  //   gameArea.drawRectangularObject(this.width, this.height, this.colour, this.x, this.y)
  // }
}

export { playerPiece };
