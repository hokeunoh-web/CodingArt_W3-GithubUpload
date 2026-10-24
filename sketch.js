let x,y,d;
let colorPalette = ['#274DEA', '#FCA476', '#EBFFDC','#FFF197','#FF513D','#FCF92E','#E169EA','#87FF90','#C8FFF8','#4FFFBA'];
let numCircles;
let spacing; 
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  d = width / 2;
  numCircles = 10;
  spacing = d/numCircles
 

}

function draw() {
  // Set background to black
  background(0);
  d= width/2;
  for(i = 0; i <10; i++)
  {
    fill(colorPalette[i]);
   circle(x,y,d);
   d = d - spacing;

  }
 

}
