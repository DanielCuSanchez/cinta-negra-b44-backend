const express = require('express')

const tareasRutas = express.Router()

let tareas = []

tareasRutas.get('/',(req, res)=>{
    res.status(200).json({response: tareas})
})

tareasRutas.post('/', (req, res)=>{
    const tarea = req.body
    tareas.push(tarea)
    res.status(201).json({response: "Tarea creada"})
})

tareasRutas.put('/:id',(req, res)=>{
    const idTarea = req.params.id
    
})
tareasRutas.delete('/:id',(req,res)=>{
    const idTarea = req.params.id
    
})


module.exports = { tareasRutas }