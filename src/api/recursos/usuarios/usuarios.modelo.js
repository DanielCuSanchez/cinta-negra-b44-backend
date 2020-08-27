const {  Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const usuarioSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
    tareas: [{type: Schema.Types.ObjectId, ref: 'tareas'}],
    es_activo: { default: true, type: Boolean }
},{timestamps: true})

// usuarioSchema.pre('save', function(next) {
//     const usuario = this
//     if(!usuario.isModified('password')) return next()
//     bcrypt.genSalt(10, function(err, salt) {
//         if(err) return next(err)
//         bcrypt.hash(usuario.password, salt, function(err, hash) {
//             // Store hash in your password DB.
//             if(err) return next(err)

//             usuario.password = hash
//             next()
//         });
//     });
// })



const ModeloUsuario = model('usuarios', usuarioSchema)




module.exports = { ModeloUsuario }