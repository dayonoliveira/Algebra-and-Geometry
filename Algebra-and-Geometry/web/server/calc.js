let linalg = require("../../algebra-libraries/linalg.js");
let Matrix = require("../../algebra-libraries/matrix.js");

function transform(stringWithComma){
    let stringArray = stringWithComma.split(",");
    let intArray = [];

    for(let i of stringArray){
        intArray.push(parseInt(i));
    }
    return intArray;
}

module.exports = {
    gaussJordan(req, res){
        let la = new linalg()
        let elements = transform(req.body.matrixData);
        let matrixReq = new Matrix(req.body.matrixLines, req.body.matrixColumns, elements);
        let time = process.uptime();
        let results = la.solve(matrixReq).elements;
        let timeEnd = process.uptime();

        let responseObject = {
            time: (timeEnd - time).toFixed(2),
            results: results
        }

        res.send(responseObject);

    }
}