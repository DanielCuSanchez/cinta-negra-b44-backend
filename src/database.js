
const mongoose = require('mongoose')
const { URL_MONGODB } = require('./api/config')


const initDatabase = ()=>{
    mongoose.connect(URL_MONGODB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    const mongo = mongoose.connection
    mongo.on('error', ()=> console.log('Error en la conexion con la DB' ))
    mongo.once('open', ()=> console.log('Conectado a mongo DB 🚀'))
}

module.exports = { initDatabase }

