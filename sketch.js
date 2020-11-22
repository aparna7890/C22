const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var earth,moon;
var ground;

var ball

function setup(){
  createCanvas(500,500);

  //creating our game engine
  moon = Engine.create();

  //creating our game world
  earth = moon.world;

  //creating a body in our world

  var ground_options = {
    isStatic:true,
   
  }
  ground = Bodies.rectangle(250,490,500,20,ground_options);
  World.add(earth,ground);
 
  var ball_options = {
    restitution : 0.3
  }
  ball = Bodies.circle(200, 100, 20, ball_options)
  World.add(earth, ball)

  console.log(ball)

}

function draw(){
  background("yellow");

  Engine.update(moon);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)
}