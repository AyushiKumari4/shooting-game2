class backgroundI{
    constructor(x,y,width,height){
        

        this.sprite= createSprite(x,y,width,height)
        //increase velocity
        this.sprite.velocityY=-20
        this.bgImage = loadImage("images/bgImage2.png");
    }
    display(img){
      
   
        this.sprite.addImage(img)
        this.sprite.scale=1.6
      
    }
}

// created the entire class