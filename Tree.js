class Tree{
    constructor(x, y, width, height) {
        var Toptions = {
           
           Density:1000
        }
        this.body = Bodies.rectangle(x, y, width, height, Toptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
      }
      display(){
   
        
         
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        
      }
}