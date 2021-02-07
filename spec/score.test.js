import { score } from '../src/score.js';
let testScore
let mockElement = {
  innerHTML: ""
 }

it ('Renders 0 on the target element when is created', function () {
  testScore = new score(mockElement)
  expect(mockElement.innerHTML).toEqual('<p id="score">0</p>')
});
