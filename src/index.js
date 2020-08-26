const express = require('express')
const { initDatabase } = require('./database')
const { tareasRutas } = require('./api/recursos/tareas/tareas.rutas')
const { usuariosRutas } = require('./api/recursos/usuarios/usuarios.rutas')

const app = express()

const PORT = 3000

app.use(express.json())
initDatabase()


app.use('/tareas',tareasRutas)
app.use('/usuarios', usuariosRutas)





module.exports = { app, PORT }