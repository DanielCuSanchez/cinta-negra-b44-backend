const express = require('express')
const usuariosRutas = express.Router()
const bcrypt = require('bcrypt')

const { getUsuarios, postUsuario, updateUsuario, getTareasUsuarios, postTareaUsuario } = require('./usuarios.controlador')
const { validadorUsuarios } = require('./usuarios.validator')
const { respuesta } = require('../../utilidades/respuesta')

//Logica de CRUD usuario
usuariosRutas.get('/', async (req, res)=>{
    try {
        const usuarios = await getUsuarios()
        //res.status(200).json({response: usuarios})
        respuesta.success(req, res, 200, usuarios)
    } catch (error) {
        //res.status(400).json({response: "Error"})
        respuesta.error(req, res, 400, "Error")
    }
})

usuariosRutas.get('/:id', async(req, res)=>{
    const idUsuario = req.params.id
    try {
        const usuario = await getUsuarios(idUsuario)
        //res.status(200).json({response: usuarios})
        respuesta.success(req, res, 200, usuario)
    } catch (error) {
        //res.status(400).json({response: "Error"})
        respuesta.error(req, res, 400, "Error")
    }
})

usuariosRutas.post('/',validadorUsuarios, async (req, res)=>{
    const usuario = req.body
    //Technique 1
    // bcrypt.hash(usuario.password, 10).then(function(hash) {
    //     // Store hash in your password DB.
    //     console.log(hash)
    //     usuario.password = hash
    // })
    console.log(usuario)
    const passwordHasheada = bcrypt.hashSync(usuario.password, 10)
    usuario.password = passwordHasheada
    console.log(usuario)
    try {
        const respuesta = await postUsuario(usuario)
        res.status(201).json({response: respuesta})
    } catch (error) {
        res.status(400).json({response: "Error al crear la Usuario"})
    }
})

usuariosRutas.put('/:id', async (req, res)=>{
    const idUsuario = req.params.id
    const nuevoUsuario = req.body
    try {
        const UsuarioActualizado = await updateUsuario(idUsuario, nuevoUsuario)
        res.status(201).json({response: UsuarioActualizado })
    } catch (error) {
        res.status(400).json({response: "Error al actualizar la Usuario"})
    }
})


usuariosRutas.delete('/:id',async (req,res)=>{
    const idUsuario = req.params.id
    try {
        //const respuesta = await deleteUsuario(idUsuario)
        const respuesta = await updateUsuario(idUsuario,{es_activo:false})
        res.status(201).json({response: respuesta})
    } catch (error) {
        res.status(400).json({response: "No se pudo eliminar el usuario"})
    }
})

//Logica de CRUD interaccion con las tareas

usuariosRutas.get('/:idUsuario/tareas',async (req, res)=>{
    const idUsuario = req.params.idUsuario
    try {
        const tareasUsuario = await getTareasUsuarios(idUsuario)
        respuesta.success(req, res, 200, tareasUsuario)
    } catch (error) {
        respuesta.error(req, res, 400, 'No se pudo consultar las tareas')
    }
})
usuariosRutas.get('/:idUsuario/tareas/:idTarea',(req, res)=>{
    
})
usuariosRutas.post('/:idUsuario/tareas', async (req, res)=>{
    const idUsuario = req.params.idUsuario
    const tareaUsuario = req.body
    try {
        const tareaCreada = await postTareaUsuario(idUsuario, tareaUsuario)
        respuesta.success(req, res, 201, tareaCreada )

    } catch (error) {
        respuesta.error(req, res, 400, error)
    }
})
usuariosRutas.put('/:idUsuario/tareas/:idTarea',(req, res)=>{
    
})
usuariosRutas.delete('/:idUsuario/tareas/:idTarea',(req, res)=>{

})
usuariosRutas.delete('/:idUsuario/tareas/',(req, res)=>{
    
})

module.exports = { usuariosRutas }