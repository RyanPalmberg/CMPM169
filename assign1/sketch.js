function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //sky
  fill('#00cc00');
  background('cyan');
  
  //sun
  fill(255, 204, 100);
  circle(30, 30, 35);
  
  // car shell
  fill('#ff441c');
  beginShape();
  vertex(130, 210);
  vertex(250, 210);
  vertex(300, 250);
  vertex(80, 250);
  endShape(CLOSE);
  
  //cab
  rect(60, 250, 260, 40)
  
  // window
  fill('#f0f0f0');
  beginShape();
  vertex(135, 215);
  vertex(235, 215);
  vertex(270, 240);
  vertex(110, 240);
  endShape(CLOSE);
  

  // ground  
  fill('#545454')
  rect(0, 300, 400, 100);
  
  // headlight
  fill(255, 204, 100);
  rect(300, 250, 20, 10);
  
  //mirror
  fill('#ff441c');
  rect(260, 225, 10, 20);
  
  //tires
  fill('#808080');
  circle(100, 295, 33);
  circle(270, 295, 33);
  
//   bird1
  line(270, 20, 285, 25);
  line(285, 25, 295, 30);
  line(295, 30, 305, 25);
  line(305, 25, 320, 20);
  
//   bird2
  line(250, 40, 265, 45);
  line(265, 45, 275, 50);
  line(275, 50, 285, 45);
  line(285, 45, 300, 40)

  
}