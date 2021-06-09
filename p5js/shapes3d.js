class Plane{

    constructor(x, y, z, w, h, l){
        this.points = [
            new Vector(3, [x, y, z]),
            new Vector(3, [x + w, y, z]),
            new Vector(3, [x + w, y + h, z]),
            new Vector(3, [x, y + h, z])
        ]
    }

    rotate(angle){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            //this.points[i] = tr.rotation3DX(this.points[i], angle);
            //this.points[i] = tr.rotation3DY(this.points[i], angle);
            this.points[i] = tr.rotation3DZ(this.points[i], angle);
        }
    }

    translate(x, y, z){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.translate3D(this.points[i], x, y, z);
        }
    }

    draw(){
        
        beginShape();

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        endShape();

    }
        
}

class Parallelogram{

    constructor(x, y, z, w, h, l){
        this.points = [
            new Vector(3, [x, y, z]),
            new Vector(3, [x + w, y, z]),
            new Vector(3, [x + w, y + h, z]),
            new Vector(3, [x, y + h, z]),
            new Vector(3, [x, y, z + l]),
            new Vector(3, [x + w, y, z + l]),
            new Vector(3, [x + w, y + h, z + l]),
            new Vector(3, [x, y + h, z + l])
        ]
    }

    rotate(angle){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            //this.points[i] = tr.rotation3DX(this.points[i], angle);
            //this.points[i] = tr.rotation3DY(this.points[i], angle);
            this.points[i] = tr.rotation3DZ(this.points[i], angle);
        }
    }

    translate(x, y, z){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.translate3D(this.points[i], x, y, z);
        }
    }

    draw(){
        beginShape();
        
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        
        endShape();
        beginShape();
        
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))

        endShape();
        beginShape();

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))

        endShape();
        beginShape();

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))

        endShape();
        beginShape();

        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3))

        endShape();
        beginShape();

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))

        endShape();
        

    }

}