var towerImage, tower
var doorGroup, door, doorImage
var climberImage, climber, climberGroup
var ghost, ghostImage

function preload(){
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  
}


function setup(){
createCanvas(600,600)
  
  tower=createSprite(300,300)
  tower.addImage("tower", towerImage)
  tower.velocityY=1
  
  doorGroup=new Group()
  climberGroup=new Group()
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage("ghost", ghostImage)
  ghost.scale=0.5
}

function draw(){
  background(0)
  
  if(tower.y > 400){
  tower.y=300
   }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }
  if(keyDown("space")){
    ghost.velocityY=-4
  }
  ghost.velocityY=ghost.velocityY+0.8
  
  spawnDoors()
  
  drawSprites()
}

function spawnDoors(){
  
  if(frameCount % 200===0){
    door=createSprite(200,-50)
    door.addImage("door", doorImage)
    
    climber=createSprite(200,10)
    climber.addImage(climberImage)
    
    door.x=Math.round(random(120,400))
    door.velocityY=1
   
    
    ghost.depth=door.depth
    ghost.depth+=1
    
    
    climber.x=door.x
    climber.velocityY=1
    
    door.lifetime=800
    climber.lifetime=800
    
    doorGroup.add(door)
    climberGroup.add(climber)
    
  }
  
}


