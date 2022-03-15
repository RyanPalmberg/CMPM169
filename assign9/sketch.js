let classi, pic, pic2, pic3, o, temp;
let oca, oca1, oca2, oca3;
let label1, label2, label3, label4;
let list1, list2, list3;
let correct, tru;
let pairs;

function preload() {
  pairs = {};
  classi = ml5.imageClassifier('MobileNet');
  pic = loadImage('elephant.jpg');
  pic1 = loadImage('puppy.jpg');
  pic2 = loadImage('lion.jpg');
  pic3 = loadImage('orca.jpg');
  list1 = [pic, pic1, pic2, pic3];
  list2 = [1, 2, 3, 4];
  gud = Math.floor(Math.random()*list2.length)
  correct = list2[gud]
  for (i=0; i < list1.length; i++) {
    // console.log(correct, list2[i])
    classi.classify(list1[i], gotResult);

  }
  
}
function setup() {
  tru = -1
  o = 0;
  list3 = []
  temp = 'ok';
  label = 'Ocarina';
  createCanvas(400, 400);
  pic.resize(width, 0);
  
}

function draw() {
  image(list1[gud], 0, 0)
  // console.log(tru)
  list1[gud].resize(width, height);
  
  tru = list3.length
  
}

function gotResult(error, results) {
  let h = results[0].label;
  let hspl = h.split(',')
  choose(hspl[0])
  list3.push(hspl[0])
}

function choose(casio) {
  let butto = Math.floor(Math.random()*list2.length);
  pairs[butto] = casio
  oca = createButton(pairs[butto]);
  // console.log(butto)
  if (list2[butto] == correct) {
  //   oca.mousePressed(yes);
    // console.log(tru, gud)
  // if (tru == gud) {
    oca.mousePressed(yes);
  } else {
    oca.mousePressed(no);
  }
  list2.splice(butto, 1);
}

function yes() {
  console.log('YES')
}
function no() {
  console.log('NO')
}