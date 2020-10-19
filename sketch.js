
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5,base;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	
	//Create the Bodies Here.
	ball1=new ball(300,450,50);
	ball2=new ball(350,450,50);
	ball3=new ball(400,450,50);
	ball4=new ball(450,450,50);
	ball5=new ball(500,450,50);

	
	base = new rectangle(400,175,400,20);

	rope1=new rope(ball1.body,base.body,-100, 0)
	rope2=new rope(ball2.body,base.body,-50, 0)
	rope3=new rope(ball3.body,base.body,0, 0)
	rope4=new rope(ball4.body,base.body,50, 0)
	rope5=new rope(ball5.body,base.body,100, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  base.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

	}
}




