// Nervous Waves 2
// Levente Sandor, 2014


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  noStroke();
  //rectMode(CENTER);
  frameRate(40);
  noiseDetail(2, 0.9);
}

function draw() {
  var t = millis() * 0.0003
  background(255);
  for (var x = 0; x < width+10; x += 9) {
    for (var y = 0; y < height+10; y += 9) {
      var n = noise(x * 0.007, y * 0.007, t);
      push();
      translate(x, y);
      rotate(TWO_PI * n);
      scale(6 * n);
      rect(0, 0, 2, 2);
      pop();
    }
  }
  
}