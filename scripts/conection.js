const {Client} = require('pg')

const client = new Client ({
    host: 'localhost',
    port: 5432,
    user: 'mbordados',
    password: 'mbordados',
    database: 'ALURA'
})

module.exports = client


/* client.connect()

client.query(`select * from aluno;`, (err, resp)=>{
    if(err){
        console.log("Erro: " + err.message);
    } else {
        console.log(resp.rows)
    }
    
})

client.end;
*/