// import {playerPiece} from './playerPiece.js';
// const playerPiece = require('./playerPiece');

function startGame() {
  myGameArea.start();
  myGamePiece = new playerPiece(30, 30, "red", myGameArea.canvas.width, myGameArea.canvas.height - 30)
}

let myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 800;
    this.canvas.style = "border: 2px solid"
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

let myGamePiece;

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.update(myGameArea);
}

window.addEventListener('load', () => {
  startGame();
  window.addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
      myGamePiece.moveRight(10);
    } else if (event.keyCode === 37) {
      myGamePiece.moveLeft(10);
    };
  });
});
