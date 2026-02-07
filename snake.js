const canvas = document.getElementById("canvas");

class Block {
  constructor(canvas, row = 0, col = 0, blockSize = 10) {
    this.context = canvas.getContext("2d");
    this.blockSize = blockSize;
    this.row = row;
    this.col = col;
  }

  drawSquare() {
    const x = this.col * this.blockSize;
    const y = this.row * this.blockSize;
    this.context.fillRect(x, y, this.blockSize, this.blockSize);
  }
}

const block = new Block(canvas, 10, 20);
block.drawSquare();
