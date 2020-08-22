const { ModeloTarea } = require('./tareas.modelo')

const getTareas  = async()=>{
    const tareas = await ModeloTarea.find()
    return tareas
}

const postTarea = async ( tarea ) =>{
    const respuesta = await ModeloTarea.create(tarea)
    return respuesta
}

const updateTarea = async (_id, tareaParaActualizar )=>{
    console.log(`😄 ${_id}`)
    console.log(tareaParaActualizar)
    const tareaActualizada = await ModeloTarea.findByIdAndUpdate(_id, tareaParaActualizar,{new: true})
    return tareaActualizada
}


module.exports = { getTareas, postTarea, updateTarea }