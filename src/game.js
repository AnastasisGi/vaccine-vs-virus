// class Game {
//   constructor(element) {
//     this.element = element
//   }

//   render() {

//   }
// }

function startGame() {
  myGameArea.start();
}

var myGameArea = {
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
  startGame();
});