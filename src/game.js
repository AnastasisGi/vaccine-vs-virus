import { playerPiece } from './playerPiece.js';
import { virusBlock } from './virusBlock.js';

let gameViruses = [];
let myGamePiece;

function startGame() {
  myGameArea.start();
  myGamePiece = new playerPiece(30, 30, "red", myGameArea.canvas.width, myGameArea.canvas.height - 30)
}

let myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 800;
    this.canvas.style = "border: 2px solid"
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
  return false;
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    let ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.collision = function (virusBlock) {
    let left = this.x;
    let right = this.x + (this.width);
    let top = this.y;
    let bottom = this.y + (this.height);
    let virusleft = virusBlock.x;
    let virusright = virusBlock.x + (virusBlock.width);
    let virustop = virusBlock.y;
    let virusbottom = virusBlock.y + (virusBlock.height);
    let collision = true;
    if ((bottom < virustop) || (top > virusbottom) || (right < virusleft) || (left > virusright)) {
      collision = false;
    }
    return collision;
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  var x, y;

  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(300)) {
    x = 300;
    y = 10;
    gameViruses.push(new component(100, 100, "green", x, y));
  } else if (everyinterval(200)) {
    x = 50;
    y = 10;
    gameViruses.push(new component(100, 100, "red", x, y));
  }

  for (let i = 0; i < gameViruses.length; i += 1) {
    gameViruses[i].y += 1;
    gameViruses[i].update();
  }
  myGamePiece.update(myGameArea);
}

window.addEventListener('load', () => {
  let element = document.getElementById('app')
  element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
  let button = document.getElementById('start-game')
  button.addEventListener('click', () => {
    element.innerHTML = ""
    startGame();
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 39) {
        myGamePiece.moveRight(10);
      } else if (event.keyCode === 37) {
        myGamePiece.moveLeft(10);
      };
    });

  });
})

export { component };