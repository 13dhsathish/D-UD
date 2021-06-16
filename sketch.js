var iss, issImg;
var spacecraft1, spacecraft1Img;
var spacecraft2, spacecraft2Img;
var spacecraft3, spacecraft3Img;
var spacecraft4, spacecraft4Img;
var bgImg;
var hasDocked = false;

function preload()
{
  issImg = loadImage("iss.png");
  spacecraft1Img = loadAnimation("spacecraft1.png");
  spacecraft2Img = loadAnimation("spacecraft2.png");
  spacecraft3Img = loadAnimation("spacecraft3.png");
  spacecraft4Img = loadAnimation("spacecraft4.png");
  bgImg = loadImage("spacebg.jpg");

} 

function setup() {
  createCanvas(800,400);
  iss = createSprite(200, 20, 50, 50);
  iss.addImage("iss1", issImg);
  iss.scale = 0.3;

  spacecraft1 = createSprite(200, 300, 50, 50);
  spacecraft1.addAnimation("s1", spacecraft1Img);
  spacecraft1.addAnimation("s2", spacecraft2Img);
  spacecraft1.addAnimation("s3", spacecraft3Img);
  spacecraft1.addAnimation("s4", spacecraft4Img);
  spacecraft1.scale = 0.2;
}

function draw() {
  background(bgImg);  
  drawSprites();
}
  if(keyDown === LEFT_ARROW){
    spacecraft1.changeAnimation("s2", spacecraft2Img);
  }
  if(keyDown === UP_ARROW){
    spacecraft1.y -= 5;
  }
  if(keyDown === DOWN_ARROW){
    spacecraft1.changeAnimation("s3", spacecraft3Img);
  }
  if(keyDown === RIGHT_ARROW){
    spacecraft1.changeAnimation("s4", spacecraft4Img);
  }
