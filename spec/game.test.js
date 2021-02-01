import { game } from '../src/game.js';


describe ('When updating the camvas ',()=>{


  test('It asks gameArea to clear the camvas',()=>{
    let myGameArea = {
      clearCanvas: () => { }
    }
    let myGamePiece = {
      render:()=>{ }
    }
    jest.spyOn(myGameArea,'clearCanvas')

    let myGame = new game(myGameArea,myGamePiece)
    myGame.updateGameArea();
    expect(myGameArea.clearCanvas).toHaveBeenCalled();
  })

test('It asks the gamePiece to rerender',()=>{

  let myGameArea = {
    clearCanvas: () => { }
  }
  let myGamePiece = {
    render:()=>{ }
  }
  jest.spyOn(myGamePiece,'render')

  let myGame = new game(myGameArea,myGamePiece)
  myGame.updateGameArea();
  expect(myGamePiece.render).toHaveBeenCalledWith(myGameArea);
  })


})
