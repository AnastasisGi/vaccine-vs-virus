import { virusBlock } from '../src/virusBlock.js';

let startx = 0,
  starty = 0,
  testVirusBlock,
  mockImage;

beforeEach(() => {
  testVirusBlock = new virusBlock(mockImage, startx, starty)
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
        drawImage: () => { }
      }
    })
    test('it provides rendering details to the game area', () => {
      jest.spyOn(mockGameArea, 'drawImage')
      testVirusBlock.render(mockGameArea)
      expect(mockGameArea.drawImage).toHaveBeenCalledWith(mockImage, startx, starty)
    })
  })
})
