const express  = require('express');
const cors = require('cors');
const client = require('./conection.js');
const app = express();

client.connect();

app.use(cors());

app.listen(3300, ()=>{
    console.log("server listening to port 3300")
})

// método que publica as matrizes disponíveis no banco 
app.get('/matrizes', (req, res)=> {
    client.query(`select * from designs where availability = True;`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            console.log("Erro: " + err.message);
        }
        client.end;
    });
    
})

// método que publica as categorias disponíveis no banco 
app.get('/categorias', (req, res)=> {
    client.query(`select distinct category from designs;`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            console.log("Erro: " + err.message);
        }
        client.end;
    });
    
})

