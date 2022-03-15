
let video;

let x = -10;
let y = -10;
let z = -25;
let f = -15;
let p, p2, p3, p4 = 0;

function setup() {
  createCanvas(640, 480);
  // createCanvas(700, 480);
  rectMode(CENTER);
  imageMode(CENTER);

  pixelDensity(1);
  video = createCapture(VIDEO);
  frameRate(60);
}

function draw() {
  let cop1, cop2, cop3, screenshott;
  video.loadPixels();
  let po = keyCode;
  translate(width/2, height/2)
  screenshott = image(video, 0, 0, 640, 480);
  // if (po == 50) {
    // translate(-width/2, -height/2)
    // for (x=0; x<=640; x+=height/4) {
    //   for (y=0; y<=480; y+=height/4) {
  //       push();
  //         translate(x, y);
  //         rotate(frameCount*0.01);
  //         let neimg = video.get(0,80,height,height);
  //         image(neimg, 0, 0, height/3, height/3)
  //       pop();
  //     }
  //   }
  // }
  if (po == 50) {
    push();
    translate(-width/2, -height/2)
    for (x=0; x<650; x+=15) {
      for (y=0; y<490; y+=15) {
        push();
        translate(x, y);
        rotate(frameCount*0.01);
        let i = (x + y * width) * 4
        fill(video.pixels[i], video.pixels[i+1], video.pixels[i+2]);
        square(0, 0, 15)
        pop();
  }
    }
  }
  
  let w = video.width;
  let h = video.height;

  if (po == 65) {
    filter(INVERT);
  }
  if (po == 83) {
    filter(GRAY);
  }
  if (po == 68) {
    filter(POSTERIZE, 3);
  }
  if (po == 70) {
    filter(BLUR, 10);
  }
  
  if (po == 49) {
    cop1 = copy(video, 0, 0, 640, 480, p, y+=1, 128, 96)
    cop2 = copy(video, 0, 0, 640, 480, p2, z+=2, 64, 48)
    push();
    // filter(GRAY);
    cop3 = copy(video, 0, 0, 640, 480, p3, f+=3, 64, 48)
    pop();
    let cop4 = copy(video, 0, 0, 640, 480, p4, y, 128, 96)
    if (y>490) {
      y = 0;
      p = random(-10, 639)   
      p4 = random(-10, 639)
    }
    if (z>490) {
      z = 0;
      p2 = random(-10, 639)
    }
    if (f>490) {
      f = 0;
      p3 = random(-10, 639)
    }

  }

  // let pink = color(100, 102, 50);
  // let d = pixelDensity();


  // if (y>480) {
  //   console.log('switch')
  //   p = random(-10, 639)   
  //   p4 = random(-10, 639)
  // }
  // if (z>480) {
  //   p2 = random(-10, 639)
  // }
  // if (f>480) {
  //   p3 = random(-10, 639)
  // }

  
  
  if (po == 8) {
    filter(POSTERIZE, 254);
  }


}