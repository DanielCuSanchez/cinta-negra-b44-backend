const express = require('express')
const tareasRutas = express.Router()

const { getTareas, postTarea, updateTarea, deleteTarea } = require('./tareas.controlador')


tareasRutas.get('/', async (req, res)=>{
    try {
        const tareas = await getTareas()
        res.status(200).json({response: tareas})
    } catch (error) {
        res.status(400).json({response: "Error"})
    }
})

tareasRutas.post('/', async (req, res)=>{
    const tarea = req.body
    try {
        const respuesta = await postTarea(tarea)
        res.status(201).json({response: respuesta})
    } catch (error) {
        res.status(400).json({response: "Error al crear la tarea"})
    }
})

tareasRutas.put('/:id', async (req, res)=>{
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
        const respuesta = await deleteTarea(idTarea)
        res.status(201).json({response: respuesta})
        console.log("hahahah")
    } catch (error) {
        res.status(400).json({response: "No se pudo eliminar el usuario"})
    }
})


module.exports = { tareasRutas }