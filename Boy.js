class Boy{
    constructor(x, y, width, height, ) {
        var Boptions = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, Boptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/boy.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}