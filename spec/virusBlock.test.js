import {virusBlock} from '../src/virusBlock.js';

let colour = 'red',
 height = 10,
 startx = 0,
 starty = 0,
 testVirusBlock,
 width = 10;

beforeEach(() => {
  testVirusBlock = new virusBlock(width, height, colour, startx, starty)
})

describe('virus block', () => {
  test('it moves down the canvas', () => {
    testVirusBlock.drop(5)
    expect(testVirusBlock.y).toEqual(5)
  })

  describe('it renders on the canvas', () => {
    let mockGameArea;

    beforeEach(() => {
      mockGameArea = {
        drawRectangularObject: () => {}
      }
    })
    test('it provides rendering details to the game area', () => {
      jest.spyOn(mockGameArea, 'drawRectangularObject')
      testVirusBlock.render(mockGameArea)
      expect(mockGameArea.drawRectangularObject).toHaveBeenCalledWith(width, height, colour, startx, starty)
    })
  })
})
