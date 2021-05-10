class Transformations{

    translate2D(vector, dx, dy){
        
        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 2){
            throw new Error("The size of the vector must be 2.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(3, 3, [1, 0, dx, 0, 1, dy, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    translate3D(vector, dx, dy, dz){
        
        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [1, 0, 0, dx, 0, 1, 0, dy, 0, 0, 1, dz, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    rotation2D(vector, angle){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 2){
            throw new Error("The size of the vector must be 2.");
        }else if(angle < 0 || angle > 360){
            throw new Error("The angle must be between 0 and 360.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(3, 3, [Math.cos(angle * Math.PI/180), -Math.sin(angle * Math.PI/180), 0, Math.sin(angle * Math.PI/180), Math.cos(angle * Math.PI/180), 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    rotation3DX(vector, angle){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }else if(angle < 0 || angle > 360){
            throw new Error("The angle must be between 0 and 360.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [1, 0, 0, 0, 0, Math.cos(angle * Math.PI/180), -Math.sin(angle * Math.PI/180), 0, 0, Math.sin(angle * Math.PI/180), Math.cos(angle * Math.PI/180), 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    rotation3DY(vector, angle){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }else if(angle < 0 || angle > 360){
            throw new Error("The angle must be between 0 and 360.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [Math.cos(angle * Math.PI/180), 0, Math.sin(angle * Math.PI/180), 0, 0, 1, 0, 0, -Math.sin(angle * Math.PI/180), 0, Math.cos(angle * Math.PI/180), 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    rotation3DZ(vector, angle){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }else if(angle < 0 || angle > 360){
            throw new Error("The angle must be between 0 and 360.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [Math.cos(angle * Math.PI/180), -Math.sin(angle * Math.PI/180), 0, 0, Math.sin(angle * Math.PI/180), Math.cos(angle * Math.PI/180), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
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
        c.rows--;

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
        c.rows--;

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
        c.rows--;

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
        c.rows--;

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
        c.rows--;

        return c;
    }

    projection2DX(vector){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 2){
            throw new Error("The size of the vector must be 2.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(3, 3, [1, 0, 0, 0, 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    projection2DY(vector){

        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 2){
            throw new Error("The size of the vector must be 2.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(3, 3, [0, 0, 0, 0, 1, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    projection3DXY(vector){
        
        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    projection3DXZ(vector){
        
        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    projection3DYZ(vector){
                
        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 3){
            throw new Error("The size of the vector must be 3.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(4, 4, [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }

    shearing(vector, kx, ky){
        
        if(!(vector instanceof Vector)){
            throw new Error("The parameter must be an object of type Vector.");
        }else if(vector.dim != 2){
            throw new Error("The size of the vector must be 2.");
        }

        let la = new LinearAlgebra();
        let c = new Vector(vector.dim + 1);
        let canonicalMatrix = new Matrix(3, 3, [1, kx, 0, ky, 1, 0, 0, 0, 1]);

        for(let i = 1; i <= c.dim; i++){
            if(i == c.dim){
                c.set(i, 1);
            }else{
                c.set(i, vector.get(i));
            }
        }

        c = la.dot(canonicalMatrix,c);

        c.elements.pop();
        c.rows--;

        return c;
    }
}