var c = (0, 0, 0);
var b = (0, 0, 0);
var q = 0;
var w = 0;
var e = 0;
var m = 0;

function setup() {
 createCanvas(1200, 900);
 smooth();
 noStroke();
 rectMode(CENTER);
 background(0);
}

function draw() {
 fill(0);
 noStroke();
 rect(100, height / 2, 400, 1800);
 strokeWeight(1);
 fill(b);
 ellipse(150, 200, 80, 80);
 fill(q, w, e);
 ellipse(150, 50, 80, 80);
 fill(255);
 text("BACKGROUND", 112, 260);
 fill(255);
 var v = dist(150, 200, mouseX, mouseY);
 if ((v <= 30) && (mouseIsPressed === true)) {
  b = color(q, w, e);
  background(b);
 }
 var l = dist(150, 50, mouseX, mouseY);
 if ((mouseIsPressed === true) && (l <= 40)) {
  c = color(q, w, e);
 }
 text("COLOR", 138, 110);
 fill(255);
 ellipse(75, height - 100, 80, 80);
 text("ERASER", 50, height - 40);
 var p = dist(75, height - 100, mouseX, mouseY);
 if ((mouseIsPressed === true) && (p <= 40)) {
  c = color(b);
 }
 stroke(255);
 line(30, 380, 285, 380);
 line(30, 430, 285, 430);
 line(30, 480, 285, 480);
 rect(q + 30, 380, 15, 15);
 rect(w + 30, 430, 15, 15);
 rect(e + 30, 480, 15, 15);
 line(30, 330, 285, 330);
 rect(m + 30, 330, 15, 15);
 var g = dist(q + 30, 380, mouseX, mouseY);
 if ((mouseIsPressed === true) && (g <= 15)) {
  q = mouseX - 30;
 }
 var z = dist(w + 30, 430, mouseX, mouseY);
 if ((mouseIsPressed === true) && (z <= 15)) {
  w = mouseX - 30;
 }
 var h = dist(e + 30, 480, mouseX, mouseY);
 if ((mouseIsPressed === true) && (h <= 15)) {
  e = mouseX - 30;
 }
 var k = dist(m + 30, 330, mouseX, mouseY);
 if ((mouseIsPressed === true) && (k <= 15)) {
  m = mouseX - 30;
 }
 if (q < 0) {
  q = 0;
 }
 if (w < 0) {
  w = 0;
 }
 if (e < 0) {
  e = 0;
 }
 if (q > 255) {
  q = 255;
 }
 if (w > 255) {
  w = 255;
 }
 if (e > 255) {
  e = 255;
 }
 if (m < 0) {
  m = 0;
 }
 if (m > 255) {
  m = 255;
 }
 var x;
 x = m;
 stroke(c);
 strokeWeight(x);
 if (mouseIsPressed === true) {
  line(mouseX, mouseY, pmouseX, pmouseY);
  noStroke();
 }
}