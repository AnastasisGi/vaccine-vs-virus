import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';
import { virusBlock } from './virusBlock.js';
import { gameViruses } from './gameViruses.js';
import { score } from './score.js';
import { play } from './play.js';
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

  // starting the game
  window.addEventListener('hashchange', () => {
    if (location.hash === '#index') {

      // Set up start button
      element = document.getElementById('app')
      element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
      let button = document.getElementById('start-game')
      button.addEventListener('click',() => {
        location.hash = 'play'
      })

    } else if (location.hash === '#play') {
      //clear the button, set up the nodes for the game - make a helper function for this?
      element.innerHTML = ""
      let canvasContainer = document.createElement("div")
      let scoreContainer = document.createElement("div")
      let canvas = document.createElement("canvas")
      element.appendChild(scoreContainer);
      element.appendChild(canvasContainer);
      canvasContainer.appendChild(canvas);

      // scaling - make a helper function for this
      myGameArea = new gameArea(480, 800, canvas)  // scale to screen window.innerwidth or window.innerheight, probably wants to be abt 1:1.5 width/height
      myScore = new score(scoreContainer);
      let desiredImageWidth = 25;  // 0.05 * canvas width
      let scaleBy = desiredImageWidth / syringeImage.width;
      let desiredImageHeight = (syringeImage.height * scaleBy) - 10;
      syringeImage.height = desiredImageHeight;
      syringeImage.width = desiredImageWidth;
      virusImage.height = 100; // 0.2 * canvas width
      virusImage.width = 100;
      ultraVirusImage.height = 100;
      ultraVirusImage.width = 100;

      // create components
      myPlayerPiece = new playerPiece(syringeImage)
      myPlayerPiece.setStartPosition(myGameArea) // this probably moves into game.start()
      myGameViruses = new gameViruses(virusBlock, 200, 300)

      play(myGameArea, myPlayerPiece, myGameViruses, myScore, virusImage, ultraVirusImage);
    }
  })

  })