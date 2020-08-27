const { ModeloUsuario } = require('./usuarios.modelo')
const { ModeloTarea } = require('../tareas/tareas.modelo')

const getUsuarios  = async(_id)=>{
    let respuesta
    if(!_id){
        respuesta = await ModeloUsuario.find({es_activo: true}).exec()
    }else{
        respuesta = await ModeloUsuario.findOne({_id, es_activo: true})
    }
    return respuesta
}

const postUsuario = async ( Usuario ) =>{
    const respuesta = await ModeloUsuario.create(Usuario)
    return respuesta
}

const updateUsuario = async (_id, UsuarioParaActualizar )=>{
    console.log(`😄 ${_id}`)
    console.log(UsuarioParaActualizar)
    const UsuarioActualizada = await ModeloUsuario.findByIdAndUpdate(_id, UsuarioParaActualizar,{new: true})
    return UsuarioActualizada
}
const deleteUsuario = async (_id)=>{
    console.log(`😄 ${_id}`)
    const respuesta = await ModeloUsuario.findByIdAndDelete(_id)
    return respuesta
}
//CRUD interaccion tareas
const getTareasUsuarios = async(_id)=>{
    const usuario = await ModeloUsuario.findById({_id}).populate('tareas')
    return usuario.tareas
}
const postTareaUsuario = async(_id, tareaUsuario)=>{
    const Usuario = await getUsuarios(_id)
    const tareaCreada = await ModeloTarea.create(tareaUsuario)
    Usuario.tareas.push(tareaCreada._id)
    await Usuario.save()
    return tareaCreada
}

module.exports = { getUsuarios, postUsuario, updateUsuario, deleteUsuario, getTareasUsuarios, postTareaUsuario }