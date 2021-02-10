import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';
import { virusBlock } from './virusBlock.js';
import { gameViruses } from './gameViruses.js';
import { score } from './score.js';
import { play } from './play.js';
import { scaleImage } from '../src/scaleImage.js';

let element;
let myGameArea, myPlayerPiece, syringeImage, virusImage, ultraVirusImage, myGameViruses, myScore, myIntervalId;

// Loads images
// Sort out any HTML elements
// event listeners for button clicks
// create game elements
// play(gameArea, playerPiece, gameViruses, score)

window.addEventListener('load', () => {

  //loading the images - make a helper function for this
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
      element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>
      <p><button id="instructions" type="button name="instructions>Instructions</button></p>`
      let button = document.getElementById('start-game')
      button.addEventListener('click', () => {
        location.hash = 'play'
      })

    } else if (location.hash === '#play') {
      //clear the button, set up the nodes for the game - make a helper function for this?
      document.getElementById("heading").className = 'side-heading'
      element.innerHTML = ""
      let canvasContainer = document.createElement("div")
      let scoreContainer = document.createElement("div")
      let canvas = document.createElement("canvas")
      element.appendChild(scoreContainer);
      element.appendChild(canvasContainer);
      canvasContainer.appendChild(canvas);

      // scaling - make a helper function for this
      let canvasWidth = 480 // scale to screen window.innerwidth or window.innerheight, probably wants to be abt 1:1.5 width/height
      let canvasHeight = canvasWidth * 1.75
      syringeImage = scaleImage(syringeImage, canvasWidth, 0.05);
      virusImage = scaleImage(virusImage, canvasWidth, 0.2);
      ultraVirusImage = scaleImage(ultraVirusImage, canvasWidth, 0.2);

      // create components
      myGameArea = new gameArea(canvasWidth, canvasHeight, canvas)
      myScore = new score(scoreContainer);
      myPlayerPiece = new playerPiece(syringeImage)
      myPlayerPiece.setStartPosition(myGameArea) // this probably moves into game.start()
      myGameViruses = new gameViruses(virusBlock, 200, 300)

      play(myGameArea, myPlayerPiece, myGameViruses, myScore, virusImage, ultraVirusImage);

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
})