import { playerPiece } from '../src/playerPiece.js';

let testPlayerPiece;
let pieceWidth;
let canvasWidth;
let canvasHeight;
let pieceHeight;
let colour;

beforeEach(() => {
  pieceWidth = 30;
  canvasWidth = 50;
  canvasHeight = 400;
  pieceHeight = 30
  colour = "red"
  testPlayerPiece = new playerPiece(
    pieceWidth,
    pieceHeight,
    "red",
    canvasWidth,
    canvasHeight
  );
});

describe('Starting position of player piece', () => {
  test('The piece starts centred on the canvas', () => {
    expect(testPlayerPiece.x).toEqual((canvasWidth / 2) - (pieceWidth / 2));
  });
});

describe('Moving the player piece on the left', () => {
  test('The piece gets moved on the left, x gets smaller', () => {
    testPlayerPiece.moveLeft(5)
    expect(testPlayerPiece.x).toEqual(5)
  });

  test('The piece does not exit the frame to the left, x is never less than 0', () => {
    testPlayerPiece.moveLeft(55);
    expect(testPlayerPiece.x).toEqual(0);
  });
});

describe('Moving the player piece to the right', () => {
  test('The piece gets moved to the right, x gets larger', () => {
    testPlayerPiece.moveRight(5);
    expect(testPlayerPiece.x).toEqual(15);
  });

  test('The piece does not exit the frame to the right', () => {
    testPlayerPiece.moveRight(55);
    expect(testPlayerPiece.x).toEqual(canvasWidth - pieceWidth);
  })
});


describe('it renders on the canvas', () => {
  let mockGameArea;

  beforeEach(() => {
    mockGameArea = {
      drawRectangularObject: () => {}
    }
  })
  test('it provides rendering details to the game area', () => {
    jest.spyOn(mockGameArea, 'drawRectangularObject')
    testPlayerPiece.render(mockGameArea)
    expect(mockGameArea.drawRectangularObject).toHaveBeenCalledWith(pieceWidth, pieceHeight, colour, (canvasWidth / 2) - (pieceWidth / 2), canvasHeight)
  })
})


describe('Player piece crashing with virus block',()=>{
  let mockVirus;
  mockVirus = {
    x: 10,
    y: 30,
    width: 4,
    height: 4
  }

  test('It returns false when it is not crashing',()=>{
    testPlayerPiece.moveLeft(40)
    expect(testPlayerPiece.crashWith(mockVirus)).toEqual(false)
  })

  test('It returns false when it is not crashing',()=>{
    testPlayerPiece.moveRight(50)
    expect(testPlayerPiece.crashWith(mockVirus)).toEqual(false)
  })
})
