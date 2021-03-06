class scorePowerup{
    constructor(x,y,width,height){
      
        this.sprite= createSprite(x,y,width,height)
        this.sprite.velocityY= 5;
        this.image=loadImage("images/coin1.png")
        console.log(this.sprite.x)
    }
    display(){
        
      // this.sprite.shapeColor="yellow"
       this.sprite.addImage(this.image)
       this.sprite.scale=1
  
    }
}