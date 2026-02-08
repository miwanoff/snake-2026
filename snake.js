const canvas = document.getElementById("canvas");

class Block {
  constructor(canvas, col = 0, row = 0, blockSize = 10) {
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

class Apple {
  constructor(canvas, color = "LimeGreen") {
    this.block = new Block(canvas, 15, 30);
    this.color = color;
    this.canvas = canvas;
  }

  draw() {
    this.block.drawCircle(this.color);
  }
}

class Snake {
  constructor(canvas, color = "blue") {
    this.segments = [
      new Block(canvas, 7, 5),
      new Block(canvas, 6, 5),
      new Block(canvas, 5, 5),
    ];
    this.color = color;
    this.canvas = canvas;
    this.direction = "right";
    this.nextDirection = "right";
  }

  draw() {
    for (let i = 0; i < this.segments.length; i++) {
      this.segments[i].drawSquare(this.color);
    }
  }
}

const snake = new Snake(canvas);
snake.draw();
// const apple = new Apple(canvas);
// apple.draw();

// const block = new Block(canvas, 10, 20);
// block.drawSquare();
// const apple = new Block(canvas, 15, 30);
// apple.drawCircle();
