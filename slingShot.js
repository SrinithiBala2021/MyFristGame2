class SLINGSHOT{
    constructor(bodyA,pointB){

        var options ={
            bodyA : bodyA,
            pointB : pointB,
            density :0.2,
            length : 10
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null
    }
    attach(bodyA){
        this.sling.bodyA = bodyA
    }

    
}