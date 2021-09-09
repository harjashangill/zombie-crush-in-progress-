const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall2
var wall
var ground 
var link

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
 wall = new Base(200,300,600,100)
 wall2  = new Base(1250,300,600,100)
 ground = new Base(700,820,1500,10)
 link = new Link(6,{x:200,y:300})
}

function draw() {
  background(51);
  Engine.update(engine);
  wall2.show()
  wall.show()
  ground.show()
}
