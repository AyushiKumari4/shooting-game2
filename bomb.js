class Bomb{
    constructor(x,y,width,height){
      
        this.sprite= createSprite(x,y,width,height)
        this.sprite.velocityY= 5;
        this.image=loadAnimation("images/bomb.png")
        this.Animation=loadAnimation("images/explo1.png","images/explo2.png","images/explo3.png","images/explo4.png","images/explo5.png","images/explo6.png","images/explo1.png","images/explo8.png")
        console.log(this.sprite.x)
    }
    display(){
        
      // this.sprite.shapeColor="yellow"
       this.sprite.addAnimation("bomb",this.image)
       this.sprite.addAnimation("bombExplosion",this.Animation)
       this.sprite.scale=1
  
    }
}