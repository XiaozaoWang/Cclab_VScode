// GENESIS

let supernova_button;
let rate;
let scale;
let base_radius;
let increase_scale;

function setup() {
    let canvas = createCanvas(400, 400);// actually creates HTML item
    canvas.parent("p5-container");
    stroke(255);
    strokeWeight(2);
    noFill();
    scale = 2;
    base_radius = 10 * scale;
    // button = createButton("Supernova Explosion!");
    // button.position(0, height);
    // button.mousePressed(supernova);
    increase_scale = false;
}

function draw() {
    background(0);
    push();
    if (increase_scale == true) {
        scale += 0.2;
    }
    rate = map(mouseX, 0, width, 0.1, 10);
    magic = map(mouseY, 0, height, 0.5, 5);
    translate(width / 2, height / 2);
    rotate(frameCount / 100);
    beginShape();
    for (let angle = 0; angle < 360; angle++) {
        //console.log(angle);
        radius = base_radius +
            sin(angle * rate + frameCount / 10) * scale;
        vertex(cos(radians(angle * magic)) * radius,
            sin(radians(angle)) * radius);
    }
    endShape();
    pop();

    if (mouseIsPressed == true) {
        base_radius = 140;
        scale = 20;

        r = map(mouseX, 0, width, 0, 255);
        g = map(mouseX, 0, width, 255, 0);
        b = map(mouseY, 0, height, 0, 255);
        stroke(r, g, b);
    }
}
function supernova() {
    increase_scale = !increase_scale;
}

function mouseReleased() {
    scale = 2;
    base_radius = 10 * scale;
    stroke(255);
}
