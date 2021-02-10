function startGame(element) {
  element.innerHTML = `<button id="start-game" type="button" name="start-game">Start game</button>`
  let button = document.getElementById('start-game')
  button.addEventListener('click',() => {
    location.hash = 'play'
  })
}

export { startGame }
