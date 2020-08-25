const { ModeloTarea } = require('./tareas.modelo')

const getTareas  = async()=>{
    const tareas = await ModeloTarea.find({es_activo: true}).exec()
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

const deleteTarea = async (_id)=>{
    console.log(`😄 ${_id}`)
    const respuesta = await ModeloTarea.findByIdAndDelete(_id)
    return respuesta
}


module.exports = { getTareas, postTarea, updateTarea, deleteTarea }