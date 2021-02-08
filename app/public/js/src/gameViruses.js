function gameViruses(virusBlock, virusTime, ultraVirusTime) {
  this.virusBlock = virusBlock
  this.virusTime = virusTime
  this.ultraVirusTime = ultraVirusTime
  this.frameNo = 0;
  this.viruses = []

  this.increaseFrameNo = () => {
    return this.frameNo += 1
  }

  this.updateVirusesArray = (virusImage, ultraVirusImage) => {
    let x
    if (this.frameNo == 1 || this.frameNo % this.virusTime === 0) {
      x = this.getRandomInt(480 - virusImage.width);
      this.viruses.push(new this.virusBlock(virusImage, x, 10, false));
    } else if (this.frameNo % this.ultraVirusTime === 0) {
      x = this.getRandomInt(480 - ultraVirusImage.width);
      this.viruses.push(new this.virusBlock(ultraVirusImage, x, 10, true));
    }
  }

  this.getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

}

export { gameViruses };
