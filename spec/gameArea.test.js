import { gameArea } from '../src/gameArea.js';

let width = 480;
let height = 800;
let testGameArea;
let mockCanvas;
let mockContext;
let componentWidth = 10;
let componentHeight = 20;
let componentX = 30;
let componentY = 40;
let game;
let time = 20;

beforeEach(() => {
  mockContext = {
    fillRect: () => { },
    clearRect: () => { }
  }

  game = {
    updateGameArea: () => { }
  }

  mockCanvas = {
    getContext: () => { return mockContext }
  }

  testGameArea = new gameArea(width, height, mockCanvas)
})

describe('rendering a rectangular object', () => {
  test('it fills the object with the specified colour', () => {
    testGameArea.drawRectangularObject(0, 0, 'red', 0, 0);
    expect(mockContext.fillStyle).toEqual('red');
  })

  test('it draws a rectangle with the specified coordinates', () => {
    jest.spyOn(mockContext, 'fillRect');
    testGameArea.drawRectangularObject(componentWidth, componentHeight, 'red', componentX, componentY);
    expect(mockContext.fillRect).toHaveBeenCalledWith(componentX, componentY, componentWidth, componentHeight);
  })
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