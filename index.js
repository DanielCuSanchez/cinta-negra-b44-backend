require('dotenv').config()
const { app, PORT } = require('./src')

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))
