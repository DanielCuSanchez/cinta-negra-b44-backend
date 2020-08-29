const express = require('express')
const usuariosRutas = express.Router()
const {
    getUsuarios,
    getUsuario,
    postUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuariosTareas,
    getUsuarioTarea,
    postUsuarioTarea,
    updateUsuarioTarea
} = require('./usuarios.controlador')
const { validadorUsuarios, hasheoPassword } = require('./usuarios.middlewares')
const { respuesta } = require('../../utilidades/respuesta')

//Logica de CRUD usuario
usuariosRutas.get('/',getUsuarios)
usuariosRutas.get('/:id', getUsuario)
usuariosRutas.post('/',validadorUsuarios, hasheoPassword, postUsuario)
usuariosRutas.put('/:id', updateUsuario)
usuariosRutas.delete('/:id',deleteUsuario)

//Logica de CRUD interaccion con las tareas
usuariosRutas.get('/:idUsuario/tareas',getUsuariosTareas)
usuariosRutas.get('/:idUsuario/tareas/:idTarea', getUsuarioTarea)
usuariosRutas.post('/:idUsuario/tareas', postUsuarioTarea)
usuariosRutas.put('/:idUsuario/tareas/:idTarea',updateUsuarioTarea)
//usuariosRutas.delete('/:idUsuario/tareas/:idTarea',updateUsuarioTarea)
usuariosRutas.delete('/:idUsuario/tareas/',(req, res)=>{
})

module.exports = { usuariosRutas }