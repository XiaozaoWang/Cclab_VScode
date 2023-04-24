let canvas1;
let canvas2;

function setup() {
    canvas1 = createCanvas(400, 400);
    canvas1.parent("canvas1");
    canvas2 = createCanvas(400, 400);
    canvas2.parent("canvas2");
}

function draw() {
    background(220);
    circle(200, 200, 20);
}


