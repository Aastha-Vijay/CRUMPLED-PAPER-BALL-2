class Basket {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          restitution:1,
          friction:1,
          density:1.0
      }
      this.dustbinImage = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      image(this.dustbinImage,955,225,140,150)
      var pos =this.body.position;
      fill("white");
      stroke("blue");
      strokeWeight(3);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
  