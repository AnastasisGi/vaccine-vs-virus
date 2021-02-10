function scaleImage(image, fullWidth, proportion) {
  let finalWidth = fullWidth * proportion;
  let resizeFactor = finalWidth / image.width;
  image.width = finalWidth;
  image.height = image.height * resizeFactor;  
  return image;
}

export { scaleImage };