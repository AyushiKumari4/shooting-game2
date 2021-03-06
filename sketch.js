var spaceship,ship2, backgroundImage;
var aliens,aliens2;
var score=0
var life=3;
var PLAY=1;
var END=0;
var gameState = PLAY;
var level=1
var speed=0 , alienSpeed=2
var count=0,alienCount=0,kill=0,alienPos=0;
var lifePowerups,shipPowerups,speedPowerups

var backgroundSprite;
function preload(){
  bgImage2=loadImage("images/bgImage2.png")
  bgImage3=loadImage("images/bgImage3.jpg")
ship2=loadImage("images/spaceShip2.png")
ship2.scale=0.5
ship1=loadImage("images/spaceShip3.png")
ship1.scale=0.5
explosion =loadAnimation("images/explo1.png","images/explo2.png","images/explo3.png","images/explo4.png","images/explo5.png")
}
function setup() {
   //make it as display width
  createCanvas(windowWidth, windowHeight);
 
  //create class and object
  bg = new backgroundI(
    width / 2,
    height / 2,
    width,
    height * 4
  );
  spaceship = new spaceShip(width / 2, height - 10, 50, 50);
 
  dangerzone= createSprite(width/2,spaceship.sprite.y+height/1.8,width,height)
  dangerzone.visible=false
  shipImage=ship2
bulletGroup=new Group()
alienGroup= new Group()
alien2Group= new Group()
lifePowerupGroup=new Group(); 
shipPowerupGroup=new Group(); 
bombGroup=new Group(); 
 scorePowerupGroup=new Group();
 speedPowerupsGroup=new Group();
}
function draw() {
  
  if(gameState===PLAY){
  background(rgb(198, 135, 103));

   //display bg and spaceship
  
  spaceship.display(shipImage);

if(bulletGroup.isTouching(alienGroup)){
  score+=10
  alienGroup.destroyEach();
 // Bullets.addAnimation((""))
 // bulletGroup.destroyEach();
}
if(spaceship.sprite.isTouching(scorePowerupGroup)){
  score+=10
  alienGroup.destroyEach();
 }
if(alienGroup.isTouching(spaceship.sprite)){
life--
alienGroup.destroyEach();
}
if(spaceship.sprite.isTouching(shipPowerupGroup)){
  rand=Math.round(random(1,2))
  shipPowerupGroup.destroyEach();
if(rand===1){
  shipImage=ship1
}else
{shipImage=ship2}
}
//set camera positions
  camera.position.x = width / 2;
   camera.position.y = spaceship.sprite.y-width/2+500;
  
 if(score%40===0 && score>0 && level<3){
level++
score+=20
 }
 if(level==2){
   bg.display(bgImage3)
 }
else if(level===1){
  bg.display(bgImage2)
}
else if(level===4){
  bg.display(bgImage2)
  if(count===0){
  spaceship.sprite.velocityY=0;
  spaceShipPosition=spaceship.sprite.y
  camera.position.y=spaceShipPosition-width/6
  }
  count++
  dangerzone.visible=true;
  dangerzone.shapeColor="yellow"
  dangerzone.y-=1
  spaceship.sprite.y-=1;
  if(dangerzone.y<spaceShipPosition-height/2+height/6){
    gameState=END;
  }
}
else if(level===3){
alienPos++
  if(alienCount===0){
  bigAlien = createSprite(width/2,camera.position.y-height/3,100,100)
  bigAlien.velocityX=5
  alienCount++
  }
  bigAlien.y=camera.position.y-height/3 + alienPos/4
  if(bigAlien.x>width){
    bigAlien.velocityX=-5
  }
  
  if(bigAlien.x<0){
    bigAlien.velocityX=+5
  }
  if(bulletGroup.isTouching(bigAlien)){
    kill++
if(kill===10){
bigAlien.destroy();
gameState=END
}
  }
}
  if (bg.sprite.y < camera.position.y - height / 2) {
    bg.sprite.y = camera.position.y;
  }
  if(spaceship.sprite.isTouching(lifePowerupGroup)){
    life++
    lifePowerupGroup.destroyEach();
  }
  if(spaceship.sprite.isTouching(bombGroup)){
    //life--
   // bombGroup.destroyEach();
    bombs.sprite.changeAnimation("bombExplosion",bombs.Animation)
    //gameState=END
  }
  if(spaceship.sprite.isTouching(scorePowerupGroup)){
    score+=10
    scorePowerupGroup.destroyEach();
  }
  if(spaceship.sprite.isTouching(speedPowerupsGroup)){
    speedPowerupsGroup.destroyEach();
    speed=1;
  }
 //right and left moves of spaceship
 if (keyDown("left") && spaceship.sprite.x > 100) {
  spaceship.sprite.x = spaceship.sprite.x - 20;
}
if (keyDown("right") && spaceship.sprite.x< width - 100) {
  spaceship.sprite.x = spaceship.sprite.x+ 20;
}
if(level===1||level===2){
spawnAliens();
spawn2Aliens();
spawnlifePowerups();
spawnShipPowerups();
spawnscorePowerups();
spawnspeedPowerups();
spawnBombs();
}
fireBullets();
drawSprites();
  fill("yellow")
  textSize(20)
  text("score" +score,width-200,camera.position.y-height/2+50)

  fill("yellow")
  textSize(20)
  text("lives" +life,width-400,camera.position.y-height/2+50)
  text("level:" +level,width-600,camera.position.y-height/2+50)
  if(life==0){
    gameState=END
  }
}
else if (gameState===END){
  textSize(20)
  fill("blue")
  text("Game Over!!",width / 2, height /2)
}
}
function spawnAliens(){
  if(frameCount%60===0){
    if(speed===1){
      alienSpeed+=5;
      speed=0
    }
    aliens=new Alien(Math.round(random(50,width-50)),camera.position.y-width/2-200,alienSpeed)
    alienGroup.add(aliens.sprite)
    aliens.display();
    //console.log("aliens")
  }
}
function spawn2Aliens(){
  if(frameCount%120===0){
    if(speed===1){
      alienSpeed+=5;
      speed=0
    }
    aliens2=new Alien2(Math.round(random(50,width-50)),camera.position.y-width/2-200,alienSpeed)
    alien2Group.add(aliens2.sprite)
    aliens2.display();
    //console.log("aliens")
  }
}
function spawnlifePowerups(){
  if(frameCount%80===0){
    lifePowerups=new LifePowerup(Math.round(random(50,width-50)),camera.position.y-width/2-200)
    lifePowerupGroup.add(lifePowerups.sprite)
    lifePowerups.display();
  //  console.log("aliens")
  }
}
function spawnscorePowerups(){
  if(frameCount%80===0){
    scorePowerups=new scorePowerup(Math.round(random(50,width-50)),camera.position.y-width/2-200)
    scorePowerupGroup.add(scorePowerups.sprite)
    scorePowerups.display();
  //  console.log("aliens")
  }
}
function spawnspeedPowerups(){
  if(frameCount%80===0){
    speedPowerups=new speedPower(Math.round(random(50,width-50)),camera.position.y-width/2-200)
    speedPowerupsGroup.add(speedPowerups.sprite)
    speedPowerups.display();
  //  console.log("aliens")
  }
}
function spawnBombs(){
  if(frameCount%200===0){
    bombs =new Bomb(Math.round(random(50,width-50)),camera.position.y-width/2-200)
   bombs.sprite.changeAnimation("bomb",bombs.image)
  //  bombs.sprite.addAnimation("b",explosion)
    bombGroup.add(bombs.sprite)
    bombs.display();
  //  console.log("aliens")
  }
}
function spawnShipPowerups(){
  if(frameCount%80===0){
    shipPowerups=new shipPowerup(Math.round(random(50,width-50)),camera.position.y-width/2-200)
    shipPowerupGroup.add(shipPowerups.sprite)
    shipPowerups.display();
  //  console.log("aliens")
  }
}
function fireBullets(){
  if(keyWentDown("space")){
    var bullet=new Bullets(spaceship.sprite.x,spaceship.sprite.y,10,10)
    bullet.sprite.depth=spaceship.sprite.depth
    spaceship.sprite.depth+=1
    bulletGroup.add(bullet.sprite)
   bullet.display();
  }
}