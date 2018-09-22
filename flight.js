let x = 100;
let runwayHeight = 30;
let y = 100;

function setup() {
  createCanvas(600,300);
}

function draw() {
  background('skyblue');
  drawSun();
  drawRunway();
  drawFlight();
  moveFlight();
}

function drawSun() {
  const sunRadius = 150;
  fill(255,255,0);
  ellipse(width,0,sunRadius,sunRadius);
}

function drawFlight() {
  noStroke();
  drawFlightbody();
  drawWingEndtail();
  drawWindows();
  drawWheels();
}

function drawFlightbody() {
  fill(65,105,225);
  triangle(x+20,y,x-15,y-40,x-10,y);
  fill(220,220,220);
  ellipse(x,y,120,30);
  fill(65,105,225);
  arc(x, y, 120, 30, 0, PI);
  fill(65,105,225);
  triangle(x,y,x-30,y+30,x +20,y);
}

function drawWingEndtail() {
  fill(220,220,220);
  triangle(x-70,y-40,x-40,y,x-60,y);
  triangle(x-70,y-40,x-40,y,x-60,y-40);
}

function drawWindows() {
  fill('white');
  stroke(0,0,0);
  arc(x-30,y-2,7,15, PI, TWO_PI);
  arc(x-20,y-2,7,15, PI, TWO_PI);
  arc(x-10,y-2,7,15, PI, TWO_PI);
  arc(x,y-2,7,15, PI, TWO_PI);
  arc(x+10,y-2,7,15, PI, TWO_PI);
  arc(x+20,y-2,7,15, PI, TWO_PI);
  fill(0,0,0);
  arc(x+35,y, 50, 20, PI+HALF_PI, TWO_PI);
}

function drawWheels() {
 const yPosition = y+15;
 const tempHeightRadius = 7;
  fill(0,0,0)
  ellipse(x-25,yPosition,tempHeightRadius,tempHeightRadius);
  ellipse(x-35,yPosition,tempHeightRadius,tempHeightRadius);
  ellipse(x+21,yPosition,tempHeightRadius,tempHeightRadius);
  ellipse(x+33,yPosition,tempHeightRadius,tempHeightRadius);

}

function drawRunway() {
  fill(0,0,0);
  rect(0,height-runwayHeight,width,runwayHeight);
}

 function moveFlight() {
   x = x + 1.5;
   y = y + 1.5;
    if(y> height-(2*runwayHeight-11)) {
      y = height-(2*runwayHeight-11);
    }
    if (x> width-100) {
      x = width-100;
    }
  }
