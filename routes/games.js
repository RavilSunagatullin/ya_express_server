const { sendAllGames, deleteGame, addGame } = require('../controllers/games')
const getAllGames = require('../middlewares/games')
const gamesRouter = require('express').Router()


gamesRouter.get('/games', getAllGames, sendAllGames)
gamesRouter.delete('/games/:id', getAllGames, deleteGame)
gamesRouter.post('/games', getAllGames, addGame)

module.exports = gamesRouter