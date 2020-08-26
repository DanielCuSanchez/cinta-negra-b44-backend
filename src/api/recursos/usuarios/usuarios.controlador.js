const { ModeloUsuario } = require('./usuarios.modelo')

const getUsuarios  = async(_id)=>{
    let respuesta
    if(!_id){
        respuesta = await ModeloUsuario.find({es_activo: true}).exec()
    }else{
        respuesta = await ModeloUsuario.findById(_id,{es_activo: true}).exec()
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


module.exports = { getUsuarios, postUsuario, updateUsuario, deleteUsuario }