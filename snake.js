const canvas = document.getElementById("canvas");

class Block {
  constructor(canvas, row = 0, col = 0, blockSize = 10) {
    this.context = canvas.getContext("2d");
    this.blockSize = blockSize;
    this.row = row;
    this.col = col;
  }

  drawSquare(color = "blue") {
    const x = this.col * this.blockSize;
    const y = this.row * this.blockSize;
    this.context.fillStyle = color;
    this.context.fillRect(x, y, this.blockSize, this.blockSize);
  }

  circle(x, y, radius) {
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    this.context.fill();
  }

  drawCircle(color = "green") {
    const centerX = this.col * this.blockSize + this.blockSize / 2;
    const centerY = this.row * this.blockSize + this.blockSize / 2;
    this.context.fillStyle = color;
    this.circle(centerX, centerY, this.blockSize / 2);
  }
}

const block = new Block(canvas, 10, 20);
block.drawSquare();
const apple = new Block(canvas, 15, 30);
apple.drawCircle();