const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);

  var groundOption = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,390,800,20,groundOption);
  World.add(world,ground);

  var ballOption = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,100,20,ballOption);
  World.add(world.ball);
}

function draw() {
  background(255,255,255);  

  Engine.uptade(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}