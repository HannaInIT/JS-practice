/**
 * @typedef {Object} GridCell
 * @property {number} x
 * @property {number} y
 * @property {boolean} alive
 * @property {boolean} [nextAlive]
 */

export default class Cell {
  static size;

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alive = Math.random() > 0.5;
    this.nextAlive = false;

     this.lifeTime = this.alive ? 1 : 0;
  }

  draw(context) {
    // Draw this background
    context.fillStyle = '#303030';
    context.fillRect(
      this.x * Cell.size,
      this.y * Cell.size,
      Cell.size,
      Cell.size
    );

    if (this.alive) {
      // Draw living this inside background
 let opacity = 1;
      if (this.lifeTime === 1) opacity = 0.25;
      else if (this.lifeTime === 2) opacity = 0.5;
      else if (this.lifeTime === 3) opacity = 0.75;
      else opacity = 1;

      context.fillStyle = `rgba(24, 215, 236, ${opacity})`;
      context.fillRect(
        this.x * Cell.size + 1,
        this.y * Cell.size + 1,
        Cell.size - 2,
        Cell.size - 2
      );
    }
  }

  liveAndLetDie(aliveNeighbors) {
    if (aliveNeighbors === 2) {
      // Living cell remains living, dead cell remains dead
      if (this.alive) {
         this.lifeTime++;
      }
      this.nextAlive = this.alive;
    } else if (aliveNeighbors === 3) {
      // Dead cell becomes living, living cell remains living
        if (!this.alive) {
        this.lifeTime = 1;
      } else {
        this.lifeTime++;
      }
      this.nextAlive = true;
    } else {
      // Living cell dies, dead cell remains dead
        if (this.alive) {
        this.lifeTime = 0;
      }
      this.nextAlive = false;
    }
  }

  update() {
    this.alive = this.nextAlive;
  }
}
