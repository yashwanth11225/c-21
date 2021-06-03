var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 800, 80, 30);
  movingRect.shapeColor="green";
  fixedRect=createSprite(400,100,50,80);
  fixedRect.shapeColor="green";
  movingRect.velocityY=-5;
  fixedRect.velocityY=+5;

}

function draw() {
  
  background(0,0,0);
 bounceOff(movingRect,fixedRect);
  if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}
