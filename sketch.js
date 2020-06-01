var bob1, bob2, bob3, bob4, bob5
var rope, rope2, rope3, rope4, rope5
var roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700)


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground)2

	roof= new Roof();

	bob1= new Bob(320);
	bob2= new Bob(360);
	bob3= new Bob(400);
	bob4= new Bob(440);
	bob5= new Bob(480);
	
	rope=new Rope(bob1.body,roof.body,-80,0)
	rope2=new Rope(bob2.body,roof.body,-40,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
	rope4=new Rope(bob4.body,roof.body,40,0)
	rope5=new Rope(bob5.body,roof.body,80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  fill(255)
  textFont("Times New Roman")
  textSize(50)
  text("Newtons's Cradle", 225,500)
  
  roof.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-40})
	}
}



