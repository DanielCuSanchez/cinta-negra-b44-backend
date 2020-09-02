const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { initDatabase } = require('./database')
const { PUERTO } = require('./api/config')

const app = express()

const PORT = PUERTO

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

initDatabase()

app.use('/', require('./api/recursos/rutas') )



module.exports = { app, PORT }