let grill;
let delta = 0.01;
function preload() {
  grill = loadImage('hondafront.png');
}
function setup() {
  createCanvas(400, 400, WEBGL);
  grill = loadImage('hondafront.png');
}

function draw() {
  background(0);
  
  let locX = mouseX -height / 2;
  let locY = mouseY -width / 2;
  orbitControl();
  ambientLight(500);
  
  push();
  fill('RED');
  box(150, 60, 260, 50);
  pop();
  
  
  translate(75, 30, 80);
  push();
  fill('GRAY');
  rotate(PI/2);
  rotateY(frameCount * 0.05);
  cylinder(30, 30);
  pop();
  
  translate(0, 0, -160);
  push();
  fill('GRAY');
  rotate(PI/2);
  rotateY(frameCount * 0.05);
  cylinder(30, 30);
  pop();
  
  translate(-150, 0, 0);
  push();
  fill('GRAY');
  rotate(PI/2);
  rotateY(frameCount * 0.05);
  cylinder(30, 30);
  pop();
  
  translate(0, 0, 160);
  push();
  fill('GRAY');
  rotate(PI/2);
  rotateY(frameCount * 0.05);
  cylinder(30, 30);
  pop();
  
  translate(75, -80, -110);
  push();
  fill('RED');
  box(150, 60, 155, 50);
  pop();
  
  translate(0, 20, 90);
  push();
  rotateX(PI/4);

  box(149, 90, 50, 50)
  pop();
  
  translate(0, 30, 71);
  push();

  texture(grill)

  noStroke()
  plane(150, 60)
  // box(149, 90, 50, 50)
  pop();
  
  translate(0, -30, -210)
  push();
  fill('RED');
  rotateX(PI/3);
  box(150, 85, 60, 50);
  pop();
}