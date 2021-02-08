function score (element) {

  this.element = element;
  this.score = 0;
    
  this.element.innerHTML = `<p id="score">${this.score}</p>`;

  this.increaseScore = (addition) => {
    this.score += addition;
    this.element.innerHTML = `<p id="score">${this.score}</p>`;
  }
}

export { score };
