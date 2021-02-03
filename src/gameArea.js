function gameArea(width, height, canvas) {
  this.canvas = canvas;
  this.canvas.width = width;
  this.canvas.height = height;
  this.context = this.canvas.getContext('2d');

  this.clearCanvas = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  this.updateDisplay = (updateGameArea, time) => {
    setInterval(updateGameArea, time);
  }

  this.drawPlayerImage = (image, x, y) => {
    // let current_this = this
    // let image = new Image();
    // image.onload = function () {
    //   current_this.context.drawImage(image, x, y, 50, 50);
    // }
    this.context.drawImage(image, x, y, 50, 50);
    // image.src = "../assets/syringe.png";
  }



}

export { gameArea };
