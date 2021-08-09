const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world ,engine 
var plant1,plant2,slingshot,slingshot1
var ball,ball1
var backgroungimg
var zombie,zombieImg

function preload(){
backgroungimg = loadImage("green background.jfif")
zombieImg = loadAnimation("Zombie1.png","zombie2.png","zombie3.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plant1 = new PLANT(200,250)
  
    ball = new BALL(230,180,15)
  
    slingshot = new SLINGSHOT(ball.body,{x :210 , y:220})
   
    zombie  = createSprite(800,250,30,70)
    zombie.addAnimation("zombie",zombieImg)
    zombie.scale = 0.2
    zombie.velocityX = -2

}
function draw (){
    background("black")
   
    Engine.update(engine);
    plant1.display()
    ball.display()
  drawSprites()
    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}
function keyPressed(){
    if (keyCode === 32){
        ball.body.position.x = 230
        slingshot.attach(ball.body)
    }
}
