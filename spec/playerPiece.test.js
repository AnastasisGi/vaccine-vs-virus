import { playerPiece } from '../src/playerPiece.js';

let testPlayerPiece;
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

  describe('Moving the player piece to the right', () => {
    test('The piece gets moved to the right, x gets larger', () => {
      testPlayerPiece.moveRight(5);
      expect(testPlayerPiece.x).toEqual(200);
    });

    test('The piece does not exit the frame to the right', () => {
      testPlayerPiece.moveRight(300);
      expect(testPlayerPiece.x).toEqual(mockCanvas.width - mockImage.width);
    })
  });
});

// describe('it renders on the canvas', () => {
//   let mockGameArea;

//   beforeEach(() => {
//     mockGameArea = {
//       drawRectangularObject: () => { }
//     }
//   })
//   test('it provides rendering details to the game area', () => {
//     jest.spyOn(mockGameArea, 'drawRectangularObject')
//     testPlayerPiece.render(mockGameArea)
//     expect(mockGameArea.drawRectangularObject).toHaveBeenCalledWith(pieceWidth, pieceHeight, colour, (canvasWidth / 2) - (pieceWidth / 2), canvasHeight)
//   })
// })
