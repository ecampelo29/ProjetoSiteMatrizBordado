const {Client} = require('pg')

const client = new Client ({
    host: 'localhost',
    port: 5432,
    user: 'mbordados',
    password: 'mbordados',
    database: 'mbordados'
})

module.exports = client
