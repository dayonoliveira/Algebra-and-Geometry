class Matrix{

    constructor(rows, cols, elements){
        
        if(rows == undefined || cols == undefined){
            throw new Error("A quantidade de linhas e colunas deve ser especificada");
        }
        
        if(rows < 0){
            throw new Error("A quantidade de linhas deve ser igual ou maior que zero");
        }

        if(cols < 0){
            throw new Error("A quantidade de colunas deve ser igual ou maior que zero");
        }
        
        this.rows = rows;
        this.cols = cols;

        let size = rows * cols;

        if(elements == undefined){
            this.elements = [];
            
            for(let i = 0; i < size; i++){
                this.elements.push(0);
            }
        }else{
            if(elements.length != size){
                throw new Error("A quantidade de elementos é incompatível com o tamanho da matriz");
            }

            this.elements = elements;
        }
    }

    get(i, j){
        this.#validateElementIndex(i, j);
        return this.elements[this.#getIndex(i, j)];
    }

    set(i, j, value){
        this.#validateElementIndex(i, j);
        this.elements[this.#getIndex(i, j)] = value;
    }

    #getIndex(i, j){
        return (j - 1) + (i - 1) * this.cols;
    }

    #validateElementIndex(i, j){
        if(i <= 0 || i > this.rows){
            throw new Error(`O valor de i deve estar entre 1 e ${this.rows}`);
        }

        if(j <= 0 || j > this.cols){
            throw new Error(`O valor de j deve estar entre 1 e ${this.cols}`);
        }
    }
}