export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 90;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('husky');
    }

    update() {

    }

    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y)
    }

}