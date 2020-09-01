const express = require('express')
const routerUsuarios = express.Router()
const {
    getUsuarios,
    getUsuario,
    postUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuariosTareas,
    getUsuarioTarea,
    postUsuarioTarea,
    updateUsuarioTarea,
    deleteUsuarioTarea
} = require('./usuarios.controlador')
const { validadorUsuarios, hasheoPassword } = require('./usuarios.middlewares')
//Logica de CRUD usuario
routerUsuarios.get('/',getUsuarios)
routerUsuarios.get('/:id', getUsuario)
routerUsuarios.post('/',validadorUsuarios, hasheoPassword, postUsuario)
routerUsuarios.put('/:id', updateUsuario)
routerUsuarios.delete('/:id',deleteUsuario)

//Logica de CRUD interaccion con las tareas
routerUsuarios.get('/:idUsuario/tareas',getUsuariosTareas)
routerUsuarios.get('/:idUsuario/tareas/:idTarea', getUsuarioTarea)
routerUsuarios.post('/:idUsuario/tareas', postUsuarioTarea)
routerUsuarios.put('/:idUsuario/tareas/:idTarea',updateUsuarioTarea)
routerUsuarios.delete('/:idUsuario/tareas/:idTarea',deleteUsuarioTarea)

module.exports = { routerUsuarios }