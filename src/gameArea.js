function gameArea(width, height, canvas) {
  this.canvas = canvas;
  this.canvas.width = width;
  this.canvas.height = height;
  this.canvas.style = "border: 2px solid";
  this.context = this.canvas.getContext('2d');

  
  this.clearCanvas = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  this.updateDisplay = (updateGameArea, time) => {
    setInterval(updateGameArea, time);
  }

  this.drawImage = (image, x, y) => {
    this.context.drawImage(image, x, y, image.width, image.height);
  }

}

export { gameArea };
