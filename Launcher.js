class Launcher{
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.004,
        lenght: 50
      } 
      this.pointB = pointB;
      this.launch = Constraint.create(options);
      World.add(world,this.launch);
      }
      display(){
        if(this.launch.bodyA){
        strokeWeight(4);
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
      }

      fly(){
        this.launch.bodyA = null;
      }
      attach(body){
        this.launch.bodyA = body;

      }

}
