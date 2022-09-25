import express from 'express'
import AutorController from '../controllers/autorController.js'

// Criando as rotas
const router = express.Router()
router
//GET Autores
  .get('/Autores', AutorController.listarAutores)
  .get('/Autores/:id', AutorController.listarAutorPorId)
// POST Autor
  .post('/cadastrar-autor', AutorController.cadastrarAutor)
// PUT Autor
  .put('/autor/:id', AutorController.alterarAutor)
// DELETE Autor
  .delete('/autores/:id', AutorController.excluirAutor)
  
export default router