class Plane{

    constructor(x, y, z, w, h){

        if(w < 1 || h < 1){
            throw new Error("Width and height must be greater than or equal to 1.");
        }

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

        stroke(color(230, 138, 0));

        fill(color(115, 0, 230));
        
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

        if(w < 1 || h < 1 || l < 1){
            throw new Error("Width, height and length must be greater than or equal to 1.");
        }

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
        stroke(color(230, 138, 0));

        fill(color(115, 0, 230));

        beginShape();
        
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        
        endShape();
        beginShape();
        
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

        endShape();
        beginShape();

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

        endShape();
        beginShape();

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));

        endShape();
        beginShape();

        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));

        endShape();
        beginShape();

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

        endShape();
    }

}

class Sphere{
    
    constructor(x, y, z, r, st, se){

        if(st < 2 || se < 4){
            throw new Error("Stacks must be greater than or equal to 2 and Sectors must be greater than or equal to 4.");
        }

        let tr = new Transformations();
        this.stack = st;
        this.sector = se;
        this.angle = 180 / st;
        this.points = [];
        this.points[0] = new Vector(3, [x, y, z]);
        this.points[1] = new Vector(3, [x, y + r, z]);
        this.points[2] = new Vector(3, [x, y - r, z]);
        this.newPoint = tr.rotation3DZ(this.points[1], this.angle);
        this.points.push(this.newPoint);

        for(let i = 3; i <= st; i++){
            this.newPoint = tr.rotation3DZ(this.points[i], this.angle);
            this.points.push(this.newPoint);
        }

        this.angle = 360 / se;

        let aux = [];

        for(let i = 3; i <= st + 1; i++){
            this.newPoint = tr.rotation3DY(this.points[i], this.angle);
            this.points.push(this.newPoint);
            aux.push(this.newPoint);
        }

        for(let i = 0; i < se; i++){

            for(let j = 0; j < aux.length; j++){
                aux[j] = tr.rotation3DY(aux[j], this.angle);
            }

            for(let j = 0; j < aux.length; j++){
                this.points.push(aux[j]);
            }
        }
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
        let counter = 0;
        let centerUnder = 1;
        let nextUnder = 3;
        let centerTop = 2;
        let nextTop = this.stack + 1;

        stroke(color(230, 138, 0));

        fill(color(115, 0, 230));

        beginShape();

        for(let i = 1; i <= this.sector; i++){

            if(!(counter == this.sector)){
                vertex(this.points[centerUnder].get(1), this.points[centerUnder].get(2), this.points[centerUnder].get(3));
                vertex(this.points[nextUnder].get(1), this.points[nextUnder].get(2), this.points[nextUnder].get(3));
                vertex(this.points[nextUnder + (this.stack - 1)].get(1), this.points[nextUnder + (this.stack - 1)].get(2), this.points[nextUnder + (this.stack - 1)].get(3));
                vertex(this.points[centerUnder].get(1), this.points[centerUnder].get(2), this.points[centerUnder].get(3));
                nextUnder += this.stack - 1;
                counter++;
            }else{
                vertex(this.points[centerUnder].get(1), this.points[centerUnder].get(2), this.points[centerUnder].get(3));
                vertex(this.points[nextUnder].get(1), this.points[nextUnder].get(2), this.points[nextUnder].get(3));
                vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
                vertex(this.points[centerUnder].get(1), this.points[centerUnder].get(2), this.points[centerUnder].get(3));
                counter++;
            }           
        }

        endShape();

        

        let aux1 = 3;
        let aux2;

        for(let i = 1; i <= this.sector; i++){
            beginShape();
            aux2 = aux1;
            for(let j = 1; j <= this.stack - 2; j++){
                vertex(this.points[aux1].get(1), this.points[aux1].get(2), this.points[aux1].get(3));
                aux1 += 1;
                vertex(this.points[aux1].get(1), this.points[aux1].get(2), this.points[aux1].get(3));
                aux1 += this.stack - 2;
                vertex(this.points[aux1].get(1), this.points[aux1].get(2), this.points[aux1].get(3));
                aux1 += 1;
                vertex(this.points[aux1].get(1), this.points[aux1].get(2), this.points[aux1].get(3));
                aux1 -= this.stack - 1;
                vertex(this.points[aux1].get(1), this.points[aux1].get(2), this.points[aux1].get(3));
            }
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            aux1 = (this.stack + aux2) - 1;
            endShape();
        }

        

        beginShape();

        counter = 0;

        for(let i = 1; i <= this.sector; i++){

            if(!(counter == this.sector)){
                vertex(this.points[centerTop].get(1), this.points[centerTop].get(2), this.points[centerTop].get(3));
                vertex(this.points[nextTop].get(1), this.points[nextTop].get(2), this.points[nextTop].get(3));
                vertex(this.points[nextTop + (this.stack - 1)].get(1), this.points[nextTop + (this.stack - 1)].get(2), this.points[nextTop + (this.stack - 1)].get(3));
                vertex(this.points[centerTop].get(1), this.points[centerTop].get(2), this.points[centerTop].get(3));
                nextTop += this.stack - 1;
                counter++;
            }else{
                vertex(this.points[centerTop].get(1), this.points[centerTop].get(2), this.points[centerTop].get(3));
                vertex(this.points[nextTop].get(1), this.points[nextTop].get(2), this.points[nextTop].get(3));
                vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
                vertex(this.points[centerTop].get(1), this.points[centerTop].get(2), this.points[centerTop].get(3));
                counter++;
            }

            
        }

        endShape();    
    }

}

class Pyramid{

    constructor(x, y, z, w, h, hp){

        if(w < 1 || h < 1 || hp < 1){
            throw new Error("Width, height and 'hp' must be greater than or equal to 1.");
        }

        this.points = [
            new Vector(3, [x, y, z]),
            new Vector(3, [x + w, y, z]),
            new Vector(3, [x + w, y + h, z]),
            new Vector(3, [x, y + h, z]),
            new Vector(3, [(x + w) / 2, (y + h) / 2, z + hp])
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
        let counter = 0;
        let center = 4;
        let next = 0;

        stroke(color(230, 138, 0));

        fill(color(115, 0, 230));

        beginShape();
        
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        endShape();

        beginShape();
        
        for(let i = 1; i < this.points.length; i++){

            if(!(next == this.points.length - 2)){
                vertex(this.points[center].get(1), this.points[center].get(2), this.points[center].get(3));
                vertex(this.points[next].get(1), this.points[next].get(2), this.points[next].get(3));
                vertex(this.points[next + 1].get(1), this.points[next + 1].get(2), this.points[next + 1].get(3));
                vertex(this.points[center].get(1), this.points[center].get(2), this.points[center].get(3));
                next++;
            }else{
                vertex(this.points[center].get(1), this.points[center].get(2), this.points[center].get(3));
                vertex(this.points[next].get(1), this.points[next].get(2), this.points[next].get(3));
                vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
                vertex(this.points[center].get(1), this.points[center].get(2), this.points[center].get(3));
            }      
        }
        
        endShape();
    }

}