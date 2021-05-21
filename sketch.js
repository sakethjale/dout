var birdimg,bird;
var bgimg,bg,bgGroup;
var pipes,pipesimg,pipesGroup;
var pipes2,pipesimg2,pipesGroup2,pipess;
var reimg,re;
var PLAY=1;
var END=0;
var reset;
var iwall1;
gameState="PLAY"

function preload()
{
  birdimg=loadImage("angry.png");
  bgimg=loadImage("bg1.jpg");
  bgimg2=loadImage("bg2.jpg");
  pipesimg=loadImage("pipes_reverse.png");
  pipesimg2=loadImage("pipes.png");
  reimg=loadImage("reset.png");
}
function setup()
{
  
  createCanvas(800,500);
  
  bird=createSprite(200,200,20,20);
  bird.addImage("b",birdimg);
  bird.scale=0.2           
 
    
    bg= createSprite(400,300,20,20)
  bg.addImage(bgimg);
  bg.scale=1.6
 bg.velocityX=-4 
 
  re=createSprite(0,0,20,20);
  re.addImage("r",reimg);
  re.scale=0.3
  re.visible=false;

  iwall1=createSprite(200,500,800,5)
  bird.collide(iwall1)
  
  pipesG=new Group();
  pipesG2=new Group();
  
}

function draw() 
{
  if(keyDown("space"))
  {
    bird.velocityY=-4
  }
  bird.velocityY=bird.velocityY+0.5 

  if(bg.x<0){
    bg.x=bg.width/2
  }
 bird.depth=bg.depth;
bird.depth=bird.depth+1 
 background("black")
  if(gameState==="PLAY")
  {
   

     if(pipesG.isTouching(bird))
     {
       gameState="END"
     }

     if(pipesG2.isTouching(bird))
     {
       gameState="END"
     }

     if(bird.y>500)
     {
       gameState="END"
     }

     if(bird.y<0)
     {
       gameState="END"
     }

    }
  
   


  pipess();
              
  drawSprites();
    
   if (gameState==="END")
  {
    bird.velocityY=0;
    pipesG.destroyEach()
    pipesG2.destroyEach()
    bg.velocityX=0;
    re.visible=true;
    re.x=250;
    re.y=300;
   if( mousePressedOver(re))
   {
     reset();
   }
  } 

  fill("red");
  textSize(55)
  stroke("blue")
  strokeWeight(4)
  text("GAME OVER",200,200)
 

}
  
function reset()
{
  gameState=PLAY;
  re.visible=false;
  re.x=0;
  re.y=0;
 

}


function pipess()
{
  if(frameCount%80===0)
    {
      pipes=createSprite(850,120,20,20);
      pipes.y=Math.round(random(80,130))
      pipes.addImage(pipesimg)
      pipes.velocityX=-4
      pipes.scale=0.5
      pipesG.add(pipes)
      
      pipes2=createSprite(850,420,20,20);
      pipes2.y=Math.round(random(440,500))
      pipes2.velocityX=-4
      pipes2.addImage(pipesimg2)
      pipes2.scale=0.5
      pipesG2.add(pipes2)
    }
}




