import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';

let myGameArea, myPlayerPiece, image;

window.addEventListener('load', () => {
  image = new Image();
  image.src = "../assets/syringe.png";

  let element = document.getElementById('app')
  element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
  let button = document.getElementById('start-game')

  button.addEventListener('click', () => {
    element.innerHTML = ""

    let canvas = document.createElement("canvas")
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    myGameArea = new gameArea(480, 800, canvas)

    let desiredImageWidth = 25;
    let scaleBy = desiredImageWidth / image.width;
    let desiredImageHeight = (image.height * scaleBy) - 10;
    image.height = desiredImageHeight;
    image.width = desiredImageWidth;

    myPlayerPiece = new playerPiece(image)
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
