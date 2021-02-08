import { gameViruses } from '../src/gameViruses.js'

describe('game Viruses', () => {

  let testGameViruses;
  let virusImage;
  let ultraVirusImage;
  let mockImage;
  let mockVirus;

  beforeEach(() => {
    virusImage = { width: 0, height: 0 }
    ultraVirusImage = { width: 0, height: 0 }
    mockVirus = jest.fn()
  });

  test('the frame number increases', () => {
    testGameViruses = new gameViruses(mockVirus, 1, 0)
    expect(testGameViruses.increaseFrameNo()).toEqual(1)
  })

  test('it adds a virus object set by the virusTime', () => {
    testGameViruses = new gameViruses(mockVirus, 1, 0)
    testGameViruses.increaseFrameNo()
    testGameViruses.updateVirusesArray(virusImage, ultraVirusImage)
    expect(testGameViruses.viruses).toEqual([mockVirus.mock.instances[0]])
  })

  test('it checks that a new virus is called with the virusImage for the virusTime', () => {
    testGameViruses = new gameViruses(mockVirus, 1, 0)
    testGameViruses.increaseFrameNo()
    testGameViruses.updateVirusesArray(virusImage, ultraVirusImage)
    expect(mockVirus.mock.calls[0][0]).toBe(virusImage);
  })

  test('it adds a ultra virus object for the instance set by the ultraVirusTime', () => {
    testGameViruses = new gameViruses(mockVirus, 0, 2)
    testGameViruses.increaseFrameNo()
    testGameViruses.increaseFrameNo()
    testGameViruses.updateVirusesArray(virusImage, ultraVirusImage)
    expect(testGameViruses.viruses).toEqual([mockVirus.mock.instances[0]])
  })

  test('it checks that a new virus is called with the ultaVirusImage for the ultraVirusTime', () => {
    testGameViruses = new gameViruses(mockVirus, 0, 2)
    testGameViruses.increaseFrameNo()
    testGameViruses.increaseFrameNo()
    testGameViruses.updateVirusesArray(virusImage, ultraVirusImage)
    expect(mockVirus.mock.calls[0][0]).toBe(ultraVirusImage);
  })
})
