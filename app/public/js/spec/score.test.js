import { score } from '../src/score.js';

describe('Score', () => {
  let testScore;
  let mockElement;

  beforeEach(() => {
    mockElement = {
      innerHTML: ""
    };
  });

  it('Renders 0 on the target element when is created', () => {
    testScore = new score(mockElement);
    expect(mockElement.innerHTML).toEqual('<p id="score">Score: 0</p>');
  });

  it('Increases the score by 1', () => {
    testScore = new score(mockElement);
    testScore.increaseScore(1);
    expect(mockElement.innerHTML).toEqual('<p id="score">Score: 1</p>');
  })

  it('Increases the score by 1, multiple times', () => {
    testScore = new score(mockElement);
    testScore.increaseScore(1);
    testScore.increaseScore(1);
    expect(mockElement.innerHTML).toEqual('<p id="score">Score: 2</p>');
  })
});