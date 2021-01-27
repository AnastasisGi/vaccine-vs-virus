NOUNS / OBJECTS
---------
gamePiece
virusBlock
vaccineBlock
gameOverBlock
gameArea
game


gamePiece
Properties: X, Y, width, canvasWidth(?), height, color
Verbs (methods):
- moveRight(distance)
- moveLeft(distance)
- update/render


blockFactory
Verb (methods):
- createVirus (returns a virus Block with random strength and X-position)
- createVaccine (returns a virus Block with random strength and X-position)

virusBlock
Properties: width, height, color, X, Y, strength
Verbs (methods):
- drop(distance)
- render
- cycle  (Gets stronger/bigger)


vaccineBlock
Properties: X, Y, width, height, color, strength
Verbs (methods):
- drop(distance)
- update/render
- cycle  (Gets weaker/worse)


game
Properties: doses/lives[int], vaccines[array], viruses[array], score[int], currentSpeed[int]
Verbs (methods):
- useDose(amount)
- addDose(amount)
- increaseSpeed()?

statBoard
Verb (methods):
render(targetElement, score, lives)


gameArea
Properties: canvas
