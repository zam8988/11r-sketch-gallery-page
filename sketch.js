let dancer;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  dancer = new crystal(width / 2, height / 2);
}

function draw() {
  //
  background(0);
  dancer.move();
  dancer.display();
  dancer.bounce();
  dancer.armRotate();
}

class crystal {
  constructor(startX, startY) {
    this.x = startX; //width / 2
    this.y = startY;
    this.diameter = random(10, 30);
    this.xSpd=random(-10,10);
    this.ySpd=random(-20,20);
    this.angle=random(TWO_PI);
    this.angleV=random(0.01,0.2);

    
  }
  bounce() {
    if (this.x < 0 || this.x > width) {
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpd = this.ySpd * -1;
    }
  }
  move() {
    this.x = this.x +this.xSpd;
    this.y = this.y + this.ySpd;

    
  }
  //rotate
  armRotate(){
    this.angle+=this.angleV;
  }
  
  display() {
    
    //main body
    push();
    translate(this.x, this.y); //ellipse(width/2,height/2)
    fill(225, 212, 127);
    strokeWeight(2);
    ellipse(0, 0, 70, 90); //ellipse(width/2+2)
    fill(0, 0, 0);
    ellipse(-10, -20, 20, 30);
    fill(0, 0, 0);
    ellipse(10, -20, 20, 30);
    line(-15, 18, 19, 18);
    rect(-3, 2, 10, 10);
    //pop();

   //  //right arm
    push();
    translate(-40,20);
    rotate(this.angle);
   fill(255, 204, 0);
    ellipse(0, 0, 20, 80);
      pop();
    
    //left arm
    push();
    translate(40,20);
    rotate(this.angle);
    fill(255, 204, 0);
    ellipse(0, 0, 20, 80);
    pop();
    
  

    //ears
    push();
    fill(60, 35, 23);
    ellipse(-25, -40, 30, 30);
    ellipse(25, -40, 30, 30);
    pop();
    
    
  }
}
