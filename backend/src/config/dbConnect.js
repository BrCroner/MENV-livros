import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://croner:aNImNpKjqNr9fLsy@cluster-node.3ovwqr2.mongodb.net/test')

let db = mongoose.connection

export default db