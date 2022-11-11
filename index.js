const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");


const app = express();
const routs = require("./routes/routes")

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",routs)

app.listen(3000,()=>console.log('Servidor en puerto 3000')); 
