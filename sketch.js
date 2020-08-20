var fixedRect, movingRect;
var leftRect, rightRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  leftRect = createSprite(0, 400, 50, 80);
  leftRect.shapeColor = "blue"
  rightRect = createSprite(800, 400, 80, 30);
  rightRect.shapeColor = "blue"
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  leftRect.velocityX = +5;
  rightRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect, fixedRect);
 bounceOff(leftRect, rightRect); 
 drawSprites();
}


