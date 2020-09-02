const {  Router } = require('express')

const routerRutas = Router()

routerRutas.use('/tareas',require('../tareas/tareas.rutas'))
routerRutas.use('/usuarios', require('../usuarios/usuarios.rutas'))


module.exports = routerRutas