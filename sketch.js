var ball;
var groundObj
var leftSide
var rightSide


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 800);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}



	engine = Engine.create();

	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(50,100,20,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(775,600,20,120);
	rightSide = new Ground(950,600,20,120);

	Engine.run(engine);


	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() { 

  background(0);

  function keyPressed()
	{
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:1})
	  }
	}


  groundObj.show();
  leftSide.show();
  rightSide.show();

  ellipse(ball.position.x,ball.position.y,20);


  drawSprites();

}		



