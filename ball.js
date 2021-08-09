class BALL {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.5
        }
        this.r = r
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }

    display(){

        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)
    }
}