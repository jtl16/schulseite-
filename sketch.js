var termine;
var anderungen;
var klasse;
var std;
var lehrera;
var lehrern;
var facha;
var fachn;
var rauma;
var raumn;
var bemerkung;
var anders = [];
var a = 0;

function setup() {
 createCanvas(1000, 600);
 background(255,237,237);
 stroke(0);
 strokeWeight(2);
 fill(0, 255, 150);
 termine = createDiv('Betroffene Temine');
 termine.position(10+400, 10+100);
 rect(5, 8, 390, 22);
 klasse = createDiv('Klasse');
 klasse.position(10+400, 35+100);
 rect(5, 30, 60, 22);
 std = createDiv('Std.');
 std.position(70+400, 35+100);
 rect(65, 30, 50, 22);
 lehrera = createDiv('Lehrer/in');
 lehrera.position(120+400, 35+100);
 rect(115, 30, 130, 22);
 facha = createDiv('Fach');
 facha.position(250+400, 35+100);
 rect(245, 30, 50, 22);
 rauma = createDiv('Raum');
 rauma.position(300+400, 35+100);
 rect(295, 30, 100, 22);
 fill(255, 250, 205);
 anderungen = createDiv('Vertretungen und Änderungen');
 anderungen.position(400+400, 10+100);
 rect(395, 8, 386, 22);
 lehrern = createDiv('Lehrer/in');
 lehrern.position(400+400, 35+100);
 rect(395, 30, 80, 22);
 fachn = createDiv('Fach');
 fachn.position(480+400, 35+100);
 rect(475, 30, 40, 22);
 raumn = createDiv('Raum');
 raumn.position(520+400, 35+100);
 rect(515, 30, 60, 22);
 bemerkung = createDiv('Informationen/Bemerkungen');
 bemerkung.position(580+400, 35+100);
 rect(575, 30, 206, 22);
 fill(0, 190, 250);
 rect(5, 52, 776, 20);
 if (a == 0) {
  for (var i = 0; i < 8; i++) {
   anders.push(new Plan());
  }
 }
}
function draw() {
 if (a == 0) {
  for (var i = 0; i < 8; i++) {
   anders[i].newPlan();
  }
 }
}

function Plan() {
 this.kl;
 this.st;
 this.la;
 this.ln;
 this.fa;
 this.fn;
 this.ra;
 this.rn;
 this.bem;

 this.newPlan = function() {
  fill(255,237,237);
  noStroke();
  rect(300, 120, 200, 200);
  stroke(0);
  var d = dist(400, 200, mouseX, mouseY)
  if (d < 40) {
   fill(250, 80, 80);
   ellipse(400, 200, 100, 100);
   strokeWeight(5);
   line(380, 200, 420, 200);
   line(400, 180, 400, 220);
  } else {
   fill(200, 80, 80);
   ellipse(400, 200, 80, 80);
   strokeWeight(5);
   line(380, 200, 420, 200);
   line(400, 180, 400, 220);
  }
 }
}
