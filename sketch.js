



var PLAY = 1
var END = 0
var gameState = PLAY;
var light;
var touch = 3;

function preload(){
   thunder = loadImage("pictures/Thunder.png");
   e1 = loadImage("pictures/Enemy1.png");
   e2 = loadImage("pictures/Enemy2.png");
   k1 = loadImage("pictures/King.png");
   p1 = loadImage("pictures/Prince.png");
   
}
var count = 5
function setup() {
    createCanvas(800, 500);
    player = createSprite(100,300,20,20)
    player.shapeColor = "red";
    player.addImage(p1);
    player.scale = 0.07
    enemies();
    king = createSprite(760 ,40, 20, 20);
    king.addImage(k1)
    king.scale = 0.09
    edges = createEdgeSprites();
}

function lightning(){
        
    light = createSprite(mouseX, mouseY,5,10);
    light.lifetime = 10;
    light.scale = 0.09
    light.addImage(thunder);
    light.shapeColor = "yellow";

    if(light.isTouching(enemy1)){
        enemy1.destroy();
    }

    if(light.isTouching(enemy2)){
        enemy2.destroy();
    }

    if(light.isTouching(enemy3)){
        enemy3.destroy();
    }

    if(light.isTouching(enemy4)){
        enemy4.destroy();
    }

    if(light.isTouching(enemy5)){
        enemy5.destroy();
    }

    if(light.isTouching(enemy6)){
        enemy6.destroy();
    }

    if(light.isTouching(enemy7)){
        enemy7.destroy();
    }

    if(light.isTouching(enemy8)){
        enemy8.destroy();
    }

    if(light.isTouching(enemy9)){
        enemy9.destroy();
    }

    if(light.isTouching(enemy10)){
        enemy10.destroy();
    }

    
    
}


  function draw() {
    background(50,50,50);

    text("Lightning: "+count,20,50)
    text("Save The King Dodging The Enemies!", 260,90);

    if(gameState === PLAY){
        if(keyDown("a")){
            player.x = player.x-5
      }
      if(keyDown("d")){
          player.x = player.x+5
      }
  
      if(keyDown("w")){
          player.y = player.y-5
      }
  
      if(keyDown("s")){
          player.y = player.y+5
      }
    


      if(player.isTouching(enemy1)||player.isTouching(enemy2)
    ||player.isTouching(enemy3)||player.isTouching(enemy6)
    ||player.isTouching(enemy4)||player.isTouching(enemy7)
    ||player.isTouching(enemy5)||player.isTouching(enemy8)
    ||player.isTouching(enemy9)||player.isTouching(enemy10)){


        gameState = END;
    }
    if(player.isTouching(king)&& touch>0){
        gameState = 'win';
    }
    
   




    }


    else if(gameState === END){
        enemy1.setVelocity(0,0);
        enemy2.setVelocity(0,0);
        enemy3.setVelocity(0,0);
        enemy4.setVelocity(0,0);
        enemy5.setVelocity(0,0);
        enemy6.setVelocity(0,0);
        enemy7.setVelocity(0,0);
        enemy8.setVelocity(0,0);
        enemy9.setVelocity(0,0);
        enemy10.setVelocity(0,0);
        
        player.setVelocity(0,0);
        fill("white")
        text("GAME OVER...RELOAD YOUR PAGE TO RESTART",width/2-100,height/2);
    }

    if(gameState === "win"){
        
        
        player.x = king.x;
        player.y = king.y;
        
        enemy1.destroy();
        enemy2.destroy();
        enemy3.destroy();
        enemy4.destroy();
        enemy5.destroy();
        enemy6.destroy();
        enemy7.destroy();
        enemy8.destroy();
        enemy9.destroy();
        enemy10.destroy();

        
        
        player.setVelocity(0,0);
        textSize(30);
        textFont("Algerian");
        fill("white")
        text("You won!!!!!",width/2-60,height/2);
      
    }
    

  

    
    enemy1.bounceOff(edges[0]);
    enemy1.bounceOff(edges[1]);
    enemy1.bounceOff(edges[2]);
    enemy1.bounceOff(edges[3]);

    enemy2.bounceOff(edges[0]);
    enemy2.bounceOff(edges[1]);
    enemy2.bounceOff(edges[2]);
    enemy2.bounceOff(edges[3]);

    enemy3.bounceOff(edges[0]);
    enemy3.bounceOff(edges[1]);
    enemy3.bounceOff(edges[2]);
    enemy3.bounceOff(edges[3]);

    enemy4.bounceOff(edges[0]);
    enemy4.bounceOff(edges[1]);
    enemy4.bounceOff(edges[2]);
    enemy4.bounceOff(edges[3]);

    enemy5.bounceOff(edges[0]);
    enemy5.bounceOff(edges[1]);
    enemy5.bounceOff(edges[2]);
    enemy5.bounceOff(edges[3]);

    enemy6.bounceOff(edges[0]);
    enemy6.bounceOff(edges[1]);
    enemy6.bounceOff(edges[2]);
    enemy6.bounceOff(edges[3]);

    enemy7.bounceOff(edges[0]);
    enemy7.bounceOff(edges[1]);
    enemy7.bounceOff(edges[2]);
    enemy7.bounceOff(edges[3]);

    enemy8.bounceOff(edges[0]);
    enemy8.bounceOff(edges[1]);
    enemy8.bounceOff(edges[2]);
    enemy8.bounceOff(edges[3]);

    enemy9.bounceOff(edges[0]);
    enemy9.bounceOff(edges[1]);
    enemy9.bounceOff(edges[2]);
    enemy9.bounceOff(edges[3]);

    enemy10.bounceOff(edges[0]);
    enemy10.bounceOff(edges[1]);
    enemy10.bounceOff(edges[2]);
    enemy10.bounceOff(edges[3]);


    //player.x=camera.position.x;
    //player.y=camera.position.y;
    //camera.position.x =player.x 
    drawSprites();
}



function enemies(){
    speed = random(3,8);
    enemy1 = createSprite(20,10,20,20);
    enemy1.velocityY= speed;
    enemy1.velocityX= speed;
    enemy1.shapeColor = "green";
    enemy1.addImage(e2);
    
    enemy3 = createSprite(40,10,20,20);
    enemy3.velocityY= speed;
    enemy3.velocityX= speed+0.5;
    enemy3.addImage(e1);

    enemy4 = createSprite(0,height,20,20);
    enemy4.velocityY= -speed;
    enemy4.velocityX= speed+0.5;
    enemy4.addImage(e2);
    
    enemy5 = createSprite(600,0,20,20);
    enemy5.velocityY= speed+2;
    enemy5.velocityX= -speed+1;
    enemy5.addImage(e1);
    
    enemy2 = createSprite(width-30,height-30,20,20);
    enemy2.velocityY= -speed+1;
    enemy2.velocityX= -speed+1.7;
    enemy2.addImage(e1);

    enemy6 = createSprite(329,250,20,20);
    enemy6.velocityY= -speed+1;
    enemy6.velocityX= -speed+1.7;
    enemy6.addImage(e2);

    enemy7 = createSprite(5,230,20,20);
    enemy7.velocityY= -speed+1;
    enemy7.velocityX= -speed+1.7;
    enemy7.addImage(e1);
    
    enemy8 = createSprite(200,30,20,20);
    enemy8.velocityY= -speed+1;
    enemy8.velocityX= -speed+1.7;
    enemy8.addImage(e2);

    enemy9 = createSprite(180,15,20,20);
    enemy9.velocityY= speed+1;
    enemy9.velocityX= speed+1.7; 
    enemy9.addImage(e1);

    enemy10 = createSprite(5,230,20,20);
    enemy10.velocityY= -speed+1;
    enemy10.velocityX= -speed+1.7;
    enemy10.addImage(e2);

    enemy1.scale = 0.08
    enemy2.scale = 0.08
    enemy3.scale = 0.08
    enemy4.scale = 0.08
    enemy5.scale = 0.08
    enemy6.scale = 0.08
    enemy7.scale = 0.08
    enemy8.scale = 0.08
    enemy9.scale = 0.08
    enemy10.scale = 0.08

}

function mouseClicked(){

    if(gameState === PLAY){
        if(count>0){
            lightning();
            count-=1;
        }


        if(count === 0){
            fill("red");
            text("Lightning: "+count+" Out of Lightning, Reload your Page ",width/2-100,height/2)
             
        }
    }
   
    
}

