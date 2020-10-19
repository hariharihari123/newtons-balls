class ball{

    constructor(x, y, radius,options)
    {
        var options = {
        isStatic:false,
        restitution:0.7,
        friction:1.0,
        density:1.0
        }
        this.x=x;
		this.y=y;
		this.r=radius;
        this.body = Bodies.circle(this.x, this.y, (this.r)/2,options);
        
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
   // imageMode(CENTER);
    fill("red");
    ellipse(0,0,this.r,this.r);
    pop();
    }
};