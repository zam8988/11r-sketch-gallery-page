
console.log("hello");
  var stars = [];
var speed;

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }
  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
    var r = map(this.z, 0, width, 12, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  }
}
function setup() {
  let canvas=createCanvas(600, 600);
  canvas.parent("p5jssketch");
  star = new Star();

  for (var i = 0; i < 1600; i++) {
    stars[i] = new Star();
  }
}
function draw() {
  let brightness = map(mouseX, 0, width, 0, 255);
  background(brightness);

  speed = map(mouseX, 0, width, 5, 30);
  background(0);
  push();
  translate(width / 2, height / 2);

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    {
      stars[i].show();
    }
  }
  
  { fill(255, 255, 0);
    ellipse(10, 10, 150, 150);
    pop();
    
    let freq = frameCount * 0.1;
    let amp = 150;
    let sinValue = sin(freq) * amp;
    let cosValue = cos(freq) * amp;

    noStroke();
    let x1 = width / 2 +cosValue;
    let y1 = height / 2 + sinValue;
    fill(255, 0, 0);
    ellipse(x1, y1, 10, 10);

    let x2 = width / 2 + cosValue;
    let y2 = height / 2+ sinValue;
    fill(255, 255, 0);
    ellipse(x2, y2 + 10, 10, 10);

    let x3 = width / 2 + cosValue;
    let y3 = height / 2 + sinValue;
    fill(255,153,0);
    ellipse(x3, y3, 30, 30);

    let x4 = width / 2 + sinValue;
    let y4 = height / 2 + cosValue;
    fill(153,102,0);
    ellipse(x4, y4, 70, 70);

    let x5 = width / 2 +  cosValue;
    let y5 = height / 2 + sinValue*2;
    fill(255,153,102);
    ellipse(x5, y5, 50, 50);

    let x6 = width / 2 + cosValue*2;
    let y6 = height / 2 + sinValue;
    fill(204,0,0);
    ellipse(x6, y6, 90, 90);
  
  }
}

function picturejupiter(){
  console.log("jupiterfacts");
  document.getElementById("picture").src="jupiterfacts.png";
}




function picturemars(){
  // console.log("marsfacts");
  document.getElementById("picture").src="marsfacts.png";
}

function picturevenus(){
  // console.log("venusfacts");
  document.getElementById("picture").src="venusfacts.png";
}

function picturemercury(){
  // console.log("mercuryfacts");
  document.getElementById("picture").src="mercuryfacts.png";
}

function pictureearth(){
  // console.log("earthfacts");
  document.getElementById("picture").src="earthfacts.png";
}

function pictureuranus(){
  // console.log("uranusfacts");
  document.getElementById("picture").src="uranusfacts.png";
}