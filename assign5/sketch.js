//Songs used:
// You Will Know our Names; Xenoblade Chronicles; https://www.youtube.com/watch?v=g7yNyhLOIa4

// Malo Mart; The Legend of Zelda: Twilight Princess;https://www.youtube.com/watch?v=yaYBy0Jc7BA

//Instructions:
    // Move along the X-axis to determine the speed of the playing song, move along the Y-axis to manipulate which song is played and its volume.

let filter, fft, numi;
numi = 1;
let song; function preload() 

{ 
  // Load a sound file 
  song = loadSound('malomart.wav');
  namu = loadSound('knowournames.wav');
  malo = loadImage('shulk&malomart.png');
} 
function setup() { 
  createCanvas(710, 400); 
  filter = new p5.BandPass();
  noise = new p5.Noise();
  noise.disconnect();
  
  noise.connect(filter);

  song.loop();
  namu.loop();
  fft = new p5.FFT();
  filter.res(50)
}
function draw() { 

  image(malo, 0, 0, 710, 400);
  let kang1 = map(mouseY, 201, 400, 0, 1);
  let kang2 = map(mouseY, 0, 200, 0 ,1)
  // background(200); 
  line(0, 200, 710, 200);
  line(355, 195, 355, 205)
  
  if (mouseY <= 200) {
    song.setVolume(0.0);
    namu.setVolume(kang1);
  } else {
    namu.setVolume(0.0);
    song.setVolume(kang1);
  }

  let speed = map(mouseX, 0, width, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);
  namu.rate(speed);
  
  
  let spectrum = fft.analyze();

  circle(mouseX, 200, 20);
}