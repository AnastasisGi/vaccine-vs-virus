function startGame() {
  myGameArea.start();
}

let myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 800;
    this.canvas.style = "border: 2px solid"
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}


window.addEventListener('load', () => {
  let element = document.getElementById('app')
  element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
  let button = document.getElementById('start-game')
  button.addEventListener('click', () => {
    element.innerHTML = ""
    startGame();
  })
});
