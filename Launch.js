class Launch{
    constructor(body1,point2){
var options={

    bodyA:body1,
     pointB:point2,
     stiffness: 0.01,
     length:20
     
    }

    this.Launch=Constraint.create(options)
    World.add(world,this.Launch)
    }
      
    fly() {

        this.Launch.bodyA=null

    }
    
    attach(body){
        this.Launch.bodyA = body
    }
      
    show(){
        if(this.Launch.bodyA){
            var pointA= this.Launch.bodyA.position
            var pointB= this.Launch.pointB
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            } 
        }
    
}