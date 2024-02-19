let traceImage;

function preload() {
  traceImage = loadImage('trace.png');
}

function setup() {
  createCanvas(600, 350);
  background(255,255,255);
  image(traceImage, width / 2 - traceImage.width / 2, height / 2 - traceImage.height / 2);
}

function draw() {
}
  //background(225,225,0);
  
function mouseDragged() {
 noStroke();
  fill(0);
  ellipse(mouseX, mouseY,8,8);
}


function keyPressed() {
  if (key === 'r' || key === 'R') {
    background(255, 255, 255);
    image(traceImage, width / 2 - traceImage.width / 2, height / 2 - traceImage.height / 2);
  }
}