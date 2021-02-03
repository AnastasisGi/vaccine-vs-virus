import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';

let myGameArea, myPlayerPiece, image;

window.addEventListener('load', () => {
  let element = document.getElementById('app')

  element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
  let button = document.getElementById('start-game')

  button.addEventListener('click', () => {
    element.innerHTML = ""

    let canvas = document.createElement("canvas")


    document.body.insertBefore(canvas, document.body.childNodes[0]);
    myGameArea = new gameArea(480, 800, canvas)
    myPlayerPiece = new playerPiece(30, 30, "red", myGameArea.canvas.width, myGameArea.canvas.height - 30)
    myPlayerPiece.setStartPosition(myGameArea)
    image = new Image();
    image.onload = function () {
      myGameArea.context.drawImage(image, myPlayerPiece.x, myPlayerPiece.y, 50, 50);
    }
    image.src = "../assets/syringe.png";
    myPlayerPiece.render(myGameArea, image);
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 39) {
        myPlayerPiece.moveRight(10);
      } else if (event.keyCode === 37) {
        myPlayerPiece.moveLeft(10);
      }
      // window.requestAnimationFrame(updateGameArea)

    });
    // myPlayerPiece.render(myGameArea);
    myGameArea.updateDisplay(updateGameArea, 20)

  });
})

function updateGameArea() {
  myGameArea.clearCanvas()
  myPlayerPiece.render(myGameArea, image)
}
