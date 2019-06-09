class cubito {
  constructor(x, y, color) {
    this.pos=createVector(x,y);
    this.vel=createVector(0,0);
    this.acc=createVector(0,0);
    this.altsalto=createVector(0,-8);
    this.vectornulo=createVector(0,0);
    this.mizq=createVector(-3,0);
    this.mdcha=createVector(3,0);
    this.w=20;
    this.h=20;
    this.sueloy=height-25;
    this.color=color;
  }
  
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.y=0;
    this.acc.x=0;	
  }
  fuerza(f) {
    this.acc.add(f);
  }
  show() {
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.pos.x,this.pos.y,this.w,this.h);
  }
  salto(s) {
    if(s){
      if(this.pos.y+this.h===this.sueloy){
        this.fuerza(this.altsalto);
      }
    }else{
      this.acc.y=0;
    }
  }
  movizq(m) {
    if(m){
      this.fuerza(this.mizq);
    }else{
      this.acc.x=0;
      this.vel.x=0;
    }
  }
  movdcha(d) {
    if(d){
      this.fuerza(this.mdcha);
    }else{
      this.acc.x=0;
      this.vel.x=0;
    }
  }
  suelo() {
    if(this.pos.y+this.h>this.sueloy){
      this.pos.y=this.sueloy-this.h;
      this.vel.y=0;
    }else{
      this.vel.y+=g;
    }
    if(this.pos.x<0){
        this.pos.x=0;
    }
    if(this.pos.x+this.w>width){
        this.pos.x=width-this.w;
    }
  }
}

class bichos {
  constructor(x, y, w, h) {
    this.pos=createVector(x,y);
    this.vel=createVector(-2,0);
    this.w=w;
    this.h=h;
  }
  
  update() {
    if(puntuacion<100){
        this.vel.x=-2*velocidadInicial;
    }else if(puntuacion>100 && puntuacion<200){
        this.vel.x=-3*velocidadInicial;
    }else if(puntuacion>200 && puntuacion<400){
        this.vel.x=-4*velocidadInicial;
    }else if(puntuacion>400 && puntuacion<600){
        this.vel.x=-5*velocidadInicial;
    }
    this.pos.add(this.vel);
  }
  show() {
    fill(245, 176, 65);
    rect(this.pos.x,this.pos.y,this.w,this.h);
  }
  choque(cubo) {
    if(cubo.pos.x+cubo.w>=this.pos.x && cubo.pos.x<=this.pos.x+this.w && cubo.pos.y+cubo.h>=this.pos.y){
      perder=true;
    }
  }
}