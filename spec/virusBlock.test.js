import { virusBlock } from '../src/virusBlock.js';

let testVirusBlock;
let starty = 0;

beforeEach(() => {
  testVirusBlock = new virusBlock(10, 10, 'red', 0, starty)
})

describe('virus block', () => {
  test('it moves down the canvas', () => {
    testVirusBlock.drop(5)
    expect(testVirusBlock.y).toEqual(5)
  })
})
