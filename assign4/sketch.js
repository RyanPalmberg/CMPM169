let bg;

function setup() {
  createCanvas(400, 400);
  bg = 200;
}

function draw() {
  background(250, bg);
  
  // upper left corner
  push();
  // translate(0, 0)
  rotate(mouseY*0.01);
  for (let i=0; i < 20; i++) {
    // rotate(mouseY*0.01);
    push();
    rotate(i*TWO_PI/20);
    translate(0, mouseX);
    fill('#EB6262');
    ellipse(0,0,70,90);
    pop();
  }
  pop();
  
  
  //Upper right corner
  push();
  translate(400, 0);
  rotate(mouseY*0.01);
  for (let i=0; i < 20; i++) {
    push();
    rotate(i*TWO_PI/20);
    translate(0, mouseX);
    fill('#A7FA6D');
    ellipse(0,0,70,90);
    pop();
  }
  pop();
  
  //Lower right corner
  push();
  translate(400, 400);
  rotate(mouseY*0.01);
  for (let i=0; i < 20; i++) {
    push();
    rotate(i*TWO_PI/20);
    translate(0, mouseX);
    fill('#FADA6D');
    ellipse(0,0,70,90);
    pop();
  }
  pop();
  
  // Lower left corner
  push();
  translate(0, 400);
  rotate(mouseY*0.01);
  for (let i=0; i < 20; i++) {
    push();
    rotate(i*TWO_PI/19);
    translate(0, mouseX);
    fill('#EFA9E6');
    ellipse(0,0,70,90);
    pop();
  }
  pop();
  
  // Center
  push();
  translate(200, 200)
  rotate(mouseY*0.01);
  for (let i=0; i < 20; i++) {
    push();
    rotate(i*TWO_PI/20);
    translate(0, mouseX);
    fill('#90E7F5');
    ellipse(0,0,100,70);
    pop();
  }
  pop();
  
  // center 2
  push();
  translate(200, 200)
  rotate(mouseY*0.01);
  for (let i=0; i < 20; i++) {
    push();
    rotate(i*TWO_PI/20);
    translate(0, mouseX*0.1);
    fill('#90E7F5');
    ellipse(0,0,30,40);
    pop();
  }
  pop();
  
  if (mouseIsPressed==true) {
    bg = 10;
  } else {
    bg = 200;
  }
}