class FileData{

    findSymbol(a){
        let newVet = [];
        let counter = 0;
    
        for(let i = 0; i < a.length - 1; i++){
            if(!a[i].startsWith("%")){
                newVet[counter] = a[i];
                counter++
            }
        }
        
        return newVet;
    }
    
    elementVector(a){
        let vetAux = [];
        let vetAux2 = [];
    
        for(let i = 0; i < a.length; i++){
            vetAux.push(a[i].split(" "));
        }
    
        for(let i = 1; i < vetAux.length; i++){
            vetAux2[i - 1] = parseInt(vetAux[i][2]);
        }
    
        return vetAux2;
    }

}