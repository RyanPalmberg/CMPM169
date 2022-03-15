let i = 0;
let backgroundColor = 255

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(backgroundColor);

  line(0, 200, 400, 200);
  line(200, 0, 200, 400);
  

  if (mouseX <= 200 && mouseY <= 200) {
    fill('green');
    
  } 
  if (mouseX <= 200 && mouseY > 200) {
    fill('blue');
    
  }
  if (mouseX > 200 && mouseY > 200) {
    fill('yellow')
    
  }
  
  circle(mouseX, mouseY, 50)
  
  fill(255, 0, 0);
}