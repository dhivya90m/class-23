const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200,390,400,30);
  
  box1 = new Box(200,200,50,50);


 




}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

ground.display();
box1.display();


}