const {  Schema, model } = require('mongoose')

const usuarioSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
    es_activo: { default: true, type: Boolean }
},{timestamps: true})

const ModeloUsuario = model('usuarios', usuarioSchema)




module.exports = { ModeloUsuario }