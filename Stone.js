class Stone{
    constructor(x, y, width, height, ) {
        var Soptions = {
            
            
            
        }
        this.body = Bodies.rectangle(x, y, width, height,Soptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/rock.png");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}