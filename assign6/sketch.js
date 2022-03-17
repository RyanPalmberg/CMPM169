/*/*
original by:
Gurkirat Saini
gssaini
Rats

remixed by:
Ryan Palmberg
rpalmber

Instructions: Chase the rat with the cheese to increase the volume!

Music: https://www.youtube.com/watch?v=vdVnnMOTe3Q
*/

let x1, y1;
function preload() {
  rat = loadImage('assets/rat.png');
  mixtape = loadSound('assets/mixtape.mp3');
  bg = loadImage('assets/darats.png');
  cheese = loadImage('assets/cheese.png');
}

function setup() {
  createCanvas(600, 400);
  mixtape.loop();
  ratAmp = new p5.Amplitude();
  // x1 = 300;
  // y1 = 200;
  // x1 = mouseX;
  // y1 = mouseY;
}

function draw() {
  background(bg);
  x1 = mouseX;
  y1 = mouseY;
  // image(cheese, x1, y1, 80, 80)
  // translate(width/2, height/2);
  image(cheese, x1, y1, 80, 80)
  let x3 = (200 * sin(frameCount * 0.05))+width/2;
  let y3 = (150 * cos(frameCount * 0.05))+height/2;
  // x1 = mouseX;
  // y1 = mouseY;

  let trail = dist(x1, y1, x3, y3);
  // line(x1, y1, x3, y3)

  let volume = map(trail, 0, width, 1, 0);
  volume = constrain(volume, 0, 1);
  mixtape.amp(volume);
  let ratWidth = 100;
  let ratHeight = ratAmp.getLevel() * ratWidth * 10;

  push();
  // translate(width/2, height/2);
  image(rat, x3, y3, ratWidth, ratHeight);
  pop();
}
