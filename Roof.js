class Roof{
    constructor(){
        var options= {
            isStatic:true
        }
    this.body= Bodies.rectangle(400,150,400,20,options)
    this.width=300
    this.height=20
    World.add(world, this.body);
    }
    display(){
        var pos= this.body.position
        fill("grey");
        rectMode(CENTER);
        noStroke();
        rect(pos.x,pos.y,this.width, this.height);
    }
}