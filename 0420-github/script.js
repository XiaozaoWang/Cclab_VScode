
let buttons = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);// actually creates HTML item
  canvas.id("p5-container");
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // generate
  if (random() < 0.12) {
    buttons.push(new Button(width / 2, height));
  }

  // update / display
  for (let i = 0; i < buttons.length; i++) {
    let b = buttons[i];
    b.move();
    b.slowDown();
    b.fall();
    b.live();
    b.checkMouse();
    b.checkEgdes();
    b.display();
  }

  // remove if the button is done!
  // FLIP THE FOR-LOOP!
  for (let i = buttons.length - 1; i >= 0; i--) {
    let b = buttons[i];
    if (b.isDone) {
      // remove it!
      buttons.splice(i, 1);
    }
  }

  // limit the number of the particles
  while (buttons.length > 500) {
    buttons.splice(0, 1); //(index, howMany)
  }

  // display the number of the particles
  fill(0);
  text(buttons.length, 10, 20);
}

//

class Button {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.rad = random(10, 30);
    //
    this.xSpd = random(-3, 3);
    this.ySpd = random(-15, -10);
    //
    this.r = 255;
    this.g = 255;
    this.b = 255;
    //
    this.isDone = false;
    this.lifespan = 1.0;
    this.lifeReduction = random(0.005, 0.015);
  }
  live() {
    this.lifespan -= this.lifeReduction;
    if (this.lifespan < 0) {
      this.isDone = true;
    }
  }
  checkMouse() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.rad) {
      // in the area
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.xSpd = random(-10, 10);
      this.ySpd = random(-10, 10);
      if (mouseIsPressed) {
        this.isDone = true;
      }
    } else {
      // out of the area
      //this.r = 255;
      //this.g = 255;
      //this.b = 255;
    }
  }
  slowDown() {
    this.xSpd *= 0.99; // -1%
    this.ySpd *= 0.99;
  }
  speedUp() {
    this.xSpd *= 1.04; // +4%
    this.ySpd *= 1.04;
  }
  fall() {
    this.ySpd += 0.2;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  checkEgdes() {
    if (this.y > height) {
      // to remove
      this.isDone = true;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b, 255 * this.lifespan);
    circle(0, 0, this.rad * 2 * this.lifespan);
    // display the lifespan
    fill(0);
    text(20);
    text(this.lifespan.toFixed(2), 25, 0);
    pop();
  }
}
