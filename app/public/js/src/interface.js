import { createComponentsAndPlay } from './createComponentsAndPlay.js';
import { syringeImage, virusImage, ultraVirusImage } from './Images.js'
import { startGame } from './startGame.js'

let element;

window.addEventListener('load', () => {
  element = document.getElementById('app')
  location.hash = 'index'
  window.addEventListener('hashchange', () => {
    if (location.hash === '#index') {
      startGame(element)
    } else if (location.hash === '#play') {
      createComponentsAndPlay(element, syringeImage, virusImage, ultraVirusImage);
    } else if (location.hash === '#game-over') {
      let button = document.getElementById('restart-game')
      button.addEventListener('click', () => {
        location.hash = 'play'
      })
    }
  })
})
