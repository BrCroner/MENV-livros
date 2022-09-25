import livros from '../models/Livro.js'

class LivroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros)
    })
  }
  static listarLivroPorId = (req, res) => {
    let { id } = req.params
    livros.findById(id, (err, livros) => {
      if( err) {
        res.status(400).send({message: `${err} - ID do livro não localizado.`})
      } else {
        res.status(200).send(livros)
      }
    })
  }
  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body)
    livro.save(err => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastratar livro.`})
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }
  static alterarLivro = (req, res) => {
    let { id } = req.params
    let index = buscaLivro(id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
  }
  static excluirLivro = (req, res) => {
    let { id } = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido!`)
  }
}

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id === id)
}


export default LivroController
