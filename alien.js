class Alien{
    constructor(x,y,width,height,alienSpeed){
      
        this.sprite= createSprite(x,y,width,height)
        this.sprite.velocityY= alienSpeed;
        this.image=loadImage("images/alien1.png")
        console.log(this.sprite.x)
    }
    display(){
        
       
        this.sprite.addImage(this.image)
        this.sprite.scale=0.7
  
    }
}