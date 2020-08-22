const { ModeloTarea } = require('./tareas.modelo')

const getTareas  = async()=>{
    const tareas = await ModeloTarea.find()
    return tareas
}

const postTarea = async ( tarea ) =>{
    const respuesta = await ModeloTarea.create(tarea)
    return respuesta
}


module.exports = { getTareas, postTarea }