class Card {
    x;
    y;
    width;
    height;
    color;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext('2d');
        this.open = false;
        this.defaultColor = "black";
        this.reopen = true;
    }


//phuong thuc hien thi doi tuong Card
    drawCard() {
        this.context.beginPath();
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = this.defaultColor;
        this.context.fill();
        this.context.closePath();
    }

    showColor() {
        this.defaultColor = this.color;
        this.open = true;
        setTimeout(() => {
            if (this.reopen === true) {
                this.defaultColor = "purple";
                this.open = false;
            } else {
                this.open = false;
            }
        }, 2000)
    }

}
