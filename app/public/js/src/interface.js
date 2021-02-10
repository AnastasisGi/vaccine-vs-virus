import { createComponentsAndPlay } from './createComponentsAndPlay.js';
import { syringeImage, virusImage, ultraVirusImage } from './Images.js'
import { startGame } from './startGame.js'


let element, scaledSyringeImage, scaledVirusImage, scaledUltraVirusImage;


window.addEventListener('load', () => {
  element = document.getElementById('app')
  location.hash = 'index'
  window.addEventListener('hashchange', () => {
    if (location.hash === '#index') {
      startGame(element)
    } else if (location.hash === '#play') {
      createComponentsAndPlay(element, syringeImage, virusImage, ultraVirusImage);
    }
  })
})
