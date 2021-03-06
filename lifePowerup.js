class LifePowerup{
    constructor(x,y,width,height){
      
        this.sprite= createSprite(x,y,width,height)
        this.sprite.velocityY= 5;
        this.image=loadImage("images/lifeheart.jpg")
        console.log(this.sprite.x)
    }
    display(){
        
       //this.sprite.shapeColor="blue"
       this.sprite.addImage(this.image)
       this.sprite.addImage(this.image)
       this.sprite.scale=0.2
  
    }
}