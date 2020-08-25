const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tareasSchema = new Schema({
    titulo: String,
    autor: String,
    contenido: String,
    es_activo: {default: true, type: Boolean},
},{ timestamps: true})

const ModeloTarea = mongoose.model('tareas',tareasSchema)

module.exports = { ModeloTarea }