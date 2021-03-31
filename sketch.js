const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
 createCanvas(800,400);

 engine = Engine.create();
 world = engine.world;

 support = new Support(350,100,300,30);
 World.add(world,support);


 ball1 = new Ball(250,300);
 ball2 = new Ball(300,300);
 ball3 = new Ball(350,300);
 ball4 = new Ball(400,300);
 ball5 = new Ball(450,300);


 rope1 = new Rope(ball1.body,support.body,-100,0);
 World.add(world,rope1);

 rope2 = new Rope(ball2.body,support.body,-50,0);
 World.add(world,rope2);

 rope3 = new Rope(ball3.body,support.body,0,0);
World.add(world,rope3);

 rope4 = new Rope(ball4.body,support.body,+50,0);
 World.add(world,rope4);

 rope5 = new Rope(ball5.body,support.body,+100,0);
 World.add(world,rope5);

 Engine.run(engine);

 }
function draw() {
 background("white");

 Engine.update(engine);
 support.display();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

 }

function keyPressed(){
 if(keyCode===UP_ARROW){
 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-730,y:0});

}

}