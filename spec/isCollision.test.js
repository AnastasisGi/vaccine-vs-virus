import {isCollision} from '../src/isCollision.js'

let bigComponent1;
let smallComponent1;
let bigComponent2;
let smallComponent2;

beforeEach (()=>{
  bigComponent1 = {
    x:1,
    y:1,
    width:10,
    height:10
  }
})


describe ('Is Collision', ()=> {
  test('THere is no overlap, returns false',()=>{
    bigComponent2 = {
      x:21,
      y:21,
      width:10,
      height:10
     }
     expect(isCollision(bigComponent1,bigComponent2)).toBe(false)
  })


  test('THere is overlap, returns true',()=>{
    bigComponent2 = {
      x:1,
      y:1,
      width:10,
      height:10
     }
     expect(isCollision(bigComponent1,bigComponent2)).toBe(true)
  })
})


// component1(x=1,y=1, width=10, height=10)            true
// component2(x=1,y=1, width=10, height=10)

// component1(x=1,y=1, width=10, height=10)            false
// component2(x=21,y=21, width=10, height=10)
