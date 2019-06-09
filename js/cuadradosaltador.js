var cubo;
var bichitos=[];
var g;
var sueloy;
var perder;
var puntuacion;
var tpunt;
var canvas;
var start;

var colorCubo, colorFondo, velocidadInicial;

function setup(){
    canvas=createCanvas(1000,400);
    canvas.parent('canvas');
    background(38, 50, 56);
    start=false;
    empezar();
}
function empezar(){
  colorFondo = [38, 50, 56];
  colorCubo = [168, 64, 79];
  velocidadInicial = 2;
  
  init();
}
function init(){
  perder=false;
  puntuacion=0;
  start=true;
  cubo=new cubito(100,height-80, colorCubo);
  g=0.5;
	sueloy=height-25;
	for(var i=1;i<2000;i++){
		var w=random(10,50);
		var h=random(10,50);
		bichitos.push(new bichos((i*210)+150,sueloy-h,w,h));
	}
	perder=false;
}
function draw(){
    if(start===true){
        background(colorFondo[0], colorFondo[1], colorFondo[2]);
        fill(244, 246, 247);
        textSize(30);
        puntuacion+=0.1;
        tpunt=round(puntuacion);
        tpunt=tpunt.toString();
        tpunt="Puntuación: "+tpunt+" pts";
        text(tpunt,20,40);
        rect(-1,sueloy,width+2,30);
        cubo.update();
        cubo.suelo();
        cubo.show(); 
        for(var i=0;i<bichitos.length;i++){
            bichitos[i].choque(cubo);
            bichitos[i].update();
            bichitos[i].show();
        }
    }
   
	if(perder){
		background(38, 50, 56);
        push();
        textSize(30);
        textAlign(CENTER);
        fill(46, 204, 113);
        text("GAME OVER",(width/2),(height/2)-40);
        textSize(15);
        fill(244, 246, 247);
        start=false;
        text("Pulse ESPACIO para volver a jugar",(width/2),(height/2));
        eliminar();
        pop();
	}
}

function eliminar(){
    cubo=0;
    for(var i=0;i<bichitos.length;i++){
        bichitos.splice(i,2);
    }
}

function keyPressed() {
  if (keyCode === 87) {
    cubo.salto(true);
  }
	if (keyCode === 65) {
    cubo.movizq(true);
  }
    if (keyCode === 68) {
    cubo.movdcha(true);
  }
    if (keyCode === 32 && start===false) {
      init();
  }
  return false;
}

function keyReleased() {
  if (keyCode === 87) {
    cubo.salto(false);
  }
  if (keyCode === 65) {
    cubo.movizq(false);
  }
    if (keyCode === 68) {
    cubo.movdcha(false);
  }
  return false;
}

