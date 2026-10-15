function setup() {      
createCanvas(800, 784);
noLoop();
}

function draw() {
background(225,229,223);

noStroke();
fill(231,6,4);
rect(0,0,367,315);

fill(250,269,3);
rect(0,509,80,275);

fill(23,23,101);
rect(367,509,246,239);

stroke(20);
strokeWeight(12);
strokeCap(SQUARE);

line(80,509,80,784);
line(367,0,367,784);
line(0,315,800,315);
line(0,509,800,509);
line(367,748,613,748);
line(613,509,613,784);
}


