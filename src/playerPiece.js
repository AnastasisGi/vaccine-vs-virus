function playerPiece(width, height, color, canvasWidth, y) {
  this.width = width;
  this.height = height;
  this.x = (canvasWidth/2)-(width/2);
  this.y = y;
  this.maximumX = canvasWidth - this.width
  this.update = function(gameArea){
    let ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  this.moveLeft = function(distance){
    if (this.x - distance < 0) {
      this.x = 0;
    } else {
      this.x -= distance;
    }
  };

  this.moveRight = function(distance){
    if (this.x + distance > this.maximumX) {
      this.x = this.maximumX;
    } else {
      this.x += distance;
    }
  }
}

// export {playerPiece};
module.exports = playerPiece;
