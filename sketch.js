var ship;
var sea; 

function preload()
{
  sea = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup()
{
  createCanvas(400,400);
  ship = createSprite(200,200);
  ship.addAnimation("floating",shipImg)
  ship.scale = 0.2;

}

function draw() {  
  background(sea);
  drawSprites();
}