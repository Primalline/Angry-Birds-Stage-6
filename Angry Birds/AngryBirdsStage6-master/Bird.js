class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");

    this.trajectory = [];
  }

  display() {
    super.display();

    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
    for(var a = 0; a < this.trajectory.length; a++){
      image(this.smokeImage, this.trajectory[a][0], this.trajectory[a][1]);
    } 
  }
}
