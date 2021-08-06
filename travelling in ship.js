var ship1,shi3,sea,sea1
function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea1=loadImage("sea.png");



}

function setup(){
  createCanvas(400,400);
   sea=createSprite(50,25,20,20);
   sea.addImage(sea1);
   shi3=createSprite(90,120,30,30);
   shi3.addAnimation("movingShip",ship1);
   shi3.scale=0.2
}

function draw() {
if( sea.x<0){
  sea.x=sea.width/2
}



  background("blue");







 drawSprites();
}