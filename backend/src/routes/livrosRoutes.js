import express from 'express'
import LivroController from '../controllers/livrosController.js'

// Criando as rotas
const router = express.Router()
router
//GET Livros
  .get('/livros', LivroController.listarLivros)
  //busca por título
  //busca por autor
  //busca por editora
  .get('/livros/:id', LivroController.listarLivroPorId)
// POST Livro
  .post('/cadastrar-livro', LivroController.cadastrarLivro)
// PUT Livro
  .put('/livros/:id', LivroController.alterarLivro)
// DELETE Livro
  .delete('/livros/:id', LivroController.excluirLivro)

export default router