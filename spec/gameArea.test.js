import { gameArea } from '../src/gameArea.js';

let width = 480;
let height = 800;
let testGameArea;
let mockCanvas;
let mockContext;

beforeEach(()=> {
  mockContext = {
    fillRect: () => {},
  }

  mockCanvas = {
    getContext: ()=> { return mockContext }
  }

  testGameArea = new gameArea(width, height, mockCanvas)
})

describe('rendering a rectangular object', ()=> {
  test('it fills the object with the specified colour', ()=> {
    testGameArea.drawRectangularObject(0, 0, 'red', 0, 0);
    expect(mockContext.fillStyle).toEqual('red');
  })
});