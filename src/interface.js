import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';

let myGameArea, myPlayerPiece, syringeImage, vaccineImage;

window.addEventListener('load', () => {
  syringeImage = new Image();
  syringeImage.src = "../assets/syringe.png";
  vaccineImage = new Image();
  vaccineImage.src = "../assets/virus2.png";

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
    vaccineImage.height = 100;
    vaccineImage.width = 100;

    myPlayerPiece = new playerPiece(syringeImage)
    myPlayerPiece.setStartPosition(myGameArea)

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
}
