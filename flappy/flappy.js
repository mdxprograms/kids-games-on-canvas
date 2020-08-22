import bgImg from "./images/bg.jpg";

class Flappy {
  constructor() {
    this.canvas = document.createElement("canvas")
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context = this.canvas.getContext("2d");

    this.start()
  }
  
  start() {
    document.getElementById("screen").appendChild(this.canvas)
    this.addBackground()
    this.addItem(30, 30, "red", 10, 120)
    this.addItem(40, 40, "lightblue", 60, 180)
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  addBackground(src) {
    const newBg = new Image()
    const { height, width } = this.canvas
    newBg.src = bgImg
    newBg.onload = () => this.context.drawImage(newBg, 0, 0, width, height)
  }

  addItem(width, height, color, x, y) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height)
  }
}

new Flappy()