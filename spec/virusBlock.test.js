import { virusBlock } from '../src/virusBlock.js';

let testVirusBlock;
let width = 10;
let height = 10;
let startx = 0;
let starty = 0;

beforeEach(() => {
  testVirusBlock = new virusBlock(width, height, 'red', startx, starty)
})

describe('virus block', () => {
  test('it moves down the canvas', () => {
    testVirusBlock.drop(5)
    expect(testVirusBlock.y).toEqual(5)
  })

  test('it renders on the canvas', () => {
    let mockCanvasContext = { fillRect: () => {} }
    let mockGameArea = {context: mockCanvasContext }
    jest.spyOn(mockCanvasContext, 'fillRect')
    testVirusBlock.render(mockGameArea)
    expect(mockCanvasContext.fillRect).toHaveBeenCalledWith(startx, starty, width, height)
  })
})
