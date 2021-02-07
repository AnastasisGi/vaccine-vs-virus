import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';
import { virusBlock } from './virusBlock.js';
import { score } from './score.js';


let myGameArea, myPlayerPiece, myVirusBlock, syringeImage, virusImage, myScore;
let distance = 4;

window.addEventListener('load', () => {
  syringeImage = new Image();
  syringeImage.src = "../assets/syringe.png";
  virusImage = new Image();
  virusImage.src = "../assets/virus2.png";

  let element = document.getElementById('app')
  element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
  let button = document.getElementById('start-game')

  button.addEventListener('click', () => {
    element.innerHTML = ""
    let canvasContainer = document.createElement("div")
    let scoreContainer = document.createElement("div")
    element.appendChild(scoreContainer);
    element.appendChild(canvasContainer);
    let canvas = document.createElement("canvas")
    canvasContainer.appendChild(canvas);
    myGameArea = new gameArea(480, 800, canvas)
    myScore = new score(scoreContainer);
    let desiredImageWidth = 25;
    let scaleBy = desiredImageWidth / syringeImage.width;
    let desiredImageHeight = (syringeImage.height * scaleBy) - 10;
    syringeImage.height = desiredImageHeight;
    syringeImage.width = desiredImageWidth;
    virusImage.height = 100;
    virusImage.width = 100;

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
  myVirusBlock.render(myGameArea)
  myVirusBlock.drop(distance);

}




  function crashWith(virusBlock) {
    var myleft = playerPiece.x;
    var myright = playerPiece.x + (playerPiece.width);
    var mytop = playerPiece.y;
    var mybottom = playerPiece.y + (playerPiece.height);
    var otherleft = virusBlock.x;
    var otherright = virusBlock.x + (virusBlock.width);
    var othertop = virusBlock.y;
    var otherbottom = virusBlock.y + (virusBlock.height);
    var crash = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
        crash = false;
    }
    return crash;
}
