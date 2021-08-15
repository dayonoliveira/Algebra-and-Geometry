const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();
let urlEncodedParser = bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000});
let calc = require("./calc.js");

app.use(cors());

app.post("/GaussJordan", urlEncodedParser, calc.gaussJordan);

app.listen(8080, function(){
    console.log("Server is on!");
    console.log("Press 'ctrl + c' to quit.");
})