function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);// actually creates HTML item
  canvas.id("p5-canvas");
  console.log(canvas);
  background(147, 132, 209);
}

function draw() {
  fill(236, 201, 238, 30);
  circle(random(width), random(height), random(30, 60));
}