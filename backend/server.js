// IMPORT
import app from './src/app.js'

const port = process.env.PORT || 3000

// App Escutando
app.listen(port, () => {
  console.log(`🪄  Servidor escutando em http://localhost:${port}`)
})
