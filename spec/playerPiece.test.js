import { playerPiece } from '../src/playerPiece.js';

let testPlayerPiece;
<<<<<<< HEAD
let pieceWidth;
let canvasWidth;
let canvasHeight;
let pieceHeight;
let colour;
let startx

beforeEach(() => {
  pieceWidth = 30;
  canvasWidth = 150;
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
  startx = (canvasWidth / 2) - (pieceWidth / 2)
});

describe('Starting position of player piece', () => {
  test('The piece starts centred on the canvas', () => {
    expect(testPlayerPiece.x).toEqual(startx);
  });
});

describe('Moving the player piece on the left', () => {
  test('The piece gets moved on the left, x gets smaller', () => {
    testPlayerPiece.moveLeft(5)
    expect(testPlayerPiece.x).toEqual(startx - 5)
  });

  test('The piece does not exit the frame to the left, x is never less than 0', () => {
    testPlayerPiece.moveLeft(startx);
    expect(testPlayerPiece.x).toEqual(0);
=======
let mockGameArea;
let mockCanvas;
let mockImage;

beforeEach(() => {
  mockImage = { width: 10, height: 20 };
  mockCanvas = { width: 400, height: 800 };
  mockGameArea = { canvas: mockCanvas };
  testPlayerPiece = new playerPiece(mockImage);
});

describe('Set starting position', () => {
  test('The image is centred on the canvas', () => {
    testPlayerPiece.setStartPosition(mockGameArea)
    expect(testPlayerPiece.x).toEqual((mockCanvas.width / 2) - (mockImage.width / 2));
  })

  test('The image is centred on the bottom of the canvas', () => {
    testPlayerPiece.setStartPosition(mockGameArea)
    expect(testPlayerPiece.y).toEqual(mockCanvas.height - (mockCanvas.height / 4));
  })
})

describe('Moving player piece', () => {

  beforeEach(() => {
    testPlayerPiece.setStartPosition(mockGameArea)
>>>>>>> main
  });

<<<<<<< HEAD
describe('Moving the player piece to the right', () => {
  test('The piece gets moved to the right, x gets larger', () => {
    testPlayerPiece.moveRight(5);
    expect(testPlayerPiece.x).toEqual(startx + 5);
  });

  test('The piece does not exit the frame to the right', () => {
    testPlayerPiece.moveRight(startx);
    expect(testPlayerPiece.x).toEqual(canvasWidth - pieceWidth);
  })
});
=======
  describe('Moving the player piece on the left', () => {
    test('The piece gets moved on the left, x gets smaller', () => {
      testPlayerPiece.moveLeft(5)
      expect(testPlayerPiece.x).toEqual(190)
    });

    test('The piece does not exit the frame to the left, x is never less than 0', () => {
      testPlayerPiece.moveLeft(300);
      expect(testPlayerPiece.x).toEqual(0);
    });
  });

  describe('Moving the player piece to the right', () => {
    test('The piece gets moved to the right, x gets larger', () => {
      testPlayerPiece.moveRight(5);
      expect(testPlayerPiece.x).toEqual(200);
    });
>>>>>>> main

    test('The piece does not exit the frame to the right', () => {
      testPlayerPiece.moveRight(300);
      expect(testPlayerPiece.x).toEqual(mockCanvas.width - mockImage.width);
    })
  });
});

describe('it renders on the canvas', () => {
  let mockGameArea;

  beforeEach(() => {
    mockGameArea = {
      drawImage: () => { }
    }
  })
  test('it provides rendering details to the game area', () => {
    jest.spyOn(mockGameArea, 'drawImage')
    testPlayerPiece.render(mockGameArea)
    expect(mockGameArea.drawImage).toHaveBeenCalled()
  })
})


describe('Player piece crashing with virus block',()=>{
  let mockVirus;
  mockVirus = {
    x: 50,
    y: 30,
    width: 4,
    height: 4
  }

  test('It returns false when it is not crashing for x case',()=>{
    testPlayerPiece.moveLeft(50)
    expect(testPlayerPiece.crashWith(mockVirus)).toEqual(false)
  })

  test('It returns false when it is not crashing for x case',()=>{
    testPlayerPiece.moveRight(50)
    expect(testPlayerPiece.crashWith(mockVirus)).toEqual(false)
  })

  test('It returns false when it is not crashing for y case',()=>{
    expect(testPlayerPiece.crashWith(mockVirus)).toEqual(false)
  })

  test('It returns false when it is not crashing for y case',()=>{
    expect(testPlayerPiece.crashWith(mockVirus)).toEqual(false)
  })
})
