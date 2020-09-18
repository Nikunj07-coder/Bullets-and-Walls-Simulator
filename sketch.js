var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,90);
  weight=random(30,52);
  thickness=random(22,321);
  car=createSprite(50,200,50,50)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("white");
  car.velocityX=speed;
  if(wall.x-car.x < (car.width-wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor(230,230,0);
    }
    if(deformation<100){
       bullet.shapeColor="yellow";
    }
  }
  
  drawSprites();
}