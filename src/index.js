const express = require('express')
const { initDatabase } = require('./database')

const app = express()

const PORT = 3000

app.use(express.json())
initDatabase()


app.use('/tareas',require('./api/recursos/tareas/tareas.rutas'))
app.use('/usuarios', require('./api/recursos/usuarios/usuarios.rutas'))
app.use('/auth', require('./api/recursos/rutasAutenticacion') )





module.exports = { app, PORT }