class box{
   constructor(x,y,width,height,options){
    var options = {
        restitution : 1,
        isStatic : true
     }  
     
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(World,this.body);
   }
 display(){
    push(); 
    var pos = this.body.position;
     rectMode(CENTER);
     fill(255);
     rect(pos.x,pos.y,this.width,this.height);
     pull();
    }
}