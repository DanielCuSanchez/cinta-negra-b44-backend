const express = require('express')
const { initDatabase } = require('./database')
const { tareasRutas } = require('./api/recursos/tareas/tareas.rutas')
const { routerUsuarios } = require('./api/recursos/usuarios/usuarios.rutas')

const app = express()

const PORT = 3000

app.use(express.json())
initDatabase()


app.use('/tareas',tareasRutas)
app.use('/usuarios', routerUsuarios)
app.use('/auth', require('./api/recursos/rutasAutenticacion') )





module.exports = { app, PORT }