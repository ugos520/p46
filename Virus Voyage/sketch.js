var virus
var virusimg, bg1
var ground;
var leftb, rightb;
var s1, s2, s3, s4, rand
var sm1, sm2, pos
var subjectgroup, sanitizedgroup
var scire

function preload(){
bg1=loadImage("instantbackground.jpeg");
bactteria=loadImage("coronavirus.png");
s1=loadImage("subjects.png");
s2=loadImage("subject2.jpeg");
s3=loadImage("subjects3.jpeg");
s4=loadImage("subjects4.png");

sm1=loadImage("sm.png");
sm2=loadImage("sm2.jpeg");
}

function setup() 
{
createCanvas(600,600);

  subjectgroup=createGroup();
  sanitizedgroup=createGroup();

  virus=createSprite(200,200,50,50);
  virus.addImage(bactteria);
  virus.scale=0.2;

  
  leftb=createSprite(-10,0,30,800);
  rightb=createSprite(610,0,30,800);

  ground=createSprite(300,300);
  ground.addImage("ground",bg1);
  ground.velocityY = 1;

  console.log("Virus Depth  :" + virus.depth);
  console.log("Ground Depth :"+ ground.depth);

  score=0;

}


function draw() 
{

//console.log(ground.y);

background("voilet");



if(ground.y > 400){
  ground.y = 300
}

  virus.depth=ground.depth;
  virus.depth=virus.depth+1;


  if(keyIsDown(LEFT_ARROW))
  {
    virus.x-=20;
  }
    if(keyIsDown(RIGHT_ARROW))
  {
    virus.x+=20;
  }

  virus.collide(leftb);
  virus.collide(rightb);

  
  
drawSprites();

}

function subjectss(){
  if(World.frameCount%80===0){
    
    sub=createSprite(random(1,599),800,40,40);
    sub.velocityY = 1;
    

    rand=Math.round(random(1,4));
    if(rand===1){
      sub.addImage(s1);
    }
        if(rand===2){
      sub.addImage(s2);
    }
        if(rand===3){
      sub.addImage(s3);
    }
        if(rand===4){
      sub.addImage(s4);
    }
    sub.setLifetime=100;
    subjectgroup.add(sub);
  }
}


function sanitizeduh(){
  if(World.frameCount%60===0)
  {
    san=createSprite(random(1,599),800,40,40);
    san.velocityY=1;

    pos=Math.round(random(1,2));
    if(pos===1){
      san.addImage(sm1);
    }
        if(pos===2){
      san.addImage(sm2);
    }
    sub.setLifetime=100;
    sanitizedgroup.add(san);
  }
}