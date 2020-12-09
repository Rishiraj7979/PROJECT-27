
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ROOF = new Roof(400,140,300,30);
	bob_1 = new Bob(300,400,45);
	bob_2 = new Bob(350,400,45);
	bob_3 = new Bob(400,400,45);
	bob_4 = new Bob(450,400,45);
	bob_5 = new Bob(500,400,45);

	rope_1 = new Rope(bob_1.body,ROOF.body,-100,0);
	rope_2 = new Rope(bob_2.body,ROOF.body,-50,0);
	rope_3 = new Rope(bob_3.body,ROOF.body,0,0);
	rope_4 = new Rope(bob_4.body,ROOF.body,50,0);
	rope_5 = new Rope(bob_5.body,ROOF.body,100,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();

  ROOF.display();
  bob_1.display();
  bob_2.display();
  bob_3.display();
  bob_4.display();
  bob_5.display();
  rope_1.display();
  rope_2.display();
  rope_3.display();
  rope_4.display();
  rope_5.display();


 
}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob_1.body,bob_1.body.position,{x:-25,y:-25});
	}
}


