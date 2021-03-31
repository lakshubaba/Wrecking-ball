class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display() {
  strokeWeight(4)
  stroke("green")
  fill("white")
  super.display();
  }
  
  

};
