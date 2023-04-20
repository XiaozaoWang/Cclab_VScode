
let pos = 10;
let dir = 4;
let prev_dir;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    circle(pos, 200, 20);

    pos += dir;

    if (pos > 390 || pos < 10) {
        dir *= -1;
    }
}


function showAlert() {
    alert("Ahhhhhh")
}

function stop() {
    prev_dir = dir;
    dir = 0;
}

function start() {
    dir = prev_dir;
}

function spdup() {
    dir *= 3;
}
