const express = require('express')
const usuariosRutas = express.Router()

const { getUsuarios, postUsuario, updateUsuario } = require('./usuarios.controlador')
const { respuesta } = require('../../utilidades/respuesta')


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

usuariosRutas.get('/:id', async (req, res)=>{
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

usuariosRutas.post('/', async (req, res)=>{
    const usuario = req.body
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


module.exports = { usuariosRutas }