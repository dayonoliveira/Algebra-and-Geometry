class Transformations{

    translate2D(vector, dx, dy){

    }

    translate3D(vector, dx, dy, dz){

    }

    rotation2D(vector, angle){

    }

    rotation3DX(vector, angle){

    }

    rotation3DY(vector, angle){

    }

    rotation3DZ(vector, angle){

    }

    reflection2DX(vector){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 2){
            throw new Error("The size of the vector must be 2.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(3, 3, [1, 0, 0, 0, -1, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();

        return c;
    }

    reflection2DY(vector){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 2){
            throw new Error("The size of the vector must be 2.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(3, 3, [-1, 0, 0, 0, 1, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();

        return c;
    }

    reflection3DXY(vector){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();

        return c;
    }

    reflection3DXZ(vector){
        
        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();

        return c;
    }

    reflection3DYZ(vector){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();

        return c;
    }

    projection2DX(vector){

    }

    projection2DY(vector){

    }

    projection3DX(vector){

    }

    projection3DY(vector){

    }

    projection3DZ(vector){

    }

    shearing(vector, kx, ky){
        
    }


}