import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';
import { virusBlock } from './virusBlock.js';
import { gameViruses } from './gameViruses.js';
import { score } from './score.js';
let element;
let myGameArea, myPlayerPiece, myVirusBlock, syringeImage, virusImage, ultraVirusImage, myGameViruses, myScore;



window.addEventListener('load', () => {
  syringeImage = new Image();
  syringeImage.src = "../../images/syringe.png";
  virusImage = new Image();
  virusImage.src = "../../images/virus2.png";
  ultraVirusImage = new Image();
  ultraVirusImage.src = "../../images/virus.png";
  location.hash = 'index'
  window.addEventListener('hashchange', () => {
    if (location.hash === '#index') {
      element = document.getElementById('app')
      element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
      let button = document.getElementById('start-game')
      button.addEventListener('click', () => {
        location.hash = 'play'
      })
    } else if (location.hash === '#play') {
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
      ultraVirusImage.height = 100;
      ultraVirusImage.width = 100;
      myPlayerPiece = new playerPiece(syringeImage)
      myPlayerPiece.setStartPosition(myGameArea)
      myVirusBlock = new virusBlock(virusImage, 50, 50)
      myGameViruses = new gameViruses(virusBlock, 200, 300)

      window.addEventListener('keydown', (event) => {
        if (event.keyCode === 39) {
          myPlayerPiece.moveRight(10);
        } else if (event.keyCode === 37) {
          myPlayerPiece.moveLeft(10);
        }
      });
      myGameArea.updateDisplay(updateGameArea, 20)

    } else if (location.hash === '#game-over') {
      element = document.getElementById('app')
      element.innerHTML = `<p>Game Over! Play again?</p>
      <button id="restart-game" type="button" name="restart-game">Restart game</button>`
      let button = document.getElementById('restart-game')
      button.addEventListener('click', () => {
        location.hash = 'play'
      })
    }

  })

  function updateGameArea() {
    myGameArea.clearCanvas()
    myPlayerPiece.render(myGameArea)
    myGameViruses.increaseFrameNo()
    myGameViruses.updateVirusesArray(virusImage, ultraVirusImage)
    for (let i = 0; i < myGameViruses.viruses.length; i += 1) {
      if (myPlayerPiece.isCollidingWith(myGameViruses.viruses[i]) && myGameViruses.viruses[i].ultra) {
        console.log('Game Over')
        gameover();
      }
      myGameViruses.viruses[i].drop(3);
      myGameViruses.viruses[i].render(myGameArea);
    }

  }

  function gameover() {
    // location.hash = 'index'
    location.hash = 'game-over'
  }

})
