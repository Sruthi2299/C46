var mario, marioImg;
var backgroundImg, bg;
var gameoverImg;
var obstacle1Img, obstacle1 ,obstacle;
var restartImg;
var invisibleGround, invisibleGroundImg;
var brickGroup, brickImg, brick;
var coin, coinImg, coinGroup;

function preload(){

  marioImg = loadAnimation ("mario00.png","mario01.png");
  backgroundImg = loadImage ("bg.png");
  obstacle1Img = loadAnimation ("obstacle1.png","obstacle3.png");
  gameoverImg = loadImage ("gameover.png");
  restartImg = loadImage ("restart.png");
  invisibleGroundImg = loadImage("ground2.png");
  brickImg = loadImage("brick.png");
  coinImg = loadImage("mario coin.png");

}






function setup() {
  createCanvas(650,450);

 bg = createSprite(300,218,10,10);
 bg.addImage(backgroundImg);
 bg.scale = 1.2;


 mario = createSprite(20,353,10,10);
 mario.addAnimation("mario",marioImg);
 mario.scale = 1.2;
 

 invisibleGround = createSprite(50,410,2900,10);
 //invisibleGround.visible = true
 invisibleGround.addImage(invisibleGroundImg);

 obstacle = new Group();
 brickGroup = new Group();
 coinGroup = new Group();

}

function draw() {
  background("black");
  invisibleGround.velocityX = -5

  
  if(keyDown("SPACE")&& mario.y >= 150){
    mario.velocityY = -10
  }
  mario.velocityY = mario.velocityY + 1

  if(invisibleGround.x <0){
   invisibleGround.x = invisibleGround.width/2
  }
  
  mario.collide(invisibleGround);

 // bg.velocityX = 3 
  spawnObstacles();
  spawnBricks();
  spawnCoins();

  drawSprites();
}

function spawnObstacles() {
 
 if(frameCount % 30 === 0){
  obstacle1 = createSprite(Math.round(random(200,420)),353,50,50)
  obstacle1.addAnimation("obstacle1",obstacle1Img);
  obstacle1.velocityX = -4;
  obstacle1.lifetime = 200;
  obstacle.add(obstacle1);
 }
}

function spawnBricks(){
  if(frameCount % 70 === 0){
    brick = createSprite(400,Math.round(random(150,300)));
   brick.addImage("brick",brickImg)
    brick.velocityX = -2;
    brick.lifetime = 200;
    brickGroup.add(brick);
  }
}

function spawnCoins(){
  if(frameCount % 70 === 0){
   coin = createSprite(400,Math.round(random(250,353)));
   coin.addImage("coin",coinImg)
   coin.scale = 0.1
    coin.velocityX = -2;
    coin.lifetime = 200;
    coinGroup.add(coin);
  }
}