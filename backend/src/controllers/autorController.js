import autores from '../models/Autores.js'

class AutorController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores)
    })
  }
  static listarAutorPorId = (req, res) => {
    let { id } = req.params
    autores.findById(id, (err, autores) => {
      if( err) {
        res.status(400).send({message: `${err} - ID do autor não localizado.`})
      } else {
        res.status(200).send(autores)
      }
    })
  }
  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body)
    autor.save(err => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastratar autor.`})
      } else {
        res.status(201).send(Autor.toJSON())
      }
    })
  }
  static alterarAutor = (req, res) => {
    let { id } = req.params
    let index = buscaAutor(id)
    autores[index].titulo = req.body.titulo
    res.json(autores)
  }
  static excluirAutor = (req, res) => {
    let { id } = req.params
    let index = buscaAutor(id)
    autores.splice(index, 1)
    res.send(`Autor ${id} removido!`)
  }
}

function buscaAutor(id) {
  return autores.findIndex(Autor => Autor.id === id)
}


export default AutorController
