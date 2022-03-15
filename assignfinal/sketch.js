let cam, grill;
let radi, rate, increase;
let delta = 0.01;
function preload() {
  grill = loadImage('hondafront.png');
}
function setup() {
  
  createCanvas(400, 400, WEBGL);
  // cam = createCamera();
  grill = loadImage('hondafront.png');
  radi = 200;
  // rate = 0;
  rate = 1;
  increase = 0.005;
  // cam.pan(-0.8);
}

function draw() {
  // frustum(-width/2, width/2, -height/2, height/2, 0, max(width, height))
  background(155, 203, 232);
  
  // console.log(max(width, height));
  
  ambientLight(500);
  // lights();
  orbitControl(2, 2, 2);
  // translate(-700, 300, -700)
  translate(0, 300, -1000)
  push();
  translate(0, 80, 0)
  noStroke();
  // fill('Yellow')
  fill(93, 93, 93);
  rotateX(PI/2)
  // translate(800, 800, 200)
  // translate(0, 500, 0)
  torus(830, 130, 16, 2);
  pop();
  
  // pop();
  // push();
  // translate(600, 0, 600);
  push();
  // translate(0, frameCount*0.05, 0)
  let x = radi * sin(rate * frameCount * 0.02);
  let z = radi * cos(rate * frameCount * 0.02);
  let y = 0;
  translate(x, y, z)
  rotateY(rate * frameCount * 0.02);
  push();
  // rotate(PI/2);
  translate(-800, 20, 0)
  createCar();
  pop();
  
  pop();
  
  push();
  
  translate(1300, 0, -2000)
  rotateX(PI)
  hill(1000);
  translate(-2300, 0, 0)
  hill(1200)
  translate(-700, 0, 0);
  hill(400)
  pop();
  
  push();
  translate(0, 90, 0)
  rotateX(PI/2);
  noStroke();
  // fill('GREEN');
  fill(110, 187, 89)
  plane(12000, 12000);
  pop();
  
  
  push();
  rotateX(PI);
  translate(0, 400, 0)
  tree(1000);
  translate(1000, -400, 2000);
  tree(400);
  translate(300, -200, -400);
  tree(400);
  translate(-2000, 0, -200);
  tree(400);
  translate(-150, 100, 50);
  // tree(400);
  translate(-80, -500, -150);
  tree(400);
  translate(-500, -150, 40);
  tree(400);
  pop();

  push();
  translate(-350, -1200, -1300);
  clouds(100);
  translate(1000, 0, 0)
  rotate(PI/4);
  clouds(200)
  translate(180, 0, 20)
  clouds(100)
  translate(-2000, 200, 0)
  clouds(200)
  translate(0, 500, 4000)
  clouds(250)
  translate(2000, -700, 0)
  clouds(200)
  pop();
  
  push();
  translate(0, -300, 3700)
  rotateX(PI);
  hill(1000);
  translate(300, 0, 900)
  tree(400);
  translate(-600, -60, 0);
  tree(400);
  translate(400, 100, 0);
  tree(400);
  pop();
  
  push();
  translate(0, -2000, 500);
  noStroke();
  fill('yellow')
  sphere(100);
  pop();
  
  push();
  
  pop();
}

function createCar() {
  push();
  fill('RED');
  box(150, 60, 260, 50);
  pop();
  
  // push();
  translate(75, 30, 80);
  push();
  wheel();
  pop();
  
  // push();
  translate(0, 0, -160);
  push();
  wheel();
  pop();
  
  // push();
  translate(-150, 0, 0);
  push();
  wheel();
  pop();
  
  translate(0, 0, 160);
  push();
  wheel();
  pop();
  
  // push();
  translate(75, -80, -110);
  push();
  fill('RED');
  box(150, 60, 155, 50);
  pop();
  
  // push();
  translate(0, 20, 90);
  push();
  rotateX(PI/4);
  box(149, 90, 50, 50)
  pop();
  
  // push();
  translate(0, 30, 71);
  push();
  texture(grill)
  noStroke()
  plane(150, 60)
  pop();
  
  translate(0, -30, -210)
  push();
  fill('RED');
  rotateX(PI/3);
  box(150, 85, 60, 50);
  pop();

 
}

function wheel() {
  noStroke();
  fill('GRAY');
  rotate(PI/2);
  rotateY(frameCount * 0.05);
  cylinder(30, 30);
  fill('WHITE');
  cylinder(20, 32);
}

function hill(size) {
  noStroke();
  fill(151, 198, 138);
  return cone(size);
}
  
function tree(height) {
  noStroke();
  
  fill('BROWN');
  cone(height/20, height);
  fill('GREEN');
  translate(0, height/40, 0);
  cone(height/3, height/2);
  translate(0, height/3, 0);
  cone(height/6, height/3);
}

function clouds(radius) {
  noStroke()
  fill('WHITE');
  sphere(radius);
  translate(-radius, 0, 0);
  sphere(radius/2);
  translate(radius*1.8, radius/3, 0)
  sphere(radius/2)
}