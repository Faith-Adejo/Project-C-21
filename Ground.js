class Ground{
    constructor(x,y,width,heigth){
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigth=heigth;
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,heigth,options);
        World.add(world,this.body);
    }
    display(){
        var ground_position=this.body.position;
        push();
        translate(ground_position.x,ground_position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.heigth);
        pop();
    }
}