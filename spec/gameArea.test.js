import { gameArea } from '../src/gameArea.js';

let width = 480;
let height = 800;
let testGameArea;
let mockCanvas;
let mockContext;
let game;
let time = 20;


beforeEach(() => {
  mockContext = {
    fillRect: () => { },
    clearRect: () => { },
    drawImage: () => { }
  }

  game = {
    updateGameArea: () => { }
  }

  mockCanvas = {
    getContext: () => { return mockContext }
  }

  testGameArea = new gameArea(width, height, mockCanvas)
})

describe('clearing the canvas', () => {
  test('it clears the objects from the canvas', () => {
    jest.spyOn(mockContext, 'clearRect');
    testGameArea.clearCanvas()
    expect(mockContext.clearRect).toHaveBeenCalledWith(0, 0, testGameArea.canvas.width, testGameArea.canvas.height)
  })
})

describe('update the display', () => {
  test('it updates the canvas', () => {
    global.setInterval = jest.fn()
    testGameArea.updateDisplay(game.updateGameArea, time)
    expect(global.setInterval).toHaveBeenCalledWith(game.updateGameArea, time)
  })
})

describe('rendering a player image', () => {
  test('it asks the canvas the draw an image', () => {
    class MockImage { }
    jest.spyOn(mockContext, 'drawImage')
    testGameArea.drawImage(MockImage)
    expect(mockContext.drawImage).toHaveBeenCalled()
  })
})
