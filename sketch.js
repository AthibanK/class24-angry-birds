const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,720,70,70);
    box2 = new Box(900,720,70,70);
    box3 = new Box(700,610,70,70);
    box4 = new Box(900,610,70,70);
    box5 = new Box(800,520,70,70);
    log1 = new Log(800,655,300,20,PI);
    log2 = new Log(800,565,300,20,PI);
    log3 = new Log(860,525,150,20,PI/6);
    log4 = new Log(750,525,150,20,-PI/4);
    pig1 = new Pig(800,730,60,60);
    pig2 = new Pig(800,620,60,60);
    bird  =new Bird(300,150,40,40);
    ground = new Ground(width/2,height-10,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}