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
    let mockCanvasContext,
     mockGameArea;

    beforeEach(() => {
      mockCanvasContext = {fillRect: () => {}}
      mockGameArea = {
        context: mockCanvasContext,
        setFillStyle: () => {}
      }
    })
    test('it renders at the correct co-ordinates', () => {
      jest.spyOn(mockCanvasContext, 'fillRect')
      testVirusBlock.render(mockGameArea)
      expect(mockCanvasContext.fillRect).toHaveBeenCalledWith(startx, starty, width, height)
    })

    test('it renders with the correct colour', () => {
      jest.spyOn(mockGameArea, 'setFillStyle')
      testVirusBlock.render(mockGameArea)
      expect(mockGameArea.setFillStyle).toHaveBeenCalledWith(colour)
    })

  })

})
