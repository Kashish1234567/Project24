
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;


function preload()
{

	

}

function setup() {
	createCanvas(800, 700);

   paper1= new Paper(200,200,50,50);
  

   dustPos = width/2-100;
	 dustY = 610;
	

	dustbase=createSprite(boxPos+100,boxY+40,200,20);
	dustbase.shapeColor="red";

	dustbasebody = Bodies.rectangle(boxPos+100, boxY+45-20, 200, 20, {isStatic:true});
	World.add(world, boxbasebody);

	dustLeft=createSprite(boxPos+200,boxY-0.1,20,100);
	dustLeft.shapeColor="red";
	
	dustLeftbody = Bodies.rectangle(boxPos+300, boxY+45-20, 20, 210, {isStatic:true});
    World.add(world,boxLeftbody);

	boxRight=createSprite(boxPos,boxY-0.1,20,100);
	boxRight.shapeColor="red";
	
	boxRightbody = Bodies.rectangle(boxPos+300, boxY+45-20, 20, 210, {isStatic:true});
	World.add(world,boxRightbody);


  ground = Bodies.rectangle(width/2, 650, 400, 10 , {isStatic:true} );
	World.add(world, ground);
  
   



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();

  drawSprites();
 
}



