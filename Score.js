class Score {

  constructor(x) {
    this.x = x;
    this.score = 0;
  }


  display() {
    textSize(50);
    textAlign(CENTER);
    text(this.score, this.x, 50);
  }

  increment() {
    this.score++;
  }
}