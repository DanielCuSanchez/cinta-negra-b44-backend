const express = require('express')
const router = express.Router()
const { signup, login} = require('../usuarios/usuarios.controlador')
const { validadorUsuarios, hasheoPassword, validadorLogin } = require('../usuarios/usuarios.middlewares')


router.post('/signup',validadorUsuarios,hasheoPassword, signup)
router.post('/login',validadorLogin, login)

module.exports = router