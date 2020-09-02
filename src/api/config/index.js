const MODO_CONFIGURACION = process.env.MODO_CONFIGURACION || 'STAGING'

const config = {
    PRODUCTION: {
        URL_MONGODB: `mongodb+srv://${process.env.CREDENCIALES_MONGO}@cluster0.kbonr.mongodb.net/produccion`,
        PUERTO: 3000
    },
    STAGING:{
        URL_MONGODB: `mongodb+srv://${process.env.CREDENCIALES_MONGO}@cluster0.kbonr.mongodb.net/staging`,
        PUERTO: 4000
    },
    DEV:{
        URL_MONGODB: `mongodb+srv://${process.env.CREDENCIALES_MONGO}@cluster0.kbonr.mongodb.net/`,
        PUERTO: 5000
    }
}

module.exports = config[MODO_CONFIGURACION]
