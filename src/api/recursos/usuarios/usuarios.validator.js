const Joi = require('@hapi/joi')
const { respuesta } = require('../../utilidades/respuesta')
const schemaValidadorUsuarios = Joi.object({
    nombre: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).alphanum().required()
})
const validadorUsuarios = (req, res, next)=>{
    const usuario = req.body
    const { error } = schemaValidadorUsuarios.validate(usuario, { abortEarly: false })
    if(!error){
        next()
    }
    else{
        const errores = error.details.map(error => error.message)
        console.log(errores)
        respuesta.error(req, res, 400, errores)
    }
}
module.exports = { validadorUsuarios }