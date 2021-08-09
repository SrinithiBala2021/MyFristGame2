class PLANT{
    constructor(x,y,w,h){
     
        var options = {
        isStatic : true,
        friction :1

        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.image = loadImage("Plant 1.png")

    }
    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,80,80)
    }
}