const { ModeloTarea } = require('./tareas.modelo')


const getTareas  = async(_id)=>{
    let respuesta
    const jsonConfig = _id ? {_id, es_activo: true} : {es_activo: true}
    console.log(jsonConfig)
    respuesta = await ModeloTarea.find(jsonConfig).exec()
    return respuesta
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