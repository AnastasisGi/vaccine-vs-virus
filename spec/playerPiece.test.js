const playerPiece = require('../src/playerPiece');

let testPlayerPiece;

describe('Moving the player piece on the left',()=>{

  beforeEach(()=>{
    testPlayerPiece = new playerPiece(
      30,
      30,
      "red",
      50,
      50
    )
  })

  test('THe piece gets moved on the left, x gets smaller',()=>{
    testPlayerPiece.moveLeft(5)
    expect(testPlayerPiece.x).toEqual(45)
  }
  );
})
