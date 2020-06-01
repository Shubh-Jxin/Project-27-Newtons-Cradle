class Bob {
    constructor(x){
        var options={
            isStatic:false,
            restitution:1.2,
            friction:0.5,
            density:0.7  
        }
        this.body= Bodies.circle(x,350,20,options)
        this.x= x
        this.radius= 20;
        World.add(world, this.body)
    }
    display(){
        var pos= this.body.position
        ellipseMode(RADIUS);
        fill("tomato")
        ellipse(pos.x,pos.y,this.radius);
    }
}