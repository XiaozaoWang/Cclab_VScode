let xStart;
let yStart;
let xStart_array = [];
let yStart_array = [];
let mouseX_array = [];
let mouseY_array = [];

function setup() {
  let cnv = createCanvas(500, 400);
  background(255);
  cnv.id("p5-drag");
}

function draw() {
  textSize(18);
  drawTriangles();
  noStroke();
  fill(0);
  text("Raw events: ", 170,380);
  fill(255,0,0);
  text("High level events: ", 125,350);
  fill(0,0,255);
  text("Graphical components: ", 5,20);
  stroke(150, 200, 150);
  fill(150, 200, 150);

}



function decoration() {
  decoration_mode = !decoration_mode;
}

function mousePressed() {
  fill(150, 200, 150);
  stroke(150, 200, 150);
  xStart = mouseX;
  yStart = mouseY;
  noStroke();
  fill(255);
  rect(300,360,20,30);
  fill(0);
  text("down", 300,380);
}

function mouseDragged() {
  background(255);
  fill(255);
  stroke(150, 200, 150, 100);
  strokeWeight(1);
  rect(xStart, yStart, mouseX - xStart, mouseY - yStart);
  fill(150, 200, 150);
  stroke(150, 200, 150);
  triangle(
    (1 / 2) * (mouseX + xStart),
    yStart,
    xStart,
    mouseY,
    mouseX,
    mouseY
  );
  noStroke();
  fill(255,0,0);
  text("mouse dragged", 300,350);
  fill(0);
  text("down", 300,380);

}

function mouseReleased() {
  background(255);
  append(xStart_array, xStart);
  append(yStart_array, yStart);
  append(mouseX_array, mouseX);
  append(mouseY_array, mouseY);
  if (mouseIsPressed == false) {
    noStroke();
    fill(0);
    text("up", 300,380);
  }

}


function drawTriangles() {
  for (let i = 0; i < xStart_array.length; i++) {
    fill(150, 200, 150);
    stroke(150, 200, 150);
    triangle(
      (1 / 2) * (mouseX_array[i] + xStart_array[i]),
      yStart_array[i],
      xStart_array[i],
      mouseY_array[i],
      mouseX_array[i],
      mouseY_array[i]
    );
  }
}
