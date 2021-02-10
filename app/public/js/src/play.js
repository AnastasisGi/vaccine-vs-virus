function play(myGameArea, myPlayerPiece, myGameViruses, myScore, virusImage, ultraVirusImage) {
  
  let gameLoop = () => {
    myGameArea.clearCanvas()
    myPlayerPiece.render(myGameArea)
    myGameViruses.increaseFrameNo()
    myGameViruses.updateVirusesArray(virusImage, ultraVirusImage)
    for (let i = 0; i < myGameViruses.viruses.length; i += 1) {
      if (myPlayerPiece.isCollidingWith(myGameViruses.viruses[i]) && myGameViruses.viruses[i].ultra) {
        location.hash = 'game-over';
        clearInterval(myIntervalId);
      } else if (myPlayerPiece.isCollidingWith(myGameViruses.viruses[i]) && !myGameViruses.viruses[i].ultra) {
        myGameViruses.viruses.splice(i, 1)
        myScore.increaseScore(1)
      } else {
        myGameViruses.viruses[i].drop(3);
        myGameViruses.viruses[i].render(myGameArea);
      }
    }
  }
  
  window.addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
      myPlayerPiece.moveRight(10);
    } else if (event.keyCode === 37) {
      myPlayerPiece.moveLeft(10);
    }
  });

  let myIntervalId = setInterval(gameLoop, 20)
  
}

export { play };