var canvas, scene, scene1;


function preload()
{
  you1 = loadImage("happy face.jpg");
  yourfreind1 = loadImage("happy face.jpg");
  scene1 = loadImage("green background.jpg");
}

function setup() {
	canvas = createCanvas(1500, 625);
 
  scene = createSprite(0, 0, 800, 400);
  scene.scale=10;
  scene.velocityY=-2;
  scene.addImage(scene1);

  you = createSprite(300, 200, 15, 15);
  you.velocityX = 0;
  you.velocityY = 0;
  you.addImage(you1);
  you.scale = 0.1;

  yourfreind = createSprite(190, 200, 15, 15);
  yourfreind.addImage(yourfreind1);
  yourfreind.scale = 0.1;


}


function draw() {
if (scene.y<0) {
	scene.y=scene.height/2;
}
	  
//you
if (keyDown("UP_ARROW")) {
	   
	you.velocityX = 0;
	you.velocityY = -1;
	  
}
	  
if (keyDown("DOWN_ARROW")) {
		
	you.velocityX = 0;
	you.velocityY = 1;
	  
}
	  
if (keyDown("LEFT_ARROW")) {
	   
	you.velocityX = -1;
    you.velocityY = 0;
		
}
	  
if (keyDown("RIGHT_ARROW")) {
		
	you.velocityX = 1;
	you.velocityY = 0;
	  
}
	  
//yourfreind
if (keyDown("UP_ARROW")) {
	   
	yourfreind.velocityX = 0;
	yourfreind.velocityY = -1;
	  
}
	  
if (keyDown("DOWN_ARROW")) {
		
	yourfreind.velocityX = 0;
	yourfreind.velocityY = 1;
	  
}
	  
if (keyDown("LEFT_ARROW")) {
	   
	yourfreind.velocityX = -1;
	yourfreind.velocityY = 0;
		
}
	  
if (keyDown("RIGHT_ARROW")) {
		
	yourfreind.velocityX = 1;
	yourfreind.velocityY = 0;
	  
}
	  
	 
  drawSprites();
}