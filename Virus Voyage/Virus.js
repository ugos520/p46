class Virus {
    constructor(x,y,width,height){
        this.x=200;
        this.y=-50;
        this.width=40;
        this.height=40;
        this.image=loadImage("coronavirus.png")
    }

    display(){
    rect(this.x,this.y,this.width,this.height);
    image(this.image,150,400,40,40);

    }
  
  
  }