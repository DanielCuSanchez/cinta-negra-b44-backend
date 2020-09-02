const express = require('express')
const { initDatabase } = require('./database')

const app = express()

const PORT = 3000

app.use(express.json())
initDatabase()

app.use('/', require('./api/recursos/rutas') )



module.exports = { app, PORT }