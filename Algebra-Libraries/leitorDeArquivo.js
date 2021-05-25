let input = document.getElementById('file');
let textarea1 = document.getElementById('textarea1');



function procuraSimbolo(a){
    let newVet = [];
    let contador = 0;

    for(let i = 0; i < a.length - 1; i++){
        if(!a[i].startsWith("%")){
            newVet[contador] = a[i];
            contador++
        }
    }
    
    return newVet;
}

function vetorLinhas(a){
    let vetAux = [];
    let vetAux2 = [];

    vetAux.push(a[0].split(" "));

    vetAux2[0] = parseInt(vetAux[0][0]);

    return vetAux2;
}

function vetorColunas(a){
    let vetAux = [];
    let vetAux2 = [];

    vetAux.push(a[0].split(" "));

    vetAux2[0] = parseInt(vetAux[0][1]);

    return vetAux2;
}

function vetorElementos(a){
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

input.addEventListener('change', () => {
    let files = input.files;
 
    if(files.length == 0) return;
 
    const file = files[0];
 
    let reader = new FileReader();
 
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        let tamanhoMatriz = procuraSimbolo(lines).length;
        let linhas = vetorLinhas(procuraSimbolo(lines));
        let colunas = vetorColunas(procuraSimbolo(lines));
        let elementos = vetorElementos(procuraSimbolo(lines));
        let a = new Matrix(linhas[0], colunas[0], elementos);
        let la = new LinearAlgebra();
        //console.time('la.gauss("a")');
        //let b = la.gauss(a);
        //console.timeEnd('la.gauss("a")');
        //let resultados = [];
        //console.time('la.solve("a")');
        resultados = la.solve(a);
        //console.timeEnd('la.solve("a")');
        textarea1.value = lines.join('\n');
        console.log(resultados);
        //console.log("pronto!");

    };
 
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file);
    
});