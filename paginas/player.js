class Player {
    constructor(x, y) {
        this.x = 100;
        this.y = 100;
        this.velocity = 4;
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
        //chocar con el muro
        this.x = constrain(this.x, -(canvasWidth / 2), (canvasWidth / 2) - this.width);
        this.y = constrain(this.y, -(canvasHeight / 2), (canvasHeight / 2) - this.height);
    }

    setPosition(x, y, height, width) {
        console.log("cambiado");
        this.player.x = x, this.player.y = y, this.player.width = width, this.player.height = height;
    }
}