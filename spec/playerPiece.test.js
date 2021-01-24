const playerPiece = require('../src/playerPiece');

let testPlayerPiece;
let pieceWidth;
let canvasWidth;

beforeEach(()=>{
  pieceWidth = 30;
  canvasWidth = 50;

  testPlayerPiece = new playerPiece(
    pieceWidth,
    30,
    "red",
    canvasWidth,
    50
  );
});

describe('Starting position of player piece', ()=>{
  test('The piece starts centred on the canvas', ()=>{
    expect(testPlayerPiece.x).toEqual((canvasWidth/2)-(pieceWidth/2));
  });
});

describe('Moving the player piece on the left',()=>{
  test('The piece gets moved on the left, x gets smaller',()=>{
    testPlayerPiece.moveLeft(5)
    expect(testPlayerPiece.x).toEqual(5)
  });

  test('The piece does not exit the frame to the left, x is never less than 0', ()=> {
    testPlayerPiece.moveLeft(55);
    expect(testPlayerPiece.x).toEqual(0);
  });
});

describe('Moving the player piece to the right',()=> {
  test('The piece gets moved to the right, x gets larger', ()=>{
    testPlayerPiece.moveRight(5);
    expect(testPlayerPiece.x).toEqual(15);
  });

  test('The piece does not exit the frame to the right', ()=>{
    testPlayerPiece.moveRight(55);
    expect(testPlayerPiece.x).toEqual(canvasWidth - pieceWidth);
  })
});
