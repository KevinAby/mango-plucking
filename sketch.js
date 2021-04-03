
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 stone = new Stone(200,600,30,30)
	
	ground = new Ground(650,690,1300,160)
	tree = new Tree(800,460,190,340)
	

	mango1 = new Mango(800,460,60,60)
	mango2 = new Mango(790,390,60,60)
	mango3 = new Mango(890,390,60,60)
	mango4 = new Mango(820,360,60,60)
	mango5 = new Mango(880,420,60,60)
	mango6 = new Mango(780,430,60,60)
	
	boy = new Boy(440,600,60,80)
	SlingShot = new Launch(stone.body,{x:410,y:570})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  

  fill('green');
  textSize(34);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 400,100);

tree.display()
ground.display()
mango1.display()

mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
stone.display()
boy.display()
SlingShot.show()
detectCollision(stone,mango1)
detectCollision(stone,mango2)
detectCollision(stone,mango3)
detectCollision(stone,mango4)
detectCollision(stone,mango5)
detectCollision(stone,mango6)
  drawSprites();
 
}



function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    SlingShot.fly()
 }

 

 function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:410, y:570});
	  SlingShot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	 stoneBodyPosition = lstone.body.position;
	 mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.width + lstone.width){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }