const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Snow=[]

function preload(){
  backgroundImg= loadImage("snow3.jpg")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,600);

}

function draw() {

    if(frameCount%10==0){

        snow1= new snow(random(1,50), random(0, 10), 4)
        snow2= new snow(random(50,150), random(0, 10), 4)
        snow3= new snow(random(150,250), random(0, 10), 4)
        snow4= new snow(random(250,350), random(0, 10), 4)
        snow5= new snow(random(350,450), random(0, 10), 4)
        snow6= new snow(random(450,550), random(0, 10), 4)
        snow7= new snow(random(550,650), random(0, 10), 4)
        snow8= new snow(random(650,750), random(0, 10), 4)
        snow9= new snow(random(750,850), random(0, 10), 4)
        snow10= new snow(random(850,1000), random(0, 10), 4)


        Snow.push(snow1);
        Snow.push(snow2);
        Snow.push(snow3);
        Snow.push(snow4);
        Snow.push(snow5);
        Snow.push(snow6);
        Snow.push(snow7);
        Snow.push(snow8);
        Snow.push(snow9);
        Snow.push(snow10);

        
      }

  Engine.update(engine);
  background(backgroundImg);  

  for(var i = 0; i < Snow.length; i++){
    Snow[i].display();
  }

  

  drawSprites();
}