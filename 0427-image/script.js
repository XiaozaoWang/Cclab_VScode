let img;



function preload() {
  img = loadImage("assets/colorful.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(220);


  console.log(img.width);
}

function draw() {
  image(img, 0, 0);
}


