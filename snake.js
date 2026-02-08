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
    console.log("Col1, Row1", this.col, this.row);
    console.log("circle", centerX, centerY);
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

  move() {
    const widthInBlocks = this.canvas.width / this.block.blockSize; // 40
    const heightInBlocks = this.canvas.height / this.block.blockSize; // 40
    let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    console.log("Col, Row", randomCol, randomRow);
    this.block = new Block(this.canvas, randomCol, randomRow);
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

class Game {
  constructor(canvas, blockSize = 10) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.score = 0;
    this.directions = {
      37: "left",
      38: "up",
      39: "right",
      40: "down",
    };
    this.blockSize = blockSize;
    this.apple = new Apple(canvas);
    this.snake = new Snake(canvas);
  }

  drawBorder() {
    this.context.fillStyle = "Grey";
    this.context.fillRect(0, 0, this.canvas.width, this.blockSize);
    this.context.fillRect(
      0,
      this.canvas.height - this.blockSize,
      this.canvas.width,
      this.blockSize,
    );
    this.context.fillRect(0, 0, this.blockSize, this.canvas.height);
    this.context.fillRect(
      this.canvas.width - this.blockSize,
      0,
      this.blockSize,
      this.canvas.height,
    );
  }

  drawScore = function () {
    this.context.font = "20px Courier";
    this.context.fillStyle = "Black";
    this.context.textAlign = "left";
    this.context.textBaseline = "top";
    this.context.fillText(
      "Score: " + this.score,
      this.blockSize,
      this.blockSize,
    );
  };

  go() {
    this.apple.draw();
    this.snake.draw();
    this.drawScore();
  }
}

const game = new Game(canvas);
game.drawBorder();
game.go();

// snake.draw();
// const apple = new Apple(canvas);

// apple.move();
// apple.draw();

// const block = new Block(canvas, 10, 20);
// block.drawSquare();
// const apple = new Block(canvas, 15, 30);
// apple.drawCircle();
