class snow{
    constructor(x, y, radius){
        var options={
           friction:0.03,
           density: 0.48, 
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius= 5
        this.image = loadImage("snow4.webp")

        World.add(world, this.body);
    }
    display(){
       var  pos= this.body.position;
       var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);

        image(this.image,0, 0, 40, 40);
        pop();
    }
}