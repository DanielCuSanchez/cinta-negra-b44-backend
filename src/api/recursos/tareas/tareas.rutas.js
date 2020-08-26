const express = require('express')
const tareasRutas = express.Router()

const { validadorTareas } = require('./tareas.validator')
const { getTareas, postTarea, updateTarea, deleteTarea } = require('./tareas.controlador')
const { respuesta } = require('../../utilidades/respuesta')


tareasRutas.get('/', async (req, res)=>{
    try {
        const tareas = await getTareas()
        //res.status(200).json({response: tareas})
        respuesta.success(req, res, 200, tareas)
    } catch (error) {
        //res.status(400).json({response: "Error"})
        respuesta.error(req, res, 400, "Error")
    }
})

tareasRutas.get('/:id', async (req, res)=>{
    const idTarea = req.params.id
    try {
        const tarea = await getTareas(idTarea)
        //res.status(200).json({response: tareas})
        respuesta.success(req, res, 200, tarea)
    } catch (error) {
        //res.status(400).json({response: "Error"})
        respuesta.error(req, res, 400, "Error")
    }
})

tareasRutas.post('/', validadorTareas, async (req, res)=>{
    const tarea = req.body
    try {
        const respuesta = await postTarea(tarea)
        res.status(201).json({response: respuesta})
    } catch (error) {
        res.status(400).json({response: "Error al crear la tarea"})
    }
})

tareasRutas.put('/:id',validadorTareas, async (req, res)=>{
    const idTarea = req.params.id
    const nuevaTarea = req.body
    try {
        const tareaActualizada = await updateTarea(idTarea, nuevaTarea)
        res.status(201).json({response: tareaActualizada })
    } catch (error) {
        res.status(400).json({response: "Error al actualizar la tarea"})
    }
})


tareasRutas.delete('/:id',async (req,res)=>{
    const idTarea = req.params.id
    try {
        //const respuesta = await deleteTarea(idTarea)
        const respuesta = await updateTarea(idTarea,{es_activo:false})
        res.status(201).json({response: respuesta})
        console.log("hahahah")
    } catch (error) {
        res.status(400).json({response: "No se pudo eliminar el usuario"})
    }
})


module.exports = { tareasRutas }