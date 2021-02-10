import { play } from './play.js'
import { scaleImage } from './scaleImage.js'
import { playerPiece } from './playerPiece.js';
import { gameArea } from './gameArea.js';
import { virusBlock } from './virusBlock.js';
import { gameViruses } from './gameViruses.js';
import { score } from './score.js';
// import { createCanvas, canvasWidth, canvasHeight, canvas, scoreContainer, scaledSyringeImage } from './createCanvas.js'

function createComponentsAndPlay(element, syringeImage, virusImage, ultraVirusImage) {
  element.innerHTML = ""
  let canvasContainer = document.createElement("div")
  let scoreContainer = document.createElement("div")
  let canvas = document.createElement("canvas")
  element.appendChild(scoreContainer);
  element.appendChild(canvasContainer);
  canvasContainer.appendChild(canvas);

  let canvasWidth = 480
  let canvasHeight = canvasWidth * 1.75
  let scaledSyringeImage = scaleImage(syringeImage, canvasWidth, 0.05);
  let scaledVirusImage = scaleImage(virusImage, canvasWidth, 0.2);
  let scaledUltraVirusImage = scaleImage(ultraVirusImage, canvasWidth, 0.2);

  // createCanvas(element, syringeImage, virusImage, ultraVirusImage)

  // createComponents(canvasWidth, canvasHeight, canvas, scoreContainer, scaledSyringeImage)

  let myGameArea = new gameArea(canvasWidth, canvasHeight, canvas)
  let myScore = new score(scoreContainer);
  let myPlayerPiece = new playerPiece(scaledSyringeImage)
  myPlayerPiece.setStartPosition(myGameArea) // this probably moves into game.start()
  let myGameViruses = new gameViruses(virusBlock, 200, 300)

  play(myGameArea, myPlayerPiece, myGameViruses, myScore, scaledVirusImage, scaledUltraVirusImage)
}

export { createComponentsAndPlay }
