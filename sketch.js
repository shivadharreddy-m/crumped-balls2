
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,groundwaste
var waste_base
var waste1,waste2
var wasteImage
function preload()
{
	wasteImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	ball=new Ball(200,100,20);
	ground= new Ground(600,650,1200,20);
	groundwaste= createSprite(640,560)
	waste_base= new Waste(650,630,100,20)
	waste1=new Waste(700,590,20,100)
	waste2=new Waste(590,590,20,100)
	groundwaste.addImage(wasteImage);
	groundwaste.scale=0.6
	Engine.run(engine);
  
}
 

function draw() {
  rectMode(CENTER);
  background(250);
  
  ball.display();
  ground.display();
  waste_base.display();
  waste1.display();
  waste2.display();
  drawSprites();
 
}

function keyPressed(){ 
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:58,y:-58})
	}
}
