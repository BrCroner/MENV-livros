// IMPORTS
import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

// Estabelecendo conexão com o Banco de Dados
db.on('erro', console.log.bind( console, 'Erro de conexão.'))
db.once('open', () => console.log('Conexão ao Banco de Dados realizada com sucesso.'))

// Criar Express App
const app = express()

// APP.USE - CORS, Body-Parser, Morgan
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

// TODAS AS ROTAS
routes(app)

export default app
