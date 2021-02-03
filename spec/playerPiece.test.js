import { playerPiece } from '../src/playerPiece.js';

let testPlayerPiece;
<<<<<<< HEAD
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
=======
let mockGameArea;
let mockCanvas;
let mockImage;

beforeEach(() => {
  mockImage = { width: 10, height: 20 };
  mockCanvas = { width: 400, height: 800 };
  mockGameArea = { canvas: mockCanvas };
  testPlayerPiece = new playerPiece(mockImage);
>>>>>>> 1f1b80beb3b851cfdb21aa55d014b4dfed44dbf3
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
  });

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

<<<<<<< HEAD
  test('The piece does not exit the frame to the right', () => {
    testPlayerPiece.moveRight(55);
    expect(testPlayerPiece.x).toEqual(canvasWidth - pieceWidth);
  })
});
=======
  describe('Moving the player piece to the right', () => {
    test('The piece gets moved to the right, x gets larger', () => {
      testPlayerPiece.moveRight(5);
      expect(testPlayerPiece.x).toEqual(200);
    });
>>>>>>> 1f1b80beb3b851cfdb21aa55d014b4dfed44dbf3

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
      drawPlayerImage: () => { }
    }
  })
  test('it provides rendering details to the game area', () => {
    jest.spyOn(mockGameArea, 'drawPlayerImage')
    testPlayerPiece.render(mockGameArea)
    expect(mockGameArea.drawPlayerImage).toHaveBeenCalled()
  })
})
