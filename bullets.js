class Bullets{
    constructor(x,y,width,height){
      
        this.sprite= createSprite(x,y,width,height)
        this.sprite.velocityY= -20;
        this.image=loadImage("images/bulletImg.png")
        console.log(this.sprite.x)
    }
    display(){
        
       this.sprite.shapeColor="red"
       this.sprite.addImage(this.image)
       this.sprite.scale=0.08
  
    }
}