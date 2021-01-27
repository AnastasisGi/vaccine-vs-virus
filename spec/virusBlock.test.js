import { virusBlock } from '../src/virusBlock.js';

let testVirusBlock;
let width = 10;
let height = 10;
let startx = 0;
let starty = 0;
let colour = 'red';

beforeEach(() => {
  testVirusBlock = new virusBlock(width, height, colour, startx, starty)
})

describe('virus block', () => {
  test('it moves down the canvas', () => {
    testVirusBlock.drop(5)
    expect(testVirusBlock.y).toEqual(5)
  })

  describe('it renders on the canvas', () => {
    test('it renders at the correct co-ordinates', () => {
      let mockCanvasContext = { fillRect: () => {} }
      let mockGameArea = {
        context: mockCanvasContext,
        setFillStyle: () => {}
      }
      jest.spyOn(mockCanvasContext, 'fillRect')
      testVirusBlock.render(mockGameArea)
      expect(mockCanvasContext.fillRect).toHaveBeenCalledWith(startx, starty, width, height)
    })

    test('it renders with the correct colour', () => {
      let mockGameArea = {
        setFillStyle: () => {},
        context: { fillRect: () => {} }
      }
      jest.spyOn(mockGameArea, 'setFillStyle')
      testVirusBlock.render(mockGameArea)
      expect(mockGameArea.setFillStyle).toHaveBeenCalledWith(colour)
    })

  })

})
