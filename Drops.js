class drops {
    constructor(){
        var options ={
            restitution:0.5,
            friction:0.3,
            density:1.2,
                  }
         this.body = Bodies.circle(random(10, 390),random(0, 30),5,options);
         World.add(world, this.body);
    }

    respawn() {
        if(this.body.position.y > 700){
            Matter.Body.setPosition(this.body, {x:random(10, 390), y:random(0, 100)});

        }
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("black");
        fill("blue");
        pop();
    }
}