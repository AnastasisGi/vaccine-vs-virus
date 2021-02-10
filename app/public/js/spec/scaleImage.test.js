import { scaleImage } from '../src/scaleImage.js';

let givenWidth;
let specifiedProportion;
let mockImage;
let scaledImage;

describe('scaling an image', () => {
  beforeEach(()=> {
    mockImage = {
      height: 100,
      width: 50
    }
  })
  
  it('returns an image, width scaled to specified proportion of a given width', () => {
    givenWidth = 200
    specifiedProportion = 0.5
    
    scaledImage = scaleImage(mockImage, givenWidth, specifiedProportion)

    expect(scaledImage.width).toEqual(100)
  })

  it('returns an image, width scaled to specified proportion of different given widths', () => {
    givenWidth = 300
    specifiedProportion = 0.5
    let scaledImage = scaleImage(mockImage, givenWidth, specifiedProportion)

    expect(scaledImage.width).toEqual(150)
  })

  it('returns an image, width scaled to different specified proportions', () => {
    givenWidth = 200
    specifiedProportion = 2
    
    let scaledImage = scaleImage(mockImage, givenWidth, specifiedProportion)

    expect(scaledImage.width).toEqual(400)
  })

  it('returns an image with h-to-w ratio maintained when width scaled to specified proportion of a given width', () => {
    givenWidth = 200
    specifiedProportion = 0.5
    
    let scaledImage = scaleImage(mockImage, givenWidth, specifiedProportion)

    expect(scaledImage.height).toEqual(200)
  })

  it('returns an image with h-to-w ratio maintained when width scaled to specified proportion of different given widths', () => {
    givenWidth = 300
    specifiedProportion = 0.5
    
    let scaledImage = scaleImage(mockImage, givenWidth, specifiedProportion)

    expect(scaledImage.height).toEqual(300)
  })

  it('returns an image with h-to-w ratio maintained when width scaled to different specified proportions', () => {
    givenWidth = 200
    specifiedProportion = 2
    
    let scaledImage = scaleImage(mockImage, givenWidth, specifiedProportion)

    expect(scaledImage.height).toEqual(800)
  })

  it('returns an image with different h-to-w ratio maintained when width scaled', () => {
    mockImage = {
      height: 50,
      width: 100
    }
    
    givenWidth = 200
    specifiedProportion = 2
    
    let scaledImage = scaleImage(mockImage, givenWidth, specifiedProportion)

    expect(scaledImage.height).toEqual(200)
  })
})