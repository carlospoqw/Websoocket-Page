class Player {
    constructor(x, y) {
        this.x = 100;
        this.y = 100;
        this.velocity = 5;
        this.width = 10;
        this.height = 10;
    }
    show() {
        rect(this.x, this.y, this.width, this.height);
    }
    move(direction) {
        if (direction == 'up') {
            this.y -= this.velocity;
        }
        if (direction == 'down') {
            this.y += this.velocity;
        }
        if (direction == 'left') {
            this.x -= this.velocity;
        }
        if (direction == 'right') {
            this.x += this.velocity;
        }
    }
}