import {playerPiece} from './playerPiece.js';
import {gameArea} from './gameArea.js';
import {virusBlock} from './virusBlock.js';

let myGameArea,
 myGamePiece;

window.addEventListener('load', () => {
  let element = document.getElementById('app')

  element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
  let button = document.getElementById('start-game')

  button.addEventListener('click', () => {
    element.innerHTML = ""


    let canvas = document.createElement("canvas")

    document.body.insertBefore(canvas, document.body.childNodes[0]);
    myGameArea = new gameArea(480, 800, canvas)
    myGamePiece = new playerPiece(30, 30, "red", myGameArea.canvas.width, myGameArea.canvas.height - 30)
    myGamePiece.render(myGameArea);
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 39) {
        myGamePiece.moveRight(10);
      } else if (event.keyCode === 37) {
        myGamePiece.moveLeft(10);
      }
myGameArea.updateDisplay(updateGameArea, 20)
    });
  });
})

function updateGameArea() {
  myGameArea.clearCanvas();
  myGamePiece.render(myGameArea);
}
