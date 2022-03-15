
let input
let tex, final;

function preload() {
  tex = loadStrings('adjectives.txt');
}

function setup() {
  final = ""
  input = createInput();
  input.position(80, 55);
  
  button = createButton('submit');
  button.position(input.x + input.width, 55);
  // button.position(200, 200)
  button.mousePressed(val);
  
  createCanvas(400, 200);
  
}

function draw() {
  background(220);
  text('New Sentence:', 80, 100)
  text(final, 80, 130)
}
  
function val() {
  let u = input.value();
  let points = []
  // console.log(u)
  let doc = nlp(u);
  let adj = doc.adjectives().list;
  // console.log(typeof adj)
  for (let i=0; i<adj.length; i++) {
    // console.log(adj[i].start)
    nex = adj[i].start
    h = nex.split('-')
    // console.log(h[0])
    points.push(h[0])
  }
  // console.log(points, input.value())
  let j = input.value();
  let j2 = j.split(' ');
  // console.log(j2);
  for (let i=0; i<j2.length; i++) {
    for (let i2 = 0; i2<points.length; i2++) {
      if (j2[i]==points[i2]) {
        // console.log(j2[i], points[i2]);
        randy = Math.floor(Math.random()*tex.length);
        j2[i] = tex[randy]
      }
    }
  }
  // console.log(j2)
  final = "";
  for (let i=0; i<j2.length; i++) {
    final = final + j2[i] + ' ';
    // console.log(final)
  }
  // text(final, 80, height/2)
  
  // let adj = doc.adjectives().list[0].start;
  
  // h = adj.split('-')
  // console.log(adj);
}