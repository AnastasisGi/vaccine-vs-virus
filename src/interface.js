import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';
import { virusBlock } from './virusBlock.js';

let myGameArea, myPlayerPiece, myVirusBlock, syringeImage, virusImage, ultraVirusImage;
let gameViruses = [];

window.addEventListener('load', () => {
  syringeImage = new Image();
  syringeImage.src = "../assets/syringe.png";
  virusImage = new Image();
  virusImage.src = "../assets/virus2.png";
  ultraVirusImage = new Image();
  ultraVirusImage.src = "../assets/virus.png";

  let element = document.getElementById('app')
  element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
  let button = document.getElementById('start-game')

  button.addEventListener('click', () => {
    element.innerHTML = ""

    let canvas = document.createElement("canvas")
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    myGameArea = new gameArea(480, 800, canvas)

    let desiredImageWidth = 25;
    let scaleBy = desiredImageWidth / syringeImage.width;
    let desiredImageHeight = (syringeImage.height * scaleBy) - 10;
    syringeImage.height = desiredImageHeight;
    syringeImage.width = desiredImageWidth;
    virusImage.height = 100;
    virusImage.width = 100;
    ultraVirusImage.height = 100;
    ultraVirusImage.width = 100;

    myPlayerPiece = new playerPiece(syringeImage)
    myPlayerPiece.setStartPosition(myGameArea)
    myVirusBlock = new virusBlock(virusImage, 50, 50)

    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 39) {
        myPlayerPiece.moveRight(10);
      } else if (event.keyCode === 37) {
        myPlayerPiece.moveLeft(10);
      }
    });
    myGameArea.updateDisplay(updateGameArea, 20)
  });
})

function updateGameArea() {
  myGameArea.clearCanvas()
  myPlayerPiece.render(myGameArea)

  function everyinterval(n) {
    if ((myGameArea.frameNo % n) === 0) { return true; }
    return false;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let x, y;
  myGameArea.frameNo += 1;

  if (myGameArea.frameNo == 1 || everyinterval(300)) {
    x = getRandomInt(480 - virusImage.width);
    y = 10;
    gameViruses.push(new virusBlock(virusImage, x, 10));
  } else if (everyinterval(200)) {
    x = getRandomInt(480 - virusImage.width);
    y = 10;
    gameViruses.push(new virusBlock(virusImage, x, 10));
  } else if (everyinterval(500)) {
    x = getRandomInt(480 - ultraVirusImage.width);
    y = 10;
    let ultraVirusBlock = new virusBlock(ultraVirusImage, x, y);
    ultraVirusBlock.makeUltra();
    gameViruses.push(ultraVirusBlock)
  }

  for (let i = 0; i < gameViruses.length; i += 1) {
    if (myPlayerPiece.isCollidingWith(gameViruses[i]) === true) {
      console.log('Game Over')
    }
    gameViruses[i].drop(3);
    gameViruses[i].render(myGameArea);
  }

}
