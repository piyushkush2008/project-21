var bullet;
var wall;
var Speed,Weight;
var thickness;
function setup(){
createCanvas(1600,400);

Speed=random(40,90);
Weight=random(32,52);
thickness=random(22,83)
bullet=createSprite(50,200,30,10);
wall=createSprite(1000,200,thickness,height/2)
}

function draw(){
background(0);

bullet.velocityX=Speed;

if(collided(bullet,wall)){

bullet.velocityX=0;

var damage=0.5*Weight*Speed*Speed/thickness*thickness*thickness

if(damage>10){
wall.shapeColor=color(255,0,0)
}

else if(damage<10){
wall.shapeColor=color(0,255,0)
}

}
drawSprites();    
}

