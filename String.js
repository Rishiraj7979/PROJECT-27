class Rope{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
            //stiffness:0.04,
            //length:10,
        }
        this.Rope =Constraint.create(options);
        World.add(world,this.Rope);
    }
display(){
    var pointA=this.Rope.bodyA.position;
    var pointB=this.Rope.bodyB.position;
    strokeWeight(4);
    var a1x=pointA.x;
    var a1y=pointA.y;
    var a2x=pointB.x+this.offsetX;
    var a2y=pointB.y+this.offsetY;
    line (a1x,a1y,a2x,a2y);



    
}




    
}
